import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dev-Crafted | Lakshay Rawal",
  description: "Portfolio by Lakshay Rawal - Showcasing my projects and skills.",
  openGraph: {
    title: "Dev-Crafted | Lakshay Rawal",
    description: "Check out my portfolio showcasing my work and projects.",
    url: "https://www.dev-crafted.com",
    siteName: "Dev-Crafted",
    images: [
      {
        url: "https://www.dev-crafted.com/preview-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dev-Crafted Portfolio Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dev-Crafted | Lakshay Rawal",
    description: "Portfolio by Lakshay Rawal - Showcasing my work.",
    images: ["https://www.dev-crafted.com/preview-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        {children}
        </body>
    </html>
  );
}
