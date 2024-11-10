import Chips from '../../Chip/Chip';
import { IChipGroup } from './IChipGroup';

const ChipsGroup = ({
  chipVariant,
  isCurrentlyOpen,
  isCurrentlyOpenText,
  deliveryTime,
}: IChipGroup) => {
  return (
    <div className='relative flex gap-2 z-10 max-w-[70%]'>
      <Chips
        text={isCurrentlyOpenText}
        variant={chipVariant}
        isCurrentlyOpen={isCurrentlyOpen}
      />
      {isCurrentlyOpen && deliveryTime && (
        <Chips text={deliveryTime} variant={chipVariant} />
      )}
    </div>
  );
};

export default ChipsGroup;
