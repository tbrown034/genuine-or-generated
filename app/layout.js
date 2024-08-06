import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./UI/Header";
import Footer from "./UI/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Genuine or Generated",
  description: "An AI guessing game, created by Trevor Brown.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} flex flex-col justify-between min-h-screen  p-4`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
