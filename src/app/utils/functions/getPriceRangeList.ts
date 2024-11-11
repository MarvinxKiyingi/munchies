import { IPriceRange } from '../../Models/IPriceRange';
import { getPriceRange } from './getPriceRange';
import { getRestaurants } from './getRestaurants';

export const getPriceRangeList = async (): Promise<IPriceRange[] | null> => {
  const restaurants = await getRestaurants();

  if (!restaurants || restaurants.length === 0) {
    console.error('No restaurants found');
    return null;
  }

  const priceRanges = await Promise.all(
    restaurants.map(async (restaurant) => {
      try {
        return await getPriceRange(restaurant.price_range_id);
      } catch (error) {
        console.error(
          `Failed to fetch price range for restaurant ${restaurant.id}:`,
          error
        );
        return null;
      }
    })
  );

  // Filter out null values from the priceRanges array
  return priceRanges.filter(
    (priceRange): priceRange is IPriceRange => priceRange !== null
  );
};
