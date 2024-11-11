import { IRestaurant } from '../../Models/IRestaurant';

export const getRestaurantById = async (
  resturantId: string
): Promise<IRestaurant | null> => {
  const res = await fetch(
    `https://work-test-web-2024-eze6j4scpq-lz.a.run.app/api/restaurants/${resturantId}`,
    { next: { revalidate: 60 } }
  );

  if (!res.ok) {
    return null;
  }

  const data: IRestaurant = await res.json();
  return data;
};
