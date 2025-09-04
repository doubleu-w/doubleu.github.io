export default function Home() {
  return (
    <section>
      <h1 style={{fontSize:'2.25rem',fontWeight:800,lineHeight:1.1,marginBottom:'0.75rem'}}>
        A clean website starter
      </h1>
      <p style={{maxWidth:680}}>
        You’re live on Vercel. Edit this text in <code>src/app/page.tsx</code>, commit, and push — your site redeploys automatically.
      </p>
      <div id="features" style={{marginTop:'1.5rem'}}>
        <ul>
          <li>Fast deploys on every push</li>
          <li>No dashboard/app code</li>
          <li>Easy to customize sections</li>
        </ul>
      </div>
    </section>
  );
}
