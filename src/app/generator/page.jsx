"use client";
import { useState } from "react";

const PRODUCT_MAP = {
  education: ["Mini E-book","Course Outline","Cheat Sheet","Template Pack"],
  creative: ["Canva Template Pack","Notion Template","Printable Planner","Wallpaper Set"],
  audio: ["AI Voice Pack","Music Loops","SFX Library","Stock Clips List"],
  tech: ["AI Prompt Pack","Excel/Sheets Tool","Website Template","Mobile UI Kit"],
  niche: ["Fitness Program","Language Flashcards","Recipe Book","Self-Help Guide"]
};

export default function Generator(){
  const [niche,setNiche] = useState("education");
  const [types,setTypes] = useState(["Mini E-book","Template Pack"]);
  const [audience,setAudience] = useState("Beginners");
  const [topic,setTopic] = useState("Productivity");
  const [result,setResult] = useState([]);

  const toggleType=(t)=>{
    setTypes(prev => prev.includes(t) ? prev.filter(x=>x!==t) : [...prev,t]);
  }

  const generate=()=>{
    // Local, deterministic mock generation (no API calls).
    // You can later replace this with a server action or API route.
    const base = PRODUCT_MAP[niche] || [];
    const picked = base.filter(b => types.includes(b));
    const ideas = picked.map((p,i)=>({
      title: `${p}: ${topic} for ${audience}`,
      description: `A ${p.toLowerCase()} tailored to ${audience.toLowerCase()} in ${topic}. Includes outlines, steps, and assets.`,
      filename: `${p.replace(/\s+/g,'-').toLowerCase()}-${topic.toLowerCase()}.pdf`
    }));
    setResult(ideas.length?ideas:[{title:"Choose at least one type", description:"", filename:""}]);
  }

  const available = PRODUCT_MAP[niche] || [];

  return (
    <section className="section">
      <h1 className="h1" style={{fontSize:"2rem"}}>Generator</h1>
      <p className="p">Select a niche and product types. Click Generate — we’ll draft titles, descriptions, and filenames you can export later.</p>

      <div className="row" style={{marginTop:16}}>
        <div>
          <label className="small">Niche</label>
          <select className="select" value={niche} onChange={e=>{setNiche(e.target.value); setTypes([]);}}>
            <option value="education">Education & Knowledge</option>
            <option value="creative">Creative & Design</option>
            <option value="audio">Audio & Video</option>
            <option value="tech">Tech & Business</option>
            <option value="niche">Niche-Specific</option>
          </select>
        </div>
        <div>
          <label className="small">Audience</label>
          <input className="input" value={audience} onChange={e=>setAudience(e.target.value)} placeholder="Beginners / Busy Parents / Students"/>
        </div>
      </div>

      <div className="row" style={{marginTop:12}}>
        <div>
          <label className="small">Topic</label>
          <input className="input" value={topic} onChange={e=>setTopic(e.target.value)} placeholder="e.g., Fitness, Crypto, Time-Management"/>
        </div>
        <div>
          <label className="small">Product types (toggle)</label>
          <div style={{display:"flex",flexWrap:"wrap",gap:8}}>
            {available.map(t=>(
              <button key={t} className="btn secondary" onClick={()=>toggleType(t)} style={{borderColor: types.includes(t) ? "var(--brand)" : "#2A3A66"}}>
                {types.includes(t) ? "✓ " : ""}{t}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div style={{marginTop:16}}>
        <button className="btn" onClick={generate}>Generate</button>
      </div>

      {result.length>0 && (
        <div className="grid" style={{marginTop:18}}>
          {result.map((r,idx)=>(
            <div className="card" key={idx}>
              <h3>{r.title}</h3>
              <p className="small" style={{margin:"6px 0 10px"}}>{r.description}</p>
              {r.filename && <div className="badge">File: {r.filename}</div>}
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
