import { IRestaurant, IRestaurantsList } from '../../Models/IRestaurant';

export const getRestaurants = async (): Promise<IRestaurant[]> => {
  try {
    const res = await fetch(
      'https://work-test-web-2024-eze6j4scpq-lz.a.run.app/api/restaurants',
      { next: { revalidate: 60 } }
    );

    if (!res.ok) {
      throw new Error('Failed to fetch restaurants');
    }

    const data: IRestaurantsList = await res.json();
    return data.restaurants;
  } catch (error) {
    console.error('Error fetching restaurants:', error);
    throw error;
  }
};
