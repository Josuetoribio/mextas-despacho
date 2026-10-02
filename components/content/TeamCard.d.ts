/** Portrait card for a lawyer. */
export interface TeamCardProps{ photo:string; name:string; role:string; linkedin?:string; email?:string; onClick?:()=>void; style?:React.CSSProperties; }
export function TeamCard(props:TeamCardProps):JSX.Element;