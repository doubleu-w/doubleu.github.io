"use client";
import { useState } from "react";

export default function Helper(){
  const [messages,setMessages] = useState([
    {role:"assistant", text:"Hi! I’m your everyday helper. Ask me for a plan, a checklist, or quick ideas."}
  ]);
  const [text,setText] = useState("");

  const send=()=>{
    if(!text.trim()) return;
    const userMsg = {role:"user", text};
    // Super simple local reply (rule-based). Replace with API later.
    const reply = {role:"assistant", text: generateReply(text) };
    setMessages(prev=>[...prev,userMsg,reply]);
    setText("");
  }

  function generateReply(t){
    const lower=t.toLowerCase();
    if(lower.includes("fitness")||lower.includes("gym")){
      return "Here’s a quick 3-day split: Day1 Push (Bench 4x8, OHP 3x10), Day2 Pull (Rows 4x10, Lat Pulldown 3x12), Day3 Legs (Squat 4x8, RDL 3x10). Add 2× 10k steps.";
    }
    if(lower.includes("content")||lower.includes("tiktok")||lower.includes("instagram")){
      return "Content plan idea: 5 hooks, 5 how-to reels, 3 transformation posts, 2 carousels with tips. Post 1-2×/day, batch record Sundays.";
    }
    return "Noted! Here’s a simple checklist: 1) Define goal 2) Pick niche 3) Choose product type 4) Draft outline 5) Package & export. Ask for a detailed plan for any step.";
  }

  return (
    <section className="section">
      <h1 className="h1" style={{fontSize:"2rem"}}>Everyday Helper</h1>
      <p className="p">A lightweight assistant for quick plans and checklists. (Local logic now; wire to an API later.)</p>

      <div className="chat" style={{marginTop:12}}>
        {messages.map((m,i)=>(
          <div key={i} className={"msg "+(m.role==="user"?"me":"")}>
            <div className="bubble">
              <div className="small" style={{opacity:.7,marginBottom:4}}>{m.role==="user"?"You":"Helper"}</div>
              <div>{m.text}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="row" style={{marginTop:12, alignItems:"center"}}>
        <input className="input" value={text} onChange={e=>setText(e.target.value)} placeholder="Ask for a plan, checklist, or ideas…" />
        <button className="btn" onClick={send}>Send</button>
      </div>
    </section>
  )
}
