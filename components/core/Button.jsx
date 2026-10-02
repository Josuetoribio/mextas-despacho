import React from "react";
import { Icon } from "./Icon.jsx";
const base={display:"inline-flex",alignItems:"center",justifyContent:"center",gap:14,fontFamily:"var(--font-sans)",fontWeight:600,fontSize:12,letterSpacing:"var(--tracking-button)",textTransform:"uppercase",cursor:"pointer",borderRadius:"var(--radius-1)",transition:"background var(--dur-base) var(--ease-institutional),color var(--dur-base),border-color var(--dur-base)",whiteSpace:"nowrap",textDecoration:"none"};
export function Button({variant="primary",size="md",tone="dark",arrow=true,icon,disabled,children,style,as="button",...rest}){
  const [h,setH]=React.useState(false);
  const pad=size==="sm"?"11px 18px":size==="lg"?"19px 34px":"15px 26px";
  const onDark=tone==="dark";
  const v={
    primary:{background:h?"var(--accent-hover)":"var(--accent)",color:"var(--carbon-950)",border:"1px solid transparent"},
    outline:{background:h?(onDark?"var(--fg-on-dark)":"var(--fg-on-light)"):"transparent",color:h?(onDark?"var(--carbon-900)":"var(--ivory-50)"):(onDark?"var(--fg-on-dark)":"var(--fg-on-light)"),border:"1px solid "+(onDark?"var(--line-dark-strong)":"var(--line-light-strong)")},
    link:{background:"transparent",color:h?"var(--accent)":(onDark?"var(--fg-on-dark)":"var(--fg-on-light)"),border:"none",padding:"6px 0",borderBottom:"1px solid var(--accent)",borderRadius:0}
  }[variant];
  return React.createElement(as,{...rest,disabled,onMouseEnter:()=>setH(true),onMouseLeave:()=>setH(false),style:{...base,padding:pad,...v,...(disabled?{opacity:.4,pointerEvents:"none"}:{}),...style}},
    icon&&React.createElement(Icon,{name:icon,size:16}),children,
    arrow&&variant!=="link"&&React.createElement("span",{style:{display:"inline-flex",transform:h?"translateX(4px)":"none",transition:"transform var(--dur-base) var(--ease-institutional)"}},React.createElement(Icon,{name:"arrow-right",size:15,strokeWidth:1.5})));
}