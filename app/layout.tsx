import { Metadata } from 'next';
import ThemeProvider from '@/config/Providers';
import '@/styles/globals.scss';

import 'antd/dist/reset.css';
import { AppProvider } from '@/config/AppContext';

export default async function RootLayout({ children }: {
  children: React.ReactNode;
  params: Record<string, any>;
}) {


  return (
    <html lang="en">
      <head >
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="stylesheet" as="style" crossOrigin="" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/static/pretendard.css" />

      </head>
      <body>
        <ThemeProvider >
          <AppProvider>
            <main>{children}</main>
          </AppProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
export async function generateMetadata(): Promise<Metadata> {
  const title = 'Open I';
  const description = 'Open I Platform';
  return {
    title,
    description,
    icons: {
      icon: '/favicon.ico',
    },

  };
}