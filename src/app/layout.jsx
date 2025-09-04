import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Double You — The Second You",
  description: "Generate digital products by niche. Everyday AI helper included.",
};

function Logo() {
  return (
    <Link href="/" className="brand" aria-label="Double You">
      <span style={{color:"var(--brand-2)"}}>W</span> <span style={{opacity:.9}}>Double&nbsp;You</span>
    </Link>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="header">
          <div className="container" style={{display:"flex",justifyContent:"space-between",alignItems:"center",height:64}}>
            <Logo/>
            <nav className="nav">
              <Link href="/catalog">Catalog</Link>
              <Link href="/generator">Generator</Link>
              <Link href="/helper">Everyday Helper</Link>
              <a className="btn secondary" href="https://github.com/doubleu-w/doubleu.github.io" target="_blank" rel="noreferrer">GitHub</a>
              <Link className="btn" href="/generator">Create</Link>
            </nav>
          </div>
        </header>
        <main className="container">{children}</main>
        <footer className="container" style={{padding:"28px 0", color:"var(--muted)"}}>
          <div className="divider"></div>
          <div style={{display:"flex",justifyContent:"space-between",gap:12,flexWrap:"wrap"}}>
            <div>© {new Date().getFullYear()} Double You — “The Second You”</div>
            <div className="small">Made with Next.js on Vercel</div>
          </div>
        </footer>
      </body>
    </html>
  );
}
