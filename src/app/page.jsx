export default function Home() {
  return (
    <section>
      <h1 style={{fontSize:"2.25rem",fontWeight:800,marginBottom:"0.75rem"}}>
        Your website is live-ready 🚀
      </h1>
      <p style={{maxWidth:680}}>
        Edit this page at <code>src/app/page.jsx</code>. Commit & push to redeploy automatically on Vercel.
      </p>
      <ul style={{marginTop:"1rem"}}>
        <li>✅ No TypeScript checks</li>
        <li>✅ No Tailwind/PostCSS plugins</li>
        <li>✅ Clean Next.js App Router setup</li>
      </ul>
      <a className="btn" href="#features" style={{marginTop:"1rem"}}>See features</a>
      <div id="features" style={{marginTop:"2rem"}}>
        <h2 style={{fontSize:"1.5rem",fontWeight:700}}>Features</h2>
        <ul>
          <li>Fast automatic deploys</li>
          <li>Simple CSS you can style yourself</li>
          <li>Easy to extend with more pages</li>
        </ul>
      </div>
    </section>
  );
}
