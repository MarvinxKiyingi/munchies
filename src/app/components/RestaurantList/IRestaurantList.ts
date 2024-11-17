import { IFiltersList } from '@/app/Models/IFilter';
import { ISearchParams } from '@/app/Models/ISearchParams';

export type IRestaurantList = IFiltersList & {
  resolvedSearchParams: ISearchParams;
};
