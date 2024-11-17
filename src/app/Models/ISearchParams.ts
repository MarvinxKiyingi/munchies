export interface ISearchParams {
  category?: string | string[];
  price_range?: string | string[];
  delivery_time?: string;
}

export interface ISearchParamsPromise {
  searchParams?: Promise<ISearchParams>;
}
