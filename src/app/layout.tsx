import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

// const geistMono = Raleway({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Home",
  description: "Online Booking Hotel",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // ${geistMono.variable}
    <html lang="en">
      <body
        className={`${raleway.variable} 
          antialiased`}
      >
        <Header />
        <main className="bg-gray-50 min-h-screen">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
