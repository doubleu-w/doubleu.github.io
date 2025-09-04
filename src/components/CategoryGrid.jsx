export default function CategoryGrid(){
  const groups = [
    {
      title:"📝 Education & Knowledge",
      items:[
        "Mini E-books & Guides","Online Courses & Workshops","Cheat Sheets & Templates"
      ]
    },
    {
      title:"🎨 Creative & Design",
      items:[
        "Canva Templates","Notion Templates","Printable Planners & Journals","Digital Art / Wallpapers"
      ]
    },
    {
      title:"🎧 Audio & Video",
      items:[
        "AI Voice Packs","Music & Beats","Sound Effects Libraries","Stock Video Clips"
      ]
    },
    {
      title:"💻 Tech & Business",
      items:[
        "AI Prompts & Tools","Spreadsheets","Website Templates","Mobile App UI Kits"
      ]
    },
    {
      title:"💡 Niche-Specific",
      items:[
        "Fitness Programs","Language Learning Packs","Recipe Books","Relationship & Self-Help Guides"
      ]
    }
  ];
  return (
    <section className="section">
      <h2 className="h1" style={{fontSize:"1.9rem"}}>What you can generate</h2>
      <p className="p">Pick a niche and we’ll assemble a ready-to-sell pack in minutes.</p>
      <div className="grid" style={{marginTop:16}}>
        {groups.map(g=>(
          <div className="card" key={g.title}>
            <h3>{g.title}</h3>
            <p style={{marginTop:8}}>{g.items.join(" • ")}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
