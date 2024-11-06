import React from 'react';
import { IChip } from './IChip';

const Chips = ({ text, variant, isOpen }: IChip) => {
  const chipVariant = variant === 'button' ? 'chip-button' : 'chip-display';
  const indicator =
    isOpen === true ? (
      <span className='open-indicator' />
    ) : isOpen === false ? (
      <span className='closed-indicator' />
    ) : null;

  return (
    <div className={chipVariant}>
      {indicator}
      <span>{text}</span>
    </div>
  );
};

export default Chips;
