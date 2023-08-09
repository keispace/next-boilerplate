'use client';

import { PropsWithChildren, useEffect, useState } from 'react';

import { ConfigProvider, theme } from 'antd';
import { ThemeProvider as NextThemeProvider } from 'next-themes';
import { useTheme } from 'next-themes';


import { AntdProvider } from './AntdProvider';
import { COLORS } from '@/config/site-config';
import { LayoutProvider } from './PathLayoutProvider';

export type ProviderProps = PropsWithChildren<{
}>;

export function AntdConfigProvider({ children }: ProviderProps) {
  const { theme: nowTheme } = useTheme();

  return (
    <ConfigProvider
      theme={{
        algorithm:
          nowTheme === 'dark' ? theme.darkAlgorithm : theme.defaultAlgorithm,
        // token: {
        // colorPrimary: '#1b1b1b',
        // colorText: '#B3B3B3',
        // colorBgContainer: '#f6f7f9',
        // colorBorder: '#1b1b1b',
        // borderRadiusLG: 0,
        // },

        components: {
          Divider: {
            colorSplit: '#525252',
            margin: 16,
            marginLG: 16,
            marginXS: 16,

          },
        }

      }
      }
    >
      <AntdProvider>
        <LayoutProvider>
          {children}
        </LayoutProvider>
      </AntdProvider>
    </ ConfigProvider>
  );
}

export default function Providers(props: ProviderProps) {
  const [mounted, setMounted] = useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // use your loading page
    return (
      <div className="hidden">
        {props.children}
      </div>
    );
  }

  return (
    <NextThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
    >
      <AntdConfigProvider {...props} />
    </NextThemeProvider>
  );
}
