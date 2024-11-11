import { IIsRestaurantCurrentlyOpen } from '@/app/Models/IIsRestaurantCurrentlyOpen';

export type IChipGroup = {
  isOpen: IIsRestaurantCurrentlyOpen | null;
  deliveryTime: number;
};
