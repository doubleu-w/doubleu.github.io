export default function Hero() {
  return (
    <section className="hero">
      {/* Logo */}
      <div className="logo-wrap">
        <span className="w-logo">W</span>
      </div>

      {/* Title */}
      <h1 className="title">The Second You</h1>

      {/* Start button */}
      <button className="glow-btn">Start Generating</button>

      {/* Example Bundles */}
      <div className="examples">
        <p>Example Bundles</p>
        <ul>
          <li>30-Day Fitness Plan</li>
          <li>Gym Split Poster</li>
          <li>Meal Prep Sheet</li>
          <li>Instagram Reels Pack</li>
          <li>Motivation SFX</li>
          <li>AI Prompt Pack</li>
        </ul>
      </div>
    </section>
  );
}

