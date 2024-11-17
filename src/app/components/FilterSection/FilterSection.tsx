'use client';

import { useSearchParams } from 'next/navigation';
import { deliveryTimeOptions } from '@/app/utils/deliveryTimeOptions';
import { IFilterSection } from '@/app/Models/IFilterSection';
import { generateParamLink } from '@/app/utils/functions/generateParamLink';
import FilterChip from '../FilterChip/FilterChip';

const FilterSection = ({ filteredPriceRanges, filters }: IFilterSection) => {
  const searchParams = useSearchParams();
  const activeFiltersObject = {
    activeCategories: searchParams.getAll('category'),
    activeDeliveryTimes: searchParams.getAll('delivery_time'),
    activePriceRanges: searchParams.getAll('price_range'),
  };

  return (
    <>
      <h2 className='hidden lg:flex text-h1 leading-[normal]'>Filter</h2>

      <div className='hidden lg:flex lg:flex-col lg:gap-[10px] lg:overflow-x-auto no-scrollbar'>
        <h3 className='text-body text-black-opacity-04 font-bold'>
          FOOD CATEGORY
        </h3>
        <ul className='flex gap-[10px] overflow-x-auto no-scrollbar lg:flex-wrap'>
          {(filters?.length ?? 0) > 0 ? (
            filters?.map(({ id, name }) => {
              const isActive = activeFiltersObject.activeCategories.includes(
                name.toLowerCase()
              );
              const link = generateParamLink(
                { ...activeFiltersObject },
                null,
                name.toLowerCase(),
                null
              );

              return (
                <li key={id}>
                  <FilterChip isActive={isActive} href={link} text={name} />
                </li>
              );
            })
          ) : (
            <div>No filters available. Please try again later.</div>
          )}
        </ul>
      </div>

      <div className='flex flex-col gap-[10px] overflow-x-auto no-scrollbar'>
        <h3 className='text-body text-black-opacity-04 font-bold'>
          DELIVERY TIME
        </h3>
        <ul className='flex gap-[10px] overflow-x-auto no-scrollbar lg:flex-wrap'>
          {deliveryTimeOptions.map(({ label, value }) => {
            const isActive =
              activeFiltersObject.activeDeliveryTimes.includes(value);
            const link = generateParamLink(
              { ...activeFiltersObject },
              value,
              null,
              null
            );

            return (
              <li key={value}>
                <FilterChip isActive={isActive} href={link} text={label} />
              </li>
            );
          })}
        </ul>
      </div>

      <div className='hidden flex-col gap-[10px] lg:flex overflow-x-auto no-scrollbar'>
        <h3 className='text-body text-black-opacity-04 font-bold '>
          PRICE RANGE
        </h3>
        <ul className='flex gap-[10px] lg:flex-wrap'>
          {(filteredPriceRanges?.length ?? 0) > 0 ? (
            filteredPriceRanges?.map(({ id, range }) => {
              const isActive =
                activeFiltersObject.activePriceRanges.includes(range);
              const link = generateParamLink(
                { ...activeFiltersObject },
                null,
                null,
                range
              );

              return (
                <li key={id}>
                  <FilterChip isActive={isActive} href={link} text={range} />
                </li>
              );
            })
          ) : (
            <div>No restaurants available. Please try again later.</div>
          )}
        </ul>
      </div>
    </>
  );
};

export default FilterSection;
