import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import "./testing.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ini page hello",
  description: "manual ngetiknya, ehehe",
  keywords: "ini masih ntobain meta, siapa tau jago SEO",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
