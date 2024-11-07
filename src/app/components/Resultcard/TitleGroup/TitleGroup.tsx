import Arrow from '@/app/icons/Arrow';
import React from 'react';

const TitleGroup = ({ title }: { title: string }) => {
  return (
    <div className='flex justify-between gap-4'>
      <h2 className='text-h1 leading-[normal]'>{title}</h2>
      <div className='flex justify-center items-center bg-green rounded-full w-8 h-8'>
        <Arrow />
      </div>
    </div>
  );
};

export default TitleGroup;
