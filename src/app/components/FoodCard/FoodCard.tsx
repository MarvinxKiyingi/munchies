import React from 'react';
import { IFoodCard } from './IFoodCard';
import FoodIcon from '@/app/icons/FoodIcon';

const FoodCard = ({ text, variant }: IFoodCard) => {
  return (
    <button className='relative flex w-[160px] min-h-[80px] bg-white border-0.6 border-stroke rounded'>
      <span className='relative flex-wrap w-full max-w-[55%] h-fit py-16 pl-12 text-title overflow-wrap break-word'>
        {text}
      </span>
      <FoodIcon variant={variant} className={'absolute right-[-10.5px]'} />
    </button>
  );
};

export default FoodCard;
