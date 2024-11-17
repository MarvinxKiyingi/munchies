import React from 'react';

export type IFilterChip = {
  text: string;
  isActive?: boolean;
  as?: 'link' | 'button';
  href?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  className?: string;
};
