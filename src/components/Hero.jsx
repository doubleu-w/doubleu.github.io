import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero">
      {/* Title */}
      <h1 className="hero-title">The Second You</h1>

      {/* Sub */}
      <p className="hero-sub">
        Pick a niche. Generate mini e-books, templates, planners, prompts, audio packs and more — then package them, fast.
      </p>

      {/* Start button */}
      <div className="cta-row">
        <Link href="/generator" className="glow-btn">Start Generating</Link>
      </div>

      {/* Example bundles */}
      <div className="panel">
        <p className="panel-title">Example bundles</p>
        <div className="grid">
          {[
            ["30-Day Fitness Plan (ebook)"],
            ["Gym Split Poster (printable)"],
            ["Meal Prep Sheet (sheet)"],
            ["Instagram Reels Pack (canva)"],
            ["Motivation SFX (audio)"],
            ["AI Prompt Pack (business)"],
          ].map(([label]) => (
            <Link key={label} href={`/generator?prefill=${encodeURIComponent(label)}`} className="card">
              <h3>{label}</h3>
              <p>Click to prefill generator</p>
            </Link>
          ))}
        </div>
      </div>

      {/* Feature buckets */}
      <div className="features">
        {[
          ["📝", "Education & Guides", "E-books, courses, cheat sheets, templates."],
          ["🎨", "Creative & Design", "Canva & Notion templates, printables, wallpapers."],
          ["🎧", "Audio & Video", "AI voice packs, music loops, SFX, stock clips."],
          ["💻", "Tech & Business", "Prompt packs, spreadsheets, site & app kits."],
        ].map(([emoji, title, text]) => (
          <div key={title} className="feature">
            <div className="emoji">{emoji}</div>
            <h4>{title}</h4>
            <p>{text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
