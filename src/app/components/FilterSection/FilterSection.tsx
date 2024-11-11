'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { IPriceRange } from '@/app/Models/IPriceRange';
import { addOrRemoveItem } from '@/app/utils/functions/addOrRemoveItem';
import { deliveryTimeOptions } from '@/app/utils/deliveryTimeOptions';

const FilterSection = ({
  filteredPriceRanges,
}: {
  filteredPriceRanges: IPriceRange[];
}) => {
  const searchParams = useSearchParams();
  const activeFilters = searchParams.getAll('filter');
  const deliveryTimes = searchParams.getAll('delivery_time');
  const activePriceRanges = searchParams.getAll('price_range');

  const generateParamLink = (
    newDeliveryTime: string | null,
    newFilter: string | null,
    newPriceRange: string | null
  ) => {
    const updatedFilters = addOrRemoveItem(activeFilters, newFilter);
    const updatedPriceRanges = addOrRemoveItem(
      activePriceRanges,
      newPriceRange
    );
    const updatedDeliveryTimes = addOrRemoveItem(
      deliveryTimes,
      newDeliveryTime
    );

    const queryParams = new URLSearchParams();

    updatedDeliveryTimes.forEach((deliveryTime) =>
      queryParams.append('delivery_time', deliveryTime)
    );
    updatedFilters.forEach((filter) => queryParams.append('filter', filter));
    updatedPriceRanges.forEach((range) =>
      queryParams.append('price_range', range)
    );

    return `?${queryParams.toString()}`;
  };

  return (
    <>
      <h2 className='hidden lg:flex text-h1 leading-[normal]'>Filter</h2>
      <div className='flex flex-col gap-[10px] overflow-x-auto no-scrollbar'>
        <h3 className='text-body text-[rgba(0,0,0,0.4)] font-bold'>
          DELIVERY TIME
        </h3>
        <ul className='flex gap-[10px] overflow-x-auto no-scrollbar lg:flex-wrap'>
          {deliveryTimeOptions.map(({ label, value }) => (
            <li key={value}>
              <Link
                className={`chip-button ${
                  deliveryTimes.includes(value) ? 'active' : ''
                }`}
                href={generateParamLink(value, null, null)}
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
                  activePriceRanges.includes(priceRange.range) ? 'active' : ''
                }`}
                href={generateParamLink(null, null, priceRange.range)}
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
