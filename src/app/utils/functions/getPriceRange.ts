import { IPriceRange } from '../../Models/IPriceRange';

export const getPriceRange = async (
  priceRangeId: string
): Promise<IPriceRange | null> => {
  const res = await fetch(
    `https://work-test-web-2024-eze6j4scpq-lz.a.run.app/api/price-range/${priceRangeId}`,
    { next: { revalidate: 60 } }
  );

  if (!res.ok) {
    return null;
  }
  const data: IPriceRange = await res.json();
  return data;
};
