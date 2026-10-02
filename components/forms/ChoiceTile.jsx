import React from "react";
import { Icon } from "../core/Icon.jsx";
export function ChoiceTile({icon,label,selected=false,onClick,tone="light",style}){
  const [h,setH]=React.useState(false);
  const dark=tone==="dark";
  return React.createElement("button",{type:"button",onClick,"aria-pressed":selected,onMouseEnter:()=>setH(true),onMouseLeave:()=>setH(false),style:{all:"unset",cursor:"pointer",boxSizing:"border-box",display:"flex",alignItems:"center",gap:14,padding:"16px 18px",border:"1px solid "+(selected?"var(--accent)":h?(dark?"var(--line-dark-strong)":"var(--line-light-strong)"):(dark?"var(--line-dark)":"var(--line-light)")),background:selected?(dark?"rgba(180,144,94,.08)":"rgba(180,144,94,.07)"):"transparent",color:dark?"var(--fg-on-dark)":"var(--fg-on-light)",fontSize:13.5,fontWeight:500,transition:"all var(--dur-base) var(--ease-institutional)",...style}},
    icon&&React.createElement(Icon,{name:icon,size:20,strokeWidth:1.25,color:selected?"var(--accent)":"currentColor"}),
    React.createElement("span",{style:{flex:1}},label),
    React.createElement("span",{style:{width:14,height:14,border:"1px solid "+(selected?"var(--accent)":"currentColor"),borderRadius:"50%",display:"grid",placeItems:"center",opacity:selected?1:.4}},selected&&React.createElement("span",{style:{width:6,height:6,borderRadius:"50%",background:"var(--accent)"}})));
}