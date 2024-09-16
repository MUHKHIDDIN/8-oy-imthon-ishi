import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { ThemeProvider } from "../Provider/theme-provider";

// Load fonts
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

// Metadata for the page
export const metadata: Metadata = {
  title: "Mobilux",
  description: "Explore the latest tech at Mobilux",
  icons: {
    icon: "https://example.com/favicon.ico", // Replace with the URL of the icon you want to use
  },
  openGraph: {
    title: "Mobilux",
    description: "Discover the best mobile tech deals at Mobilux",
    url: "https://png.pngtree.com/element_pic/00/16/10/1257fd1cbbe362e.jpg", // Replace with your site URL
    images: [
      {
        url: "/path-to-og-image.jpg", // Path to your Open Graph image in the public folder
        width: 800,
        height: 600,
        alt: "Mobilux OG Image",
      },
    ],
  },
};

// Root Layout Component
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
          href="https://example.com/favicon.ico" // Replace with the online URL of your desired favicon
          sizes="any"
        />
        <link rel="apple-touch-icon" href="https://example.com/apple-touch-icon.png" /> {/* Optional Apple Touch Icon */}
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
