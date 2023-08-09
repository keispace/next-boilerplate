'use client'

import HeaderMenu from '@/app/components/Header';
// Use usePathname for catching route name.
import { usePathname } from 'next/navigation';

export const LayoutProvider = ({ children }) => {
  const pathname = usePathname();
  return (
    <>
      {pathname !== "/" && <HeaderMenu />}
      {children}
      {/* {pathname !== "/" && <h1>Footer</h1>} */}

    </>
  )
};