"use client";

import { useQuizStore } from "@/store/quiz.store";
import { useState } from "react";

const difficulties = ["easy", "medium", "hard"];

export function SelectDifficulty() {
   const { difficulty, selectDifficulty } = useQuizStore();
   const [openSelect, setOpenSelect] = useState<boolean>(false);

   const handleOpenSelect = () => {
      setOpenSelect((prevState) => !prevState);
   };
   const handleSelectDifficulty = (difficulty: string) => {
      selectDifficulty(difficulty);
      setOpenSelect((prevState) => !prevState);
   };

   return (
      <div className="select-difficulty">
         <span className="select-difficulty__label">Difficulty:</span>
         <div className="select-difficulty__selection">
            <button
               className="select-difficulty__selection__selected"
               onClick={() => handleOpenSelect()}
            >
               {difficulty} <i className="icon-arrow"></i>
            </button>
            <ul
               className={`select-difficulty__selection__list ${
                  openSelect && "open"
               }`}
            >
               {difficulties.map((dif, index) => (
                  <li
                     className={`select-difficulty__selection__list__item ${
                        dif === difficulty && "selected"
                     }`}
                     onClick={() => handleSelectDifficulty(dif)}
                     key={index}
                  >
                     {dif}
                     <i className="icon-check"></i>
                  </li>
               ))}
            </ul>
         </div>
      </div>
   );
}
