import { Navbar } from "@/components/Navbar";
import "./globals.css";
import Logo from "@/components/Logo";

export const metadata = {
  title: "Personal Portfolio",
  description: "This is my portfolio for presenting all my projects and showcase my skills at one places.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <header className="flex justify-between p-2 bg-teal-400">
          <Logo />
          <Navbar />
        </header>
        <main className="grow">{children}</main>
        <footer className="border-t py-2 text-center text-xs">
          <p>Build by Sanu Kumar</p>
        </footer>
      </body>
    </html>
  );
}
