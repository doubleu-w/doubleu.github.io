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
      niche: b.niche,
      types: b.type,
      topic: b.topic,
      audience: "Beginners",
      autogen: "1"
    }).toString();
    return `/generator?${q}`;
  };

  return (
    <section className="center">
      <h1 className="h1">The Second You</h1>
      <p className="kicker" style={{marginBottom:12}}>Motto: <strong>The Second You</strong></p>
      <Link className="glow-btn" href="/generator">Start Generating</Link>

      <div className="hero-card" style={{maxWidth:820}}>
        <div className="small" style={{marginBottom:10, opacity:.9}}>Example bundles</div>
        <div className="grid">
          {bundles.map((b)=>(
            <Link className="card" key={b.label} href={linkFor(b)}>
              <h3>{b.label}</h3>
              <p className="small">click to prefill generator</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
