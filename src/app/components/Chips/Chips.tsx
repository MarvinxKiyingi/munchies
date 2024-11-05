import React from 'react';
import { IChips } from './IChips';

const Chips = ({ text }: IChips) => {
  return (
    <div className='flex justify-center w-fit px-12 py-8 text-body bg-white text-black border-0.6 border-stroke rounded-large'>
      {text}
    </div>
  );
};

export default Chips;
