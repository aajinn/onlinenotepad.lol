import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Footer from './components/Footer';

const geistSans = localFont({
    src: './fonts/GeistVF.woff',
    variable: '--font-geist-sans',
    weight: '100 900',
    display: 'swap',
});
const geistMono = localFont({
    src: './fonts/GeistMonoVF.woff',
    variable: '--font-geist-mono',
    weight: '100 900',
    display: 'swap',
});

export const metadata: Metadata = {
    title: {
        default: 'Free Online Notepad | No Login | Save & Share Notes Instantly',
        template: '%s | Online Notepad'
    },
    description: 'Use our fast, free online notepad to write and save notes securely. No sign-up needed. Ideal for quick thoughts, code, or reminders. Features: auto-save, multiple themes, download notes.',
    keywords: ['online notepad', 'free notepad', 'text editor', 'note taking', 'no login', 'secure notes', 'quick notes', 'code editor'],
    authors: [{ name: 'Online Notepad' }],
    creator: 'Online Notepad',
    publisher: 'Online Notepad',
    formatDetection: {
        email: false,
        address: false,
        telephone: false,
    },
    metadataBase: new URL('https://onlinenotepad.lol'),
    alternates: {
        canonical: '/',
    },
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://onlinenotepad.lol',
        title: 'Free Online Notepad | No Login | Save & Share Notes Instantly',
        description: 'Use our fast, free online notepad to write and save notes securely. No sign-up needed. Ideal for quick thoughts, code, or reminders.',
        siteName: 'Online Notepad',
        images: [
            {
                url: '/screen.png',
                width: 1200,
                height: 630,
                alt: 'Online Notepad Screenshot',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Free Online Notepad | No Login | Save & Share Notes Instantly',
        description: 'Use our fast, free online notepad to write and save notes securely. No sign-up needed.',
        images: ['/screen.png'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    verification: {
        google: 'your-google-verification-code', // Add your Google Search Console verification code
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="canonical" href="https://onlinenotepad.lol" />
                <link
                    rel="apple-touch-icon"
                    sizes="57x57"
                    href="/apple-icon-57x57.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="60x60"
                    href="/apple-icon-60x60.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="72x72"
                    href="/apple-icon-72x72.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="76x76"
                    href="/apple-icon-76x76.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="114x114"
                    href="/apple-icon-114x114.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="120x120"
                    href="/apple-icon-120x120.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="144x144"
                    href="/apple-icon-144x144.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="152x152"
                    href="/apple-icon-152x152.png"
                />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-icon-180x180.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="192x192"
                    href="/android-icon-192x192.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="96x96"
                    href="/favicon-96x96.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                />
                <link
                    rel="manifest"
                    href="/manifest.json"
                />
                <meta
                    name="msapplication-TileColor"
                    content="#ffffff"
                />
                <meta
                    name="msapplication-TileImage"
                    content="/ms-icon-144x144.png"
                />
                <meta
                    name="theme-color"
                    content="#ffffff"
                />
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7275998015909506"
                    crossOrigin="anonymous"></script>

                {/* Structured Data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "WebApplication",
                            "name": "Online Notepad",
                            "description": "Free online notepad for writing and saving notes securely without login",
                            "url": "https://onlinenotepad.lol",
                            "applicationCategory": "ProductivityApplication",
                            "operatingSystem": "Web Browser",
                            "offers": {
                                "@type": "Offer",
                                "price": "0",
                                "priceCurrency": "USD"
                            },
                            "featureList": [
                                "No login required",
                                "Auto-save functionality",
                                "Multiple themes",
                                "Download notes",
                                "Copy to clipboard",
                                "Customizable font size"
                            ],
                            "screenshot": "https://onlinenotepad.lol/screen.png",
                            "author": {
                                "@type": "Organization",
                                "name": "Online Notepad"
                            }
                        })
                    }}
                />
            </head>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                {children}
                <Footer />
                <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7275998015909506" crossOrigin="anonymous"></script>
            </body>
        </html>
    );
}
