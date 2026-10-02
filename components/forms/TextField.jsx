import React from "react";
export function TextField({label,tone="light",multiline=false,rows=5,error,style,id,...rest}){
  const [f,setF]=React.useState(false);
  const dark=tone==="dark";
  const fid=id||("f"+Math.random().toString(36).slice(2,8));
  const fs={width:"100%",boxSizing:"border-box",background:"transparent",border:"none",borderBottom:"1px solid "+(error?"var(--error-600)":f?"var(--accent)":(dark?"var(--line-dark-strong)":"var(--line-light-strong)")),padding:"10px 0 12px",fontFamily:"var(--font-sans)",fontSize:15,color:dark?"var(--fg-on-dark)":"var(--fg-on-light)",outline:"none",resize:"vertical",transition:"border-color var(--dur-base)"};
  return React.createElement("label",{htmlFor:fid,style:{display:"flex",flexDirection:"column",gap:4,...style}},
    label&&React.createElement("span",{style:{fontSize:10.5,fontWeight:600,letterSpacing:".18em",textTransform:"uppercase",color:f?"var(--accent)":(dark?"var(--fg-on-dark-muted)":"var(--fg-on-light-muted)"),transition:"color var(--dur-base)"}},label),
    React.createElement(multiline?"textarea":"input",{id:fid,rows:multiline?rows:undefined,onFocus:()=>setF(true),onBlur:()=>setF(false),style:fs,...rest}),
    error&&React.createElement("span",{style:{fontSize:12,color:"var(--error-600)"}},error));
}