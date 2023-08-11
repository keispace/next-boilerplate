'use client'

import HeaderMenu from '@/app/components/layouts/Header';
// Use usePathname for catching route name.
import { usePathname } from 'next/navigation';

export const LayoutProvider = ({ children }: any) => {
  const pathname = usePathname();
  return (
    <>
      {pathname !== "/" && <HeaderMenu />}
      {children}
      {/* {pathname !== "/" && <h1>Footer</h1>} */}

    </>
  )
};