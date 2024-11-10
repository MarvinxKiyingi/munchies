import { IChip } from '../Chip/IChip';

export type IRestaurantCard = Omit<IChip, 'text' | 'variant'> & {
  chipVariant: IChip['variant'];
  title: string;
  deliveryTimeMinutes: number;
  image_url: string;
};
