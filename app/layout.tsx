// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from '../components/Header';
// import { FooterNew } from "@/components/layout/footernew";
// import { I18nProvider } from "./I18nProvider";
// import ConditionalFooter from "@/components/Newcomponets/ConditionalFooterNew"; // optional

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Modern Next.js App",
  description: "A comprehensive Next.js application with proper folder structure",
  icons: {
    icon: "/Aljazira.png",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <I18nProvider> */}
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            {/* Use ConditionalFooter  instead if needed <ConditionalFooter /> */}
            {/* <FooterNew /> */}
          </div>
        {/* </I18nProvider> */}
      </body>
    </html>
  );
}
