import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/header/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Matheus Games',
    description: '+ de 10 mil jogos ',
    keywords: ['games', 'jogos', 'gameplay'],
    /* openGraph: {
        images: [`${process.env.PROJECT_URL}/preview.png`],
    }, */
    robots: {
        index: true,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: true,
            noimageindex: true,
        },
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang='en'>
            <body className={inter.className}>
                <Header />
                {children}
            </body>
        </html>
    );
}
