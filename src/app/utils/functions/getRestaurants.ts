import { IRestaurant, IRestaurantsList } from '../../Models/IRestaurant';

export const getRestaurants = async (): Promise<IRestaurant[] | null> => {
  const res = await fetch(
    'https://work-test-web-2024-eze6j4scpq-lz.a.run.app/api/restaurants',
    { next: { revalidate: 3600 } }
  );

  if (!res.ok) {
    console.log('Failed to fetch restaurants: ' + res.statusText);
    return null;
  }

  const data: IRestaurantsList = await res.json();
  return data.restaurants.length > 0 ? data.restaurants : null;
};
