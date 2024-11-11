import { IFilterRestaurantsByParams } from '../../Models/IFilterRestaurantsByParams';
import { checkDeliveryTimes } from './checkDeliveryTimes';
import { checkFilters } from './checkFilters';

export const filterRestaurantsByParams = ({
  filterIds,
  priceRangeIds,
  restaurants,
  selectedDeliveryTimeValues,
}: IFilterRestaurantsByParams) => {
  if (!restaurants || restaurants.length === 0) {
    return [];
  }

  return restaurants.filter((restaurant) => {
    const matchesDeliveryTimes = checkDeliveryTimes(
      restaurant.delivery_time_minutes,
      selectedDeliveryTimeValues
    );

    const matchesFilters = checkFilters(restaurant.filter_ids, filterIds);

    const matchesPriceRange =
      priceRangeIds.length === 0 ||
      priceRangeIds.includes(restaurant.price_range_id);

    return matchesDeliveryTimes && matchesFilters && matchesPriceRange;
  });
};
