import TextIndicatorChip from '../../TextIndicatorChip/TextIndicatorChip';
import TimeChip from '../../TimeChip/TimeChip';

import { IChipGroup } from './IChipGroup';

const ChipsGroup = (props: IChipGroup) => {
  const { isOpen, deliveryTime } = props;
  if (isOpen === null || deliveryTime === null) {
    return;
  }
  const text = isOpen.is_open ? 'Open' : 'Closed';

  return (
    <div className='relative flex gap-2 z-10'>
      <TextIndicatorChip text={text} isCurrentlyOpen={isOpen?.is_open} />
      {isOpen?.is_open && deliveryTime && (
        <TimeChip deliveryTime={deliveryTime} />
      )}
    </div>
  );
};

export default ChipsGroup;
