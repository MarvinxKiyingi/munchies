export interface ISearchParams {
  filter?: string | string[];
  price_range?: string | string[];
  delivery_time?: string;
}

export interface ISearchParamsPromise {
  searchParams?: Promise<ISearchParams>;
}
