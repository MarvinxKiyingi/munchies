import { IFoodIcon } from '@/app/icons/FoodIcon';
import { IChip } from '../Chip/IChip';

export type IResultcard = Omit<IChip, 'text' | 'variant'> & {
  chipVariant: IChip['variant'];
  title: string;
  deliveryTimeMinutes: number;
  iconVariant: IFoodIcon['variant'];
};
