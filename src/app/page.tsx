export default function Home() {
  return (
    <section>
      <h1 style={{fontSize:'2.25rem',fontWeight:800,marginBottom:'0.75rem'}}>
        Welcome to Double You
      </h1>
      <p style={{maxWidth:680}}>
        Your website is live on Vercel 🎉  
        Edit this text in <code>src/app/page.tsx</code>, commit, and push — your site redeploys automatically.
      </p>
      <ul style={{marginTop:'1rem'}}>
        <li>⚡ Fast deploys on every push</li>
        <li>🎨 Easy to style with CSS or Tailwind</li>
        <li>🚀 Ready to expand into a full site</li>
      </ul>
    </section>
  );
}
