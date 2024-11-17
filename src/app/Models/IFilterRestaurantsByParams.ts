import { IRestaurant } from './IRestaurant';

export type IFilterRestaurantsByParams = {
  filterIds: string[] | undefined;
  priceRangeIds: string[] | undefined;
  restaurants: IRestaurant[] | null;
  selectedDeliveryTimeValues: string[];
};
