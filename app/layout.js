import Logo from "./components/Logo";
import Navigation from "./components/Navigation";

export const metadata = {
  title: "the wild oasis",
  description: "welcome to paradise. Enjoy your stay!",
};

function RootLayout({ children }) {
  // This is the root layout for your Next.js application.
  // It wraps all pages and components, providing a consistent layout structure.
  return (
    <html lang="en">
      <body>
        <header>
          <Logo />
          <Navigation />
        </header>
        <main>{children}</main>

        <footer>
          <p>&copy; 2023 Your Company Name. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
export default RootLayout;
