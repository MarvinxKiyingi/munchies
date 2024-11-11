import { IFilter, IFiltersList } from '../../Models/IFilter';

export const getFilters = async (): Promise<IFilter[] | null> => {
  const res = await fetch(
    'https://work-test-web-2024-eze6j4scpq-lz.a.run.app/api/filter',
    { next: { revalidate: 60 } }
  );

  if (!res.ok) {
    console.error('Failed to fetch filters: ' + res.statusText);
    return null;
  }

  const data: IFiltersList = await res.json();

  return data.filters && data.filters.length > 0 ? data.filters : null;
};
