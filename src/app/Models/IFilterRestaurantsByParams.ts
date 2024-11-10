import { IRestaurant } from './IRestaurant';

export type IFilterRestaurantsByParams = {
  filterIds: string[];
  priceRangeIds: string[];
  restaurants: IRestaurant[];
  selectedDeliveryTime: string | string[];
};
