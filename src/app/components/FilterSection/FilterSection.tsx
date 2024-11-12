'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { deliveryTimeOptions } from '@/app/utils/deliveryTimeOptions';
import { IFilterSection } from '@/app/Models/IFilterSection';
import { generateParamLink } from '@/app/utils/functions/generateParamLink';

const FilterSection = ({ filteredPriceRanges, filters }: IFilterSection) => {
  const searchParams = useSearchParams();
  const activeFiltersObject = {
    activeFilters: searchParams.getAll('filter'),
    activeDeliveryTimes: searchParams.getAll('delivery_time'),
    activePriceRanges: searchParams.getAll('price_range'),
  };

  if (!filters) {
    console.error('No filters available.');
    return <div>No filters available. Please try again later.</div>;
  }

  return (
    <>
      <h2 className='hidden lg:flex text-h1 leading-[normal]'>Filter</h2>
      <div className='hidden lg:flex lg:flex-col lg:gap-[10px] lg:overflow-x-auto no-scrollbar'>
        <h3 className='text-body text-[rgba(0,0,0,0.4)] font-bold'>
          FOOD CATEGORY
        </h3>
        <ul className='flex gap-[10px] overflow-x-auto no-scrollbar lg:flex-wrap'>
          {filters.map((filter) => (
            <li key={filter.id}>
              <Link
                className={`chip-button ${
                  activeFiltersObject.activeFilters.includes(
                    filter.name.toLowerCase()
                  )
                    ? 'active'
                    : ''
                }`}
                href={generateParamLink(
                  { ...activeFiltersObject },
                  null,
                  filter.name.toLowerCase(),
                  null
                )}
              >
                {filter.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className='flex flex-col gap-[10px] overflow-x-auto no-scrollbar'>
        <h3 className='text-body text-[rgba(0,0,0,0.4)] font-bold'>
          DELIVERY TIME
        </h3>
        <ul className='flex gap-[10px] overflow-x-auto no-scrollbar lg:flex-wrap'>
          {deliveryTimeOptions.map(({ label, value }) => (
            <li key={value}>
              <Link
                className={`chip-button ${
                  activeFiltersObject.activeDeliveryTimes.includes(value)
                    ? 'active'
                    : ''
                }`}
                href={generateParamLink(
                  { ...activeFiltersObject },
                  value,
                  null,
                  null
                )}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className='hidden flex-col gap-[10px] lg:flex overflow-x-auto no-scrollbar'>
        <h3 className='text-body text-[rgba(0,0,0,0.4)] font-bold '>
          PRICE RANGE
        </h3>
        <ul className='flex gap-[10px] lg:flex-wrap'>
          {filteredPriceRanges.map((priceRange) => (
            <li key={priceRange.id}>
              <Link
                className={`chip-button ${
                  activeFiltersObject.activePriceRanges.includes(
                    priceRange.range
                  )
                    ? 'active'
                    : ''
                }`}
                href={generateParamLink(
                  { ...activeFiltersObject },
                  null,
                  null,
                  priceRange.range
                )}
              >
                {priceRange.range}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default FilterSection;
