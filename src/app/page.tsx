'use client';
import { useEffect, useState } from 'react';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import Logo from './icons/Logo/Logo';

const HomePage = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      if (window.innerWidth >= 1024) {
        setIsDesktop(true);
      } else {
        setIsDesktop(false);
      }
    };

    checkScreenSize();

    window.addEventListener('resize', checkScreenSize);

    if (isDesktop) {
      redirect('/restaurants');
    }

    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, [isDesktop]);

  return (
    <section className='flex flex-col gap-6 h-[100dvh] px-24 bg-green text-[white]'>
      <div className='flex pt-40'>
        <Logo fillColor='white' />
      </div>
      <div className='flex flex-col gap-6 h-full pt-[187px] pb-40 justify-between '>
        <div className='flex flex-col gap-4 w-[248px]'>
          <h2 className='text-[48px] font-bold leading-[normal]'>
            Treat yourself.
          </h2>
          <p className='text-title'>
            Find the best restaurants in your city and get it delivered to your
            place!
          </p>
        </div>
        <Link
          href='/restaurants'
          className='secondary-cta !border-[white] !text-[white]'
        >
          Continue
        </Link>
      </div>
    </section>
  );
};

export default HomePage;
