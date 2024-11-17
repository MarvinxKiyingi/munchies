'use client';

import { IFiltersList } from '@/app/Models/IFilter';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import FoodCard from '../FoodCard/FoodCard';
import { generateParamLink } from '@/app/utils/functions/generateParamLink';

const FilterCardGroup = ({ filters }: IFiltersList) => {
  const searchParams = useSearchParams();
  const activeFiltersObject = {
    activeFilters: searchParams.getAll('category'),
    activeDeliveryTimes: searchParams.getAll('delivery_time'),
    activePriceRanges: searchParams.getAll('price_range'),
  };

  return (
    <div className='flex flex-col gap-5 min-h-[80px] overflow-auto no-scrollbar'>
      <div className='flex overflow-x-auto no-scrollbar min-h-[80px] px-24 lg:pl-0'>
        <ul className='flex gap-[10px] '>
          {(filters?.length ?? 0) > 0 ? (
            filters?.map((category) => (
              <li key={category.id}>
                <Link
                  href={generateParamLink(
                    { ...activeFiltersObject },
                    null,
                    category.name.toLowerCase(),
                    null
                  )}
                >
                  <FoodCard
                    image_url={category.image_url}
                    name={category.name}
                    iconSize='small'
                    title={category.name}
                    className={
                      activeFiltersObject.activeFilters.includes(
                        category.name.toLowerCase()
                      )
                        ? 'active-mobile-only'
                        : ''
                    }
                  />
                </Link>
              </li>
            ))
          ) : (
            <div>No filters available. Please try again later.</div>
          )}
        </ul>
      </div>
    </div>
  );
};

export default FilterCardGroup;
