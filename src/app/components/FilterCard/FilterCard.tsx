'use client';
import FoodCard from '../FoodCard/FoodCard';
import { useSearchParams } from 'next/navigation';
import { IFilter } from '@/app/Models/IFilter';
import Link from 'next/link';

const FilterCard = ({
  filters,
  filterID,
}: {
  filters: [IFilter];
  filterID: string;
}) => {
  const searchParams = useSearchParams();
  const currentFilters = searchParams.getAll('filter');

  const isActive = currentFilters.includes(filterID);
  const newFilters = isActive
    ? currentFilters.filter((f) => f !== filterID)
    : [...currentFilters, filterID];

  const queryString = new URLSearchParams(
    newFilters.map((f) => ['filter', f])
  ).toString();
  return (
    <Link href={`?${queryString}`}>
      <div className='flex overflow-x-auto no-scrollbar min-h-[80px]'>
        <div className='flex gap-[10px] '>
          {filters.map((filter) => (
            <FoodCard
              key={filter.id}
              image_url={filter.image_url}
              name={filter.name}
              iconSize='small'
              title={filter.name}
            />
          ))}
        </div>
      </div>
    </Link>
  );
};

export default FilterCard;
