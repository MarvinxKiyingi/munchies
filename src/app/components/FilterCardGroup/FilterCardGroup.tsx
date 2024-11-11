'use client';

import { IFiltersList } from '@/app/Models/IFilter';
import { addOrRemoveItem } from '@/app/utils/functions/addOrRemoveItem';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import FoodCard from '../FoodCard/FoodCard';

const FilterCardGroup = ({ filters }: IFiltersList) => {
  const searchParams = useSearchParams();
  const activeFilters = searchParams.getAll('filter');
  const deliveryTimes = searchParams.getAll('delivery_time');
  const activePriceRanges = searchParams.getAll('price_range');
  if (!filters) {
    console.error('No filters available.');
    return <div>No filters available. Please try again later.</div>;
  }

  const generateParamLink = (
    newDeliveryTime: string | null,
    newFilter: string | null,
    newPriceRange: string | null
  ): string => {
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
    <div className='flex flex-col gap-5 min-h-[80px] overflow-auto no-scrollbar'>
      <div className='flex overflow-x-auto no-scrollbar min-h-[80px] px-24 lg:pl-0'>
        <ul className='flex gap-[10px] '>
          {filters.map((filter) => (
            <li key={filter.id}>
              <Link
                href={generateParamLink(null, filter.name.toLowerCase(), null)}
              >
                <FoodCard
                  image_url={filter.image_url}
                  name={filter.name}
                  iconSize='small'
                  title={filter.name}
                  className={
                    activeFilters.includes(filter.name.toLowerCase())
                      ? 'active-mobile-only'
                      : ''
                  }
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FilterCardGroup;
