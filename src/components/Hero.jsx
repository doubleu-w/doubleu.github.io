import Link from "next/link";

export default function Hero(){
  return (
    <section className="hero">
      <div>
        <span className="badge">W • Double You</span>
        <h1 className="h1">The Second You for <span style={{color:"var(--brand)"}}>Digital Products</span>.</h1>
        <p className="p">Pick a niche. We generate mini e-books, templates, prompts, planners, audio packs, and more — plus an everyday AI helper to plan, write, and package.</p>
        <div style={{display:"flex",gap:10,marginTop:18}}>
          <Link className="btn" href="/generator">Start Generating</Link>
          <Link className="btn secondary" href="/catalog">Explore Catalog</Link>
        </div>
        <p className="kicker" style={{marginTop:10}}>Motto: <strong>The Second You</strong></p>
      </div>
      <div className="hero-card">
        <div className="kicker">Example bundle</div>
        <div style={{ height: 12 }}></div>
        <div className="grid">
          {[
            "30-Day Fitness Plan (ebook)",
            "Gym Split Poster (printable)",
            "Meal Prep Sheet (sheet)",
            "Instagram Reels Pack (canva)",
            "Motivation SFX (audio)",
            "AI Prompt Pack (business)"
          ].map((t)=>(
            <div className="card" key={t}>
              <h3 style={{fontSize:"1rem"}}>{t}</h3>
              <p className="small">generated sample</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
