import Head from 'next/head';
import type { ReactNode } from 'react';

import NavbarComponent from '../navbar/navbar.component';
import FooterComponent from './footer/footer.component';

type Props = {
    children?: ReactNode
}

export default function LayoutComponent({ children, ...props }: Props) {
    return (
        <>
            <Head>
				<title>Evil Comics</title>
				<meta name="description" content="Comics, Manga, European Comics store and much more" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
            <nav>
               <NavbarComponent />
            </nav>
			<main {...props}>
				{ children }
			</main>
            <footer>
                <FooterComponent />
            </footer>
        </>
    )
}