import FilterSection from './components/FilterSection/FilterSection';
import RestaurantList from './components/RestaurantList/RestaurantList';
import { fetchDataWithErrorHandling } from './utils/functions/fetchDataWithErrorHandling';
import { filterRestaurantsByParams } from './utils/functions/filterRestaurantsByParams';
import { getFilteredPriceRangeList } from './utils/functions/getFilteredPriceRangeList';
import { getFilters } from './utils/functions/getFilters';
import { getRestaurants } from './utils/functions/getRestaurants';
import { getSelectedParams } from './utils/functions/getSelectedParams';
import { ISearchParams } from './Models/ISearchParams';
import { deliveryTimeOptions } from './utils/deliveryTimeOptions';

const HomePage = async ({ searchParams: asyncSearchParams }: ISearchParams) => {
  const searchParams = await asyncSearchParams;

  const restaurants = await fetchDataWithErrorHandling(
    getRestaurants,
    'Failed to fetch restaurants'
  );
  const filters = await fetchDataWithErrorHandling(
    getFilters,
    'Failed to fetch filters'
  );
  const filteredPriceRanges = await fetchDataWithErrorHandling(
    getFilteredPriceRangeList,
    'Failed to fetch price ranges'
  );

  const selectedFilters = getSelectedParams(searchParams.filter);
  const selectedPriceRanges = getSelectedParams(searchParams.price_range);

  const filterIds = filters
    .filter((filter) => selectedFilters.includes(filter.name.toLowerCase()))
    .map((filter) => filter.id);

  const priceRangeIds = filteredPriceRanges
    .filter((priceRange) => selectedPriceRanges.includes(priceRange.range))
    .map((priceRange) => priceRange.id);

  const selectedDeliveryTime = searchParams.delivery_time || '';

  const filteredRestaurants = filterRestaurantsByParams({
    filterIds,
    priceRangeIds,
    restaurants,
    selectedDeliveryTime,
  });

  return (
    <section className='flex flex-col flex-1 gap-6 overflow-hidden pb-20 no-scrollbar'>
      <FilterSection
        filters={filters}
        filteredPriceRanges={filteredPriceRanges}
        deliveryTimeOptions={deliveryTimeOptions}
      />
      <RestaurantList restaurants={filteredRestaurants} />
    </section>
  );
};

export default HomePage;
