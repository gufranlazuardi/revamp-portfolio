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
  title: "Gufran Lazuardi | Software Engineer",
  description:
    "Explore the journey of Gufran Lazuardi, a passionate Frontend Developer evolving into a Fullstack Developer. Discover projects that showcase my skills in crafting dynamic user interfaces and my commitment to mastering backend technologies for comprehensive web solutions.",
  keywords:
    "Gufran, Lazuardi, Frontend Developer, Fullstack Developer, Software Engineer",
  authors: [
    {
      name: "Gufran Lazuardi",
      url: "https://gufranlazuardi.vercel.app",
    },
  ],
  openGraph: {
    title: "Gufran Lazuardi | Software Engineer",
    description:
      "Explore the journey of Gufran Lazuardi, a passionate Frontend Developer evolving into a Fullstack Developer. Discover projects that showcase my skills in crafting dynamic user interfaces and my commitment to mastering backend technologies for comprehensive web solutions.",
    url: "https://gufranlazuardi.com",
    images: [
      {
        url: "/owl.png",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@gufranlazuardi",
    title: "Gufran Lazuardi | Software Engineer",
    description:
      "Explore the journey of Gufran Lazuardi, a passionate Frontend Developer evolving into a Fullstack Developer.",
    images: [
      {
        url: "/owl.png",
      },
    ],
  },
};

const metaTags = [
  { name: "description", content: metadata.description },
  { name: "keywords", content: metadata.keywords },
  {
    name: "author",
    content:
      Array.isArray(metadata.authors) && metadata.authors.length > 0
        ? metadata.authors[0].name
        : "",
  },
  { property: "og:title", content: metadata.openGraph?.title ?? "" },
  {
    property: "og:description",
    content: metadata.openGraph?.description ?? "",
  },
  { property: "og:url", content: metadata.openGraph?.url ?? "" },
  { name: "twitter:site", content: metadata.twitter?.site ?? "" },
  { name: "twitter:title", content: metadata.twitter?.title ?? "" },
  {
    name: "twitter:description",
    content: metadata.twitter?.description ?? "",
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>{String(metadata.title ?? "Default Title")}</title>
        {metaTags.map((tag, index) => (
          <meta
            key={index}
            {...tag}
            content={String(tag.content ?? "")}
          />
        ))}
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
