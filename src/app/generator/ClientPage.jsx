"use client";
import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

const PRODUCT_MAP = {
  education: ["Mini E-book","Course Outline","Cheat Sheet","Template Pack"],
  creative: ["Canva Template Pack","Notion Template","Printable Planner","Wallpaper Set"],
  audio: ["AI Voice Pack","Music Loops","SFX Library","Stock Clips List"],
  tech: ["AI Prompt Pack","Excel/Sheets Tool","Website Template","Mobile UI Kit"],
  niche: ["Fitness Program","Language Flashcards","Recipe Book","Self-Help Guide"]
};

export default function ClientPage(){
  const params = useSearchParams();

  const initial = useMemo(()=>({
    niche: params.get("niche") || "education",
    audience: params.get("audience") || "Beginners",
    topic: params.get("topic") || "Productivity",
    types: (params.get("types") || "").split(",").map(s=>s.trim()).filter(Boolean)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }), [params]);

  const [niche,setNiche] = useState(initial.niche);
  const [types,setTypes] = useState(initial.types.length ? initial.types : ["Mini E-book","Template Pack"]);
  const [audience,setAudience] = useState(initial.audience);
  const [topic,setTopic] = useState(initial.topic);
  const [result,setResult] = useState([]);

  const available = PRODUCT_MAP[niche] || [];

  const toggleType=(t)=>{
    setTypes(prev => prev.includes(t) ? prev.filter(x=>x!==t) : [...prev,t]);
  }

  const generate=()=>{
    const base = PRODUCT_MAP[niche] || [];
    const picked = (types.length?types:base);
    const ideas = picked.map((p)=>({
      title: `${p}: ${topic} for ${audience}`,
      description: `A ${p.toLowerCase()} tailored to ${audience.toLowerCase()} in ${topic}. Includes outlines, steps, and assets.`,
      filename: `${p.replace(/\s+/g,'-').toLowerCase()}-${topic.toLowerCase()}.pdf`
    }));
    setResult(ideas);
  }

  useEffect(()=>{
    if (params.get("autogen")==="1") generate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);

  return (
    <section className="container" style={{paddingTop:24}}>
      <h1 className="h1" style={{fontSize:"2rem"}}>Generator</h1>
      <p className="small">Prefill via homepage bundles or customize below.</p>

      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginTop:12}}>
        <div>
          <label className="small">Niche</label>
          <select className="nav-btn" value={niche} onChange={e=>{setNiche(e.target.value); setTypes([]);}}>
            <option value="education">Education & Knowledge</option>
            <option value="creative">Creative & Design</option>
            <option value="audio">Audio & Video</option>
            <option value="tech">Tech & Business</option>
            <option value="niche">Niche-Specific</option>
          </select>
        </div>
        <div>
          <label className="small">Audience</label>
          <input className="nav-btn" value={audience} onChange={e=>setAudience(e.target.value)} placeholder="Beginners / Busy Parents / Students"/>
        </div>
      </div>

      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12,marginTop:12}}>
        <div>
          <label className="small">Topic</label>
          <input className="nav-btn" value={topic} onChange={e=>setTopic(e.target.value)} placeholder="e.g., Fitness, Crypto, Time-Management"/>
        </div>
        <div>
          <label className="small">Product types (toggle)</label>
          <div style={{display:"flex",flexWrap:"wrap",gap:8}}>
            {(available.length?available:types).map(t=>(
              <button key={t} className="nav-btn" onClick={()=>toggleType(t)} style={{borderColor: types.includes(t) ? "var(--brand)" : "rgba(255,255,255,.10)"}}>
                {types.includes(t) ? "✓ " : ""}{t}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div style={{marginTop:16}}>
        <button className="glow-btn" onClick={generate}>Generate</button>
      </div>

      {result.length>0 && (
        <div className="grid" style={{marginTop:18}}>
          {result.map((r,idx)=>(
            <div className="card" key={idx}>
              <h3>{r.title}</h3>
              <p className="small" style={{margin:"6px 0 10px"}}>{r.description}</p>
              <div className="small">File: {r.filename}</div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
