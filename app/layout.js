import Header from "./_components/Header";
import Logo from "./_components/Logo";
import Navigation from "./_components/Navigation";
import "@/app/_styles/globals.css";

import { Josefin_Sans } from "next/font/google";

const josefinSans = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-josefin-sans",
});

console.log(josefinSans);

export const metadata = {
  // title: "the wild oasis",
  title: {
    default: "welcome | the wild oasis",
    template: "%s / the wild oasis",
  },
  description: "welcome to paradise. Enjoy your stay!",
};

function RootLayout({ children }) {
  // This is the root layout for your Next.js application.
  // It wraps all pages and components, providing a consistent layout structure.
  return (
    <html lang="en">
      <body
        className={`${josefinSans.className} antialiased min-h-screen bg-primary-950 text-primary-100 flex flex-col relative`}
      >
        <Header />

        <div className="flex-1 px-8 py-12">
          <main className="mx-auto max-w-7xl">{children}</main>
        </div>
      </body>
    </html>
  );
}
export default RootLayout;
