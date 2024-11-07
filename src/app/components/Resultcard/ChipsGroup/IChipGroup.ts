import { IChip } from '../../Chip/IChip';

export type IChipGroup = Pick<IChip, 'isCurrentlyOpen'> & {
  isCurrentlyOpenText: string;
  chipVariant: IChip['variant'];
  deliveryTime: string;
};
