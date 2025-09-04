import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Double You",
  description: "The Second You",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="site-header">
          {/* Top-left logo */}
          <Link href="/" className="logo" aria-label="Double You Home">
            <img src="/logo.png" alt="Double You Logo" />
          </Link>
          {/* Top-right small buttons */}
          <nav className="nav" aria-label="Primary">
            <Link className="nav-btn" href="/catalog">Catalog</Link>
            <Link className="nav-btn" href="/generator">Generator</Link>
            <Link className="nav-btn" href="/helper">Everyday Helper</Link>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
