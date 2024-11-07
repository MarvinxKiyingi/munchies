import { IFoodIcon } from '@/app/icons/FoodIcon';

export type IFoodCard = Omit<IFoodIcon, 'size'> & {
  iconSize: IFoodIcon['size'];
  title: string;
};
