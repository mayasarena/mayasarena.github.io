import type { Metadata } from "next";
import "./globals.css";
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: "Maya Murad ✨",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
          <main>
            <div className="h-100vh overflow-auto">
            {children}
            </div>
          </main>
          <Footer />
      </body>
    </html>
  );
}
