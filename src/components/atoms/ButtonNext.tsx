"use cliente";

interface Props {
   disabled: boolean;
   finish: boolean;
   onClick?: () => void;
}

export function ButtonNext({ disabled, onClick, finish }: Props) {
   return (
      <button className={`button-next ${disabled && "disabled"}`} onClick={onClick}>
         {finish ? (
            "Show Results"
         ) : (
            <>
               Next
               <i className="icon-arrow -rotate-90"></i>
            </>
         )}
      </button>
   );
}
