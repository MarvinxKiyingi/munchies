import { IIsRestaurantCurrentlyOpen } from './IIsRestaurantCurrentlyOpen';
import { IRestaurant } from './IRestaurant';

export type IRestaurantWithOpenStatus = IRestaurant & {
  isOpen: IIsRestaurantCurrentlyOpen;
};
