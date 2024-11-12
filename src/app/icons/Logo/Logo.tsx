import React from 'react';
import MobileLogo from './MobileLogo';
import DesktopLogo from './DesktopLogo';
import Link from 'next/link';

export type ILogoFillColor = {
  fillColor?: string;
};
const Logo = ({ fillColor = 'var(--black)' }: ILogoFillColor) => {
  return (
    <Link href={'/'}>
      <MobileLogo fillColor={fillColor} />
      <DesktopLogo />
    </Link>
  );
};

export default Logo;
