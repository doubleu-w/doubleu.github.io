import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Double You — Website",
  description: "Modern website running on Vercel.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="container" style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
          <a href="/" style={{fontWeight:800, fontSize:'1.2rem'}}>doubleu.</a>
          <nav style={{display:'flex', gap:'1rem'}}>
            <a href="/#about">About</a>
            <a href="/#features">Features</a>
            <a href="/contact">Contact</a>
          </nav>
        </header>
        <main className="container">{children}</main>
        <footer className="container" style={{opacity:.6, fontSize:14}}>© {new Date().getFullYear()} Double You</footer>
      </body>
    </html>
  );
}
