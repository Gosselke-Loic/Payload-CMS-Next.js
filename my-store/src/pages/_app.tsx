import '@/styles/globals.css';

import type { AppProps } from 'next/app';
import { MantineProvider } from '@mantine/core';

import LayoutComponent from '@/components/layout/layout.component';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <MantineProvider withGlobalStyles withNormalizeCSS>
            <LayoutComponent>
                <Component {...pageProps} />
            </LayoutComponent>
        </MantineProvider>
    )
}
