/**
 * Ivory service tile with bronze line icon.
 * @startingPoint section="Content" subtitle="Service tiles" viewport="700x300"
 */
export interface ServiceCardProps{ icon?:string; title:string; description:string; cta?:string; onClick?:()=>void; style?:React.CSSProperties; }
export function ServiceCard(props:ServiceCardProps):JSX.Element;