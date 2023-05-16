interface Props {
   className?: string;
}

export function CircleDecoration({ className = "" }: Props) {
   return <div className={`circle-decoration ${className}`}></div>;
}
