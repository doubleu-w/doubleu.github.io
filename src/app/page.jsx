export default function Home() {
  return (
    <section>
      <h1 style={{fontSize:"2.25rem",fontWeight:800,marginBottom:"0.75rem"}}>
        Your website is live-ready 🚀
      </h1>
      <p style={{maxWidth:680}}>
        Edit this page at <code>src/app/page.jsx</code>. Commit & push to redeploy on Vercel.
      </p>
      <ul style={{marginTop:"1rem"}}>
        <li>✅ TypeScript fully removed</li>
        <li>✅ No Tailwind/PostCSS plugins required</li>
        <li>✅ Minimal Next.js App Router setup</li>
      </ul>
    </section>
  );
}
