import React from 'react';
import { ITextIndicatorChip } from './ITextIndicatorChip';

const TextIndicatorChip = ({ isCurrentlyOpen, text }: ITextIndicatorChip) => {
  const indicator =
    isCurrentlyOpen === true ? (
      <span className='open-indicator' />
    ) : isCurrentlyOpen === false ? (
      <span className='closed-indicator' />
    ) : null;
  return (
    <div className='chip-display'>
      {indicator}
      <span>{text}</span>
    </div>
  );
};

export default TextIndicatorChip;
