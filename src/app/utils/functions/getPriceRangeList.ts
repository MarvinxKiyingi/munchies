import { IPriceRange } from '../../Models/IPriceRange';
import { getPriceRange } from './getPriceRange';
import { getRestaurants } from './getRestaurants';

export const getPriceRangeList = async (): Promise<IPriceRange[] | null> => {
  const restaurants = await getRestaurants();

  if (!restaurants || restaurants.length === 0) {
    console.log('No restaurants found');
    return [];
  }

  const priceRanges = await Promise.all(
    restaurants.map(async (restaurant) => {
      return await getPriceRange(restaurant.price_range_id);
    })
  );

  // Filter out null values from the priceRanges array
  return priceRanges.filter(
    (priceRange): priceRange is IPriceRange => priceRange !== null
  );
};
