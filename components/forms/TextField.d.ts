/** Underline-only text field (input or textarea). */
export interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement>{ label?:string; tone?:"light"|"dark"; multiline?:boolean; rows?:number; error?:string; }
export function TextField(props:TextFieldProps):JSX.Element;