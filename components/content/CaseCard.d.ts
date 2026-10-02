/** Dark case-study card: architectural photo + title + summary. */
export interface CaseCardProps{ image:string; title:string; summary:string; cta?:string; onClick?:()=>void; style?:React.CSSProperties; }
export function CaseCard(props:CaseCardProps):JSX.Element;