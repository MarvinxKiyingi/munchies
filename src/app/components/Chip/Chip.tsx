import React from 'react';
import { IChip } from './IChip';

const Chip = ({ text, variant, isCurrentlyOpen }: IChip) => {
  const chipVariant = variant === 'button' ? 'chip-button' : 'chip-display';
  const indicator =
    isCurrentlyOpen === true ? (
      <span className='open-indicator' />
    ) : isCurrentlyOpen === false ? (
      <span className='closed-indicator' />
    ) : null;

  return (
    <div className={chipVariant}>
      {indicator}
      <span>{text}</span>
    </div>
  );
};

export default Chip;
