import { IIsRestaurantCurrentlyOpen } from '@/app/Models/IIsRestaurantCurrentlyOpen';

export const isRestaurantCurrentlyOpen = async (
  restaurantId: string
): Promise<IIsRestaurantCurrentlyOpen | null> => {
  const res = await fetch(
    `https://work-test-web-2024-eze6j4scpq-lz.a.run.app/api/open/${restaurantId}`,
    { next: { revalidate: 60 } }
  );

  if (!res.ok) {
    return null;
  }

  const data: IIsRestaurantCurrentlyOpen = await res.json();
  return data;
};
