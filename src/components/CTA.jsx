import Link from "next/link";
export default function CTA(){
  return (
    <section className="section hero-card" style={{textAlign:"center"}}>
      <h3 className="h1" style={{fontSize:"1.8rem"}}>Ready to build your first pack?</h3>
      <p className="p">Choose a niche, pick product types, and let Double You draft everything.</p>
      <div style={{marginTop:14}}>
        <Link className="btn" href="/generator">Generate now</Link>
      </div>
    </section>
  )
}
