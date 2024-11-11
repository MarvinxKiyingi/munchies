import TextIndicatorChip from '../../TextIndicatorChip/TextIndicatorChip';
import TimeChip from '../../TimeChip/TimeChip';

import { IChipGroup } from './IChipGroup';

const ChipsGroup = (props: IChipGroup) => {
  const { isOpen, deliveryTime } = props;
  if (isOpen === null || deliveryTime === null) {
    return;
  }
  const text = isOpen.is_open ? 'Open' : 'Close';

  return (
    <div className='relative flex gap-2 z-10 max-w-[70%]'>
      <TextIndicatorChip text={text} isCurrentlyOpen={isOpen?.is_open} />
      {isOpen?.is_open && deliveryTime && (
        <TimeChip deliveryTime={deliveryTime} />
      )}
    </div>
  );
};

export default ChipsGroup;
