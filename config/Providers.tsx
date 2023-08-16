'use client';

import { PropsWithChildren, useEffect, useState } from 'react';

import { ConfigProvider, theme } from 'antd';
import { ThemeProvider as NextThemeProvider } from 'next-themes';
import { useTheme } from 'next-themes';


import { AntdProvider } from './AntdProvider';
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


        components: {
          Divider: {
            colorSplit: '#525252',
            margin: 16,
            marginLG: 16,
            marginXS: 16,
          },
          Button: {
            colorPrimary: '#090A0D',
            colorPrimaryHover: '#090A0D',
            colorPrimaryActive: '#090A0D',
            colorBgContainerDisabled: "rgba(215, 219, 231, 1)",
            colorTextDisabled: "#ffffff",
            borderRadius: 0,
            colorLink: '#090A0D',
          },
          Collapse: {
            borderRadiusLG: 0,
            colorBorder: '#D7DBE7',
            colorTextHeading: 'rgba(173, 176, 190, 1)',
            colorFillAlter: '#fff',
            colorBgContainer: '#fff',
            colorText: '#000',
          },
          Switch: {
            colorPrimary: '#090A0D',
            colorPrimaryHover: '#090A0D',
            colorPrimaryBorder: '#090A0D',
            colorTextQuaternary: 'rgba(215, 219, 231, 0.5)',
            colorTextTertiary: 'rgba(215, 219, 231, 0.5)',
          },
          Tabs: {

            itemSelectedColor: 'rgba(66, 71, 85, 1)',
            itemHoverColor: 'rgba(66, 71, 85, 1)',
            itemActiveColor: 'rgba(66, 71, 85, 1)',
            inkBarColor: 'rgba(66, 71, 85, 1)',
          }
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
