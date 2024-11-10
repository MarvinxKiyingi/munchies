import { IPriceRange } from '../../Models/IPriceRange';

export const getPriceRange = async (
  priceRangeId: string
): Promise<IPriceRange> => {
  try {
    const res = await fetch(
      `https://work-test-web-2024-eze6j4scpq-lz.a.run.app/api/price-range/${priceRangeId}`,
      { next: { revalidate: 60 } }
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch price range for ID: ${priceRangeId}`);
    }

    return await res.json();
  } catch (error) {
    console.error('Error fetching price range:', error);
    throw error;
  }
};
