import React from 'react';
import MobileLogo from './MobileLogo';
import DesktopLogo from './DesktopLogo';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link href={'/'}>
      <MobileLogo />
      <DesktopLogo />
    </Link>
  );
};

export default Logo;
