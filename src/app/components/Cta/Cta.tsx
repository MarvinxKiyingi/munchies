import React from 'react';
import { ICta } from './ICta';

const Cta = ({ variant = 'primary', text }: ICta) => {
  const ctaClass = variant === 'secondary' ? 'secondary-cta' : 'primary-cta';

  return <button className={ctaClass}>{text}</button>;
};

export default Cta;
