import { IFilter, IFiltersResponse } from '../../Models/IFilter';

export const getFilters = async (): Promise<IFilter[]> => {
  try {
    const res = await fetch(
      'https://work-test-web-2024-eze6j4scpq-lz.a.run.app/api/filter',
      { next: { revalidate: 60 } }
    );

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    const data: IFiltersResponse = await res.json();
    return data.filters;
  } catch (error) {
    console.error('Error fetching filters:', error);
    throw error;
  }
};
