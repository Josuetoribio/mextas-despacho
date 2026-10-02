import React from "react";
export function Eyebrow({children,tone="light",rule=false,style}){
  return React.createElement("div",{style:{display:"flex",alignItems:"center",gap:14,fontFamily:"var(--font-sans)",fontSize:11,fontWeight:600,letterSpacing:"var(--tracking-eyebrow)",textTransform:"uppercase",color:tone==="dark"?"var(--fg-on-dark)":"var(--accent-on-light)",...style}},
    rule&&React.createElement("span",{style:{width:32,height:1,background:"var(--accent)"}}),children);
}