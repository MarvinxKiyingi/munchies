import RestaurantCard from '../RestaurantCard/RestaurantCard';
import Button from '../Button/Button';
import { ISearchParams } from '@/app/Models/ISearchParams';
import { getRestaurants } from '@/app/utils/functions/getRestaurants';
import { filterRestaurantsByParams } from '@/app/utils/functions/filterRestaurantsByParams';
import { getFilters } from '@/app/utils/functions/getFilters';
import { getFilteredPriceRangeList } from '@/app/utils/functions/getFilteredPriceRangeList';
import { getSelectedParams } from '@/app/utils/functions/getSelectedParams';
import { deliveryTimeOptions } from '@/app/utils/deliveryTimeOptions';
import { sortRestaurantsByStatusAndDeliveryTime } from '@/app/utils/functions/sortRestaurantsByStatusAndDeliveryTime';

const RestaurantList = async ({
  resolvedSearchParams,
}: {
  resolvedSearchParams: ISearchParams;
}) => {
  const restaurants = await getRestaurants();
  if (!restaurants) {
    console.error('No restaurants available.');
    return <div>No restaurants available. Please try again later.</div>;
  }

  const filters = await getFilters();
  if (filters === null) {
    console.error('No filters available.');
    return [];
  }

  const filteredPriceRanges = await getFilteredPriceRangeList();
  if (filteredPriceRanges === null) {
    console.error('No price ranges available.');
    return [];
  }

  const selectedFilters = getSelectedParams(resolvedSearchParams.filter);

  const selectedPriceRanges = getSelectedParams(
    resolvedSearchParams.price_range
  );

  const selectedDeliveryTimes = getSelectedParams(
    resolvedSearchParams.delivery_time
  );

  const filterIds = filters
    .filter((filter) => selectedFilters.includes(filter.name.toLowerCase()))
    .map((filter) => filter.id);

  const priceRangeIds = filteredPriceRanges
    .filter((priceRange) => selectedPriceRanges.includes(priceRange.range))
    .map((priceRange) => priceRange.id);

  const selectedDeliveryTimeValues = deliveryTimeOptions
    .filter((deliveryTime) =>
      selectedDeliveryTimes.includes(deliveryTime.value)
    )
    .map((deliveryTime) => deliveryTime.value);

  const filteredRestaurants = filterRestaurantsByParams({
    filterIds,
    priceRangeIds,
    restaurants,
    selectedDeliveryTimeValues,
  });

  const sortedRestaurantsByOpenStatus =
    await sortRestaurantsByStatusAndDeliveryTime(filteredRestaurants);

  return (
    <div className='flex flex-col gap-5 h-full overflow-auto no-scrollbar px-24 lg:gap-8 lg:px-0 lg:w-[88%]'>
      <h2 className='text-[20px]'>Restaurant’s</h2>

      {filteredRestaurants.length > 0 ? (
        <div className='flex flex-col gap-5 pb-24 overflow-auto no-scrollbar lg:pb-0 lg:grid lg:grid-cols-3'>
          {sortedRestaurantsByOpenStatus.map((restaurant) => (
            <RestaurantCard key={restaurant.id} {...restaurant} />
          ))}
        </div>
      ) : (
        <div className='flex flex-col justify-between h-full pb-24 lg:pb-20'>
          <h3 className='text-h1 font-bold leading-[normal] w-[246px]'>
            No restaurants match your filters.
          </h3>
          <Button
            as='link'
            href='/'
            variant='primary'
            text='Reset filter'
            className=''
          />
        </div>
      )}
    </div>
  );
};

export default RestaurantList;
