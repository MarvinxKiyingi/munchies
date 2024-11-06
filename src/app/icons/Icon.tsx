import React from 'react';
import Image from 'next/image';

export type IIcon = {
  variant:
    | 'hamburger'
    | 'pizza'
    | 'taco'
    | 'coffee'
    | 'fries'
    | 'mexican'
    | 'breakfast';
  size?: 'small' | 'large';
  className?: string;
};
const Icon = ({ variant, size = 'small', className }: IIcon) => {
  const iconSize = size === 'small' ? '80' : '140';
  const imagePath = `/${variant}.png`;
  return (
    <Image
      src={imagePath}
      alt={`Image of ${variant}`}
      width={iconSize}
      height={iconSize}
      className={className}
    />
  );
};

export default Icon;
