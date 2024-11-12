'use client';

import { IFiltersList } from '@/app/Models/IFilter';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import FoodCard from '../FoodCard/FoodCard';
import { generateParamLink } from '@/app/utils/functions/generateParamLink';

const FilterCardGroup = ({ filters }: IFiltersList) => {
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
    <div className='flex flex-col gap-5 min-h-[80px] overflow-auto no-scrollbar'>
      <div className='flex overflow-x-auto no-scrollbar min-h-[80px] px-24 lg:pl-0'>
        <ul className='flex gap-[10px] '>
          {filters.map((filter) => (
            <li key={filter.id}>
              <Link
                href={generateParamLink(
                  { ...activeFiltersObject },
                  null,
                  filter.name.toLowerCase(),
                  null
                )}
              >
                <FoodCard
                  image_url={filter.image_url}
                  name={filter.name}
                  iconSize='small'
                  title={filter.name}
                  className={
                    activeFiltersObject.activeFilters.includes(
                      filter.name.toLowerCase()
                    )
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
