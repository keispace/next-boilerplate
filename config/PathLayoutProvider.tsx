'use client'

import HeaderMenu from '@/app/components/layouts/Header';
// Use usePathname for catching route name.
import { usePathname } from 'next/navigation';
import { siteConfig } from './site-config';

export const LayoutProvider = ({ children }: any) => {
  const pathname = usePathname();
  const site = siteConfig.find(site => pathname === site.path)
  return (
    <>
      {site?.headerHidden === true ? null : <HeaderMenu />}
      {children}


    </>
  )
};