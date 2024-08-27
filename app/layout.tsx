import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/provider/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import Head from "next/head";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Gufran Lazuardi",
  description: "Gufran Lazuardi's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title?.toString()}</title>
        <meta
          name="Gufran Lazuardi"
          content={metadata.description?.toString()}
        />
        <link rel="icon" href="/owl.png" />
      </Head>
      <body
        className={`${poppins.className} px-5 md:px-10 lg:px-10 xl:px-20 py-10 flex flex-col min-h-screen max-w-screen-xl mx-auto`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
        >
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Toaster />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
