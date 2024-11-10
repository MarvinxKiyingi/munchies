'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { IFilter } from '@/app/Models/IFilter';
import { IPriceRange } from '@/app/Models/IPriceRange';
import { IDeliveryTime } from '@/app/Models/IDeliveryTime';
import { toggleItemInArray } from '@/app/utils/functions/toggleItemArray';

const FilterSection = ({
  filters,
  filteredPriceRanges,
  deliveryTimeOptions,
}: {
  filters: IFilter[];
  filteredPriceRanges: IPriceRange[];
  deliveryTimeOptions: IDeliveryTime[];
}) => {
  const searchParams = useSearchParams();
  const activeFilters = searchParams.getAll('filter');
  const deliveryTime = searchParams.get('delivery_time') || '';
  const activePriceRanges = searchParams.getAll('price_range');

  const generateLink = (
    newDeliveryTime: string | null,
    newFilter: string | null,
    newPriceRange: string | null
  ) => {
    const updatedFilters = toggleItemInArray(activeFilters, newFilter);
    const updatedPriceRanges = toggleItemInArray(
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
        <div className='flex gap-[10px] overflow-x-auto no-scrollbar'>
          {deliveryTimeOptions.map(({ label, value }) => (
            <Link
              key={value}
              href={generateLink(
                deliveryTime !== value ? value : '',
                null,
                null
              )}
            >
              {label}
            </Link>
          ))}
        </div>
      </div>

      <div className='flex overflow-x-auto no-scrollbar'>
        <div className='flex gap-[10px]'>
          {filteredPriceRanges.map((priceRange) => (
            <Link
              key={priceRange.id}
              href={generateLink(deliveryTime, null, priceRange.range)}
            >
              {priceRange.range}
            </Link>
          ))}
        </div>
      </div>

      <div className='flex overflow-x-auto no-scrollbar min-h-[80px]'>
        <div className='flex gap-[10px]'>
          {filters.map((filter) => (
            <Link
              key={filter.id}
              href={generateLink(deliveryTime, filter.name.toLowerCase(), null)}
            >
              {filter.name}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default FilterSection;
