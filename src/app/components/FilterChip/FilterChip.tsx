import React from 'react';
import { IFilterChip } from './IFilterChip';
import Link from 'next/link';

const FilterChip = ({
  text,
  as = 'link',
  isActive = false,
  href,
  onClick,
  className = '',
}: IFilterChip) => {
  const classNames = `chip-button ${isActive ? 'active' : ''} ${className}`;
  const buttonAs =
    as === 'link' && href ? (
      <Link href={href} className={classNames}>
        {text}
      </Link>
    ) : (
      <button onClick={onClick} className={classNames}>
        {text}
      </button>
    );

  return buttonAs;
};

export default FilterChip;
