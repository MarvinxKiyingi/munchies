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
    <section className='flex flex-col flex-1 gap-6 overflow-hidden no-scrollbar'>
      <FilterSection filteredPriceRanges={filteredPriceRanges} />
      <FilterCardGroup filters={filters} />
      <RestaurantList resolvedSearchParams={resolvedSearchParams} />
    </section>
  );
};

export default HomePage;
