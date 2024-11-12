import React from 'react';
import { ITimeChip } from './ITimeChip';
import { formatDeliveryTime } from '@/app/utils/functions/formatDeliveryTime';

const TimeChip = ({ deliveryTime }: ITimeChip) => {
  return (
    <div className='chip-display'>
      <span>{formatDeliveryTime(deliveryTime)}</span>
    </div>
  );
};

export default TimeChip;
