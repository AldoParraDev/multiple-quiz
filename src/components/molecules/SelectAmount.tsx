"use client";

import { useQuizStore } from "@/store/quiz.store";
import { useState } from "react";

const options = [5, 10, 15, 20];

export function SelectAmount() {
   const { amount, selectAmount } = useQuizStore();
   const [openSelect, setOpenSelect] = useState<boolean>(false);

   const handleOpenSelect = () => {
      setOpenSelect((prevState) => !prevState);
   };
   const handleSelectAmount = (option: number) => {
      selectAmount(option);
      setOpenSelect((prevState) => !prevState);
   };
   return (
      <div className="select-amount">
         <span className="select-amount__label">Questions amount:</span>
         <div className="select-amount__selection">
            <button
               className="select-amount__selection__selected"
               onClick={() => handleOpenSelect()}
            >
               {amount} <i className="icon-arrow"></i>
            </button>
            <ul
               className={`select-amount__selection__list ${
                  openSelect && "open"
               }`}
            >
               {options.map((option, index) => (
                  <li
                     className={`select-amount__selection__list__item ${
                        option === amount && "selected"
                     }`}
                     onClick={() => handleSelectAmount(option)}
                     key={index}
                  >
                     {option}
                     <i className="icon-check"></i>
                  </li>
               ))}
            </ul>
         </div>
      </div>
   );
}
