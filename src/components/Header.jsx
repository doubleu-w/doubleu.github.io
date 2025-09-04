import Link from "next/link";

export default function Header(){
  return (
    <header className="header">
      <Link href="/" aria-label="Double You Home">
        <img src="/logo.png" alt="Double You Logo"/>
      </Link>
      <nav className="nav" aria-label="Primary">
        <Link className="nav-btn" href="/catalog">Catalog</Link>
        <Link className="nav-btn" href="/generator">Generator</Link>
        <Link className="nav-btn" href="/helper">Everyday Helper</Link>
      </nav>
    </header>
  );
}
