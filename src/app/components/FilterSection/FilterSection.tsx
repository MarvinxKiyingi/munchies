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
  const deliveryTime = searchParams.get('delivery_time') || '';
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

    const queryParams = new URLSearchParams();

    if (newDeliveryTime) queryParams.set('delivery_time', newDeliveryTime);
    updatedFilters.forEach((filter) => queryParams.append('filter', filter));
    updatedPriceRanges.forEach((range) =>
      queryParams.append('price_range', range)
    );

    return `?${queryParams.toString()}`;
  };

  return (
    <>
      <div className='flex flex-col gap-[10px]'>
        <h2 className='text-body text-black'>Delivery time</h2>
        <ul className='flex gap-[10px] overflow-x-auto no-scrollbar'>
          {deliveryTimeOptions.map(({ label, value }) => (
            <li key={value}>
              <Link
                href={generateParamLink(
                  deliveryTime !== value ? value : '',
                  null,
                  null
                )}
              >
                <span className='chip-button'>{label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className='hidden lg:flex overflow-x-auto no-scrollbar'>
        <ul className='flex gap-[10px]'>
          {filteredPriceRanges.map((priceRange) => (
            <li key={priceRange.id}>
              <Link
                href={generateParamLink(deliveryTime, null, priceRange.range)}
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
