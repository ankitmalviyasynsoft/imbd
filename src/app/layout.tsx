import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Provider from "./Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Imdb clone",
  description: "This is the movie description",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (

    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Header />
          {children}
        </Provider>
      </body>
    </html >
  );
}
