import React from 'react';
import { IButton } from './IButton';
import Link from 'next/link';

const Button = ({ text, variant, as, href, onClick, className }: IButton) => {
  const buttonClass = variant === 'secondary' ? 'secondary-cta' : 'primary-cta';
  const buttonAs =
    as === 'link' && href ? (
      <Link href={href} className={`${buttonClass} ${className}`}>
        {text}
      </Link>
    ) : (
      <button onClick={onClick} className={`${buttonClass} ${className}`}>
        {text}
      </button>
    );

  return buttonAs;
};

export default Button;
