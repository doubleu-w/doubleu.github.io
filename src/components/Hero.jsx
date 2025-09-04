import Link from "next/link";

export default function Hero(){
  const bundles = [
    { label:"30-Day Fitness Plan (ebook)", niche:"education", type:"Mini E-book", topic:"Fitness" },
    { label:"Gym Split Poster (printable)", niche:"creative", type:"Printable Planner", topic:"Gym Split" },
    { label:"Meal Prep Sheet (sheet)", niche:"tech", type:"Excel/Sheets Tool", topic:"Meal Prep" },
    { label:"Instagram Reels Pack (canva)", niche:"creative", type:"Canva Template Pack", topic:"Reels" },
    { label:"Motivation SFX (audio)", niche:"audio", type:"SFX Library", topic:"Motivation" },
    { label:"AI Prompt Pack (business)", niche:"tech", type:"AI Prompt Pack", topic:"Business" },
  ];
  const linkFor = (b) => {
    const q = new URLSearchParams({
      niche: b.niche, types: b.type, topic: b.topic, audience: "Beginners", autogen: "1"
    }).toString();
    return `/generator?${q}`;
  };

  return (
    <section className="hero">
      <h1 className="h1">The Second You</h1>
      <p className="sub">Pick a niche. Generate mini e-books, templates, planners, prompts, audio packs and more — then package them, fast.</p>

      <div className="glow-wrap">
        <Link className="glow-btn" href="/generator">Start Generating</Link>
      </div>

      <div className="panel" style={{marginTop:22}}>
        <div className="small" style={{marginBottom:10, opacity:.9}}>Example bundles</div>
        <div className="grid">
          {bundles.map((b)=>(
            <Link className="card" key={b.label} href={linkFor(b)}>
              <h3>{b.label}</h3>
              <p>Click to prefill generator</p>
            </Link>
          ))}
        </div>
      </div>

      <div className="features">
        <div className="feature"><div className="emoji">📝</div><div><h4>Education & Guides</h4><p>E-books, courses, cheat sheets, templates.</p></div></div>
        <div className="feature"><div className="emoji">🎨</div><div><h4>Creative & Design</h4><p>Canva & Notion templates, printables, wallpapers.</p></div></div>
        <div className="feature"><div className="emoji">🎧</div><div><h4>Audio & Video</h4><p>AI voice packs, music loops, SFX, stock clips.</p></div></div>
        <div className="feature"><div className="emoji">💻</div><div><h4>Tech & Business</h4><p>Prompt packs, spreadsheets, site & app kits.</p></div></div>
      </div>
    </section>
  );
}
