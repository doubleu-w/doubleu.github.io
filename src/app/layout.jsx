import Link from "next/link";
import Image from "next/image";
import "./globals.css";

export const metadata = {
  title: "Double You",
  description: "The Second You",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Top bar */}
        <header className="topbar">
          <div className="topbar-left">
            <Link href="/" className="logo-link" aria-label="Double You Home">
              {/* Logo: uses /public/logo.png → referenced as /logo.png */}
              <Image
                src="/logo.png"
                alt="Double You logo"
                width={32}
                height={32}
                priority
                className="nav-logo"
                style={{ display: "block" }}
              />
            </Link>
            {/* (Removed) <span className="brand">Double You</span> */}
          </div>

          <nav className="topbar-right">
            <Link href="/catalog" className="nav-btn">Catalog</Link>
            <Link href="/generator" className="nav-btn">Generator</Link>
            <Link href="/helper" className="nav-btn">Everyday Helper</Link>
          </nav>
        </header>

        <main className="page-wrap">{children}</main>
      </body>
    </html>
  );
}
