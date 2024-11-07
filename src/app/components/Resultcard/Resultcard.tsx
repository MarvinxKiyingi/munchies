import React from 'react';
import { IResultcard } from './IResultcard';
import FoodIcon from '@/app/icons/FoodIcon';
import OpacityLayer from './OpacityLayer/OpacityLayer';
import ClosedNotice from './ClosedNotice/ClosedNotice';
import ChipGroup from './ChipsGroup/ChipGroup';
import TitleGroup from './TitleGroup/TitleGroup';

const Resultcard = ({
  title,
  isCurrentlyOpen,
  chipVariant,
  deliveryTimeMinutes,
  iconVariant,
}: IResultcard) => {
  const chipProps = {
    isCurrentlyOpen,
    isCurrentlyOpenText: isCurrentlyOpen ? 'Open' : 'Closed',
    chipVariant,
    deliveryTime: `${deliveryTimeMinutes} min`,
  };

  return (
    <div className='relative'>
      <div className='relative flex flex-col justify-between gap-4 w-[327px] h-[202px] border-0.6 border-stroke rounded p-16 overflow-hidden'>
        <FoodIcon
          variant={iconVariant}
          size='large'
          className={`absolute top-[-30px] right-[-30px]`}
        />

        <ChipGroup {...chipProps} />

        {!isCurrentlyOpen && <ClosedNotice text='Opens tomorrow at 12 pm' />}

        <TitleGroup title={title} />
      </div>

      {!isCurrentlyOpen && <OpacityLayer />}
    </div>
  );
};

export default Resultcard;
