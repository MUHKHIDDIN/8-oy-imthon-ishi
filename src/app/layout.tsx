import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { ThemeProvider } from "../Provider/theme-provider";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export const metadata: Metadata = {
  title: "Mobilux",
  description: "Explore the latest tech at Mobilux",
  icons: {
    icon: "https://example.com/favicon.ico", 
  },
  openGraph: {
    title: "Mobilux",
    description: "Discover the best mobile tech deals at Mobilux",
    url: "https://png.pngtree.com/element_pic/00/16/10/1257fd1cbbe362e.jpg",
    images: [
      {
        url: "/path-to-og-image.jpg", 
        width: 800,
        height: 600,
        alt: "Mobilux OG Image",
      },
    ],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="icon"
          href="https://png.pngtree.com/png-vector/20201230/ourmid/pngtree-black-mobile-phone-mockup-png-png-image_2674011.jpg" 
          sizes="any"
        />
        <link rel="apple-touch-icon" href="https://png.pngtree.com/png-vector/20201230/ourmid/pngtree-black-mobile-phone-mockup-png-png-image_2674011.jpg" /> 
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
