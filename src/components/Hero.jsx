export default function Hero() {
  return (
    <section className="hero-wrap">

      {/* Top: tiny example bundle squares */}
      <div className="top-bundles">
        <a className="top-bundle" href="/generator?niche=fitness&b=plan">30-Day Plan</a>
        <a className="top-bundle" href="/generator?niche=design&b=canva-pack">IG Canva Pack</a>
        <a className="top-bundle" href="/generator?niche=audio&b=sfx">SFX Pack</a>
        <a className="top-bundle" href="/generator?niche=business&b=prompts">Biz Prompts</a>
      </div>

      {/* Center logo */}
      <div className="logo-center">
        {/* Uses your /public/logo.png (transparent W with blue glow baked in) */}
        <img src="/logo.png" alt="Double You logo" className="logo-img" />
      </div>

      {/* Title */}
      <h1 className="title">…The Second YOU</h1>

      {/* Categories (moved above the generate bar) */}
      <div className="categories">
        <a className="cat" href="/generator?niche=education">
          <span className="emoji">📘</span>
          <span className="txt">
            <b>Education &amp; Guides</b>
            <small>E-books, courses, cheat sheets, templates.</small>
          </span>
        </a>

        <a className="cat" href="/generator?niche=creative">
          <span className="emoji">🎨</span>
          <span className="txt">
            <b>Creative &amp; Design</b>
            <small>Canva &amp; Notion templates, printables, wallpapers.</small>
          </span>
        </a>

        <a className="cat" href="/generator?niche=audio">
          <span className="emoji">🎧</span>
          <span className="txt">
            <b>Audio &amp; Video</b>
            <small>AI voice packs, music loops, SFX, stock clips.</small>
          </span>
        </a>

        <a className="cat" href="/generator?niche=business">
          <span className="emoji">💻</span>
          <span className="txt">
            <b>Tech &amp; Business</b>
            <small>Prompt packs, spreadsheets, site &amp; app kits.</small>
          </span>
        </a>
      </div>

      {/* Big expanded Generate bar/button */}
      <div className="generate-wrap">
        <a className="generate-btn" href="/generator">
          Create…
        </a>
      </div>
    </section>
  );
}
