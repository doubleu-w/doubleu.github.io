export default function Catalog(){
  const cats = [
    {icon:"📝", title:"Education & Knowledge", lines:["Mini E-books","Courses","Cheat Sheets"]},
    {icon:"🎨", title:"Creative & Design", lines:["Canva Templates","Notion","Printables","Wallpapers"]},
    {icon:"🎧", title:"Audio & Video", lines:["AI Voices","Beats","SFX","Stock Clips"]},
    {icon:"💻", title:"Tech & Business", lines:["AI Prompt Packs","Sheets","Website Templates","UI Kits"]},
    {icon:"💡", title:"Niche-Specific", lines:["Fitness","Language","Recipes","Self-Help"]},
  ];
  return (
    <section className="section">
      <h1 className="h1" style={{fontSize:"2rem"}}>Catalog</h1>
      <p className="p">Browse by category.</p>
      <div className="grid" style={{marginTop:16}}>
        {cats.map(c=>(
          <div className="card" key={c.title}>
            <h3>{c.icon} {c.title}</h3>
            <p className="small" style={{marginTop:6}}>{c.lines.join(" • ")}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
