import FilterSection from './components/FilterSection/FilterSection';
import RestaurantList from './components/RestaurantList/RestaurantList';
import { getFilteredPriceRangeList } from './utils/functions/getFilteredPriceRangeList';
import { getFilters } from './utils/functions/getFilters';
import FilterCardGroup from './components/FilterCardGroup/FilterCardGroup';
import { ISearchParamsPromise } from './Models/ISearchParams';

const HomePage = async ({ searchParams }: ISearchParamsPromise) => {
  const resolvedSearchParams = searchParams ? await searchParams : {};

  const filteredPriceRanges = await getFilteredPriceRangeList();
  if (filteredPriceRanges === null) {
    console.error('No restaurants available.');
    return <div>No restaurants available. Please try again later.</div>;
  }

  const filters = await getFilters();
  if (filters === null) {
    console.error('No filters available.');
    return <div>No filters available. Please try again later.</div>;
  }

  return (
    <section className='flex flex-col flex-1 gap-6 overflow-hidden no-scrollbar lg:flex-row lg:gap-[20px] lg:pl-40'>
      <div className='flex px-24 lg:p-24 lg:flex-col lg:w-[239px] lg:gap-8 lg:bg-white lg:border-0.6 lg:border-stroke lg:rounded'>
        <FilterSection
          filteredPriceRanges={filteredPriceRanges}
          filters={filters}
        />
      </div>
      <div className='flex flex-col flex-1 gap-6 h-full lg:gap-10 overflow-hidden no-scrollbar'>
        <FilterCardGroup filters={filters} />
        <RestaurantList resolvedSearchParams={resolvedSearchParams} />
      </div>
    </section>
  );
};

export default HomePage;
