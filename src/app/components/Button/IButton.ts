import React from 'react';

export type IButton = {
  text: string;
  variant: 'primary' | 'secondary';
  as?: 'link' | 'button';
  href?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  className?: string;
};
