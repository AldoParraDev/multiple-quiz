"use client";

import { useQuizStore } from "@/store/quiz.store";
import { useState } from "react";

const categorias = [
   { nombre: "Books", numero: 10 },
   { nombre: "Film", numero: 11 },
   { nombre: "Video Games", numero: 15 },
   { nombre: "Comics", numero: 29 },
   { nombre: "Cartoon & Animations", numero: 32 },
];

export function SelectCategory() {
   const { category, selectCategory } = useQuizStore();
   const [openSelect, setOpenSelect] = useState<boolean>(false);

   const handleOpenSelect = () => {
      setOpenSelect((prevState) => !prevState);
   };
   const handleSelectCategory = (category: number) => {
      selectCategory(category);
      setOpenSelect((prevState) => !prevState);
   };

   const categorySelected = categorias.filter((c) => c.numero === category);

   return (
      <div className="select-category">
         <span className="select-category__label">Category:</span>
         <div className="select-category__selection">
            <button className="select-category__selection__selected" onClick={() => handleOpenSelect()}>
               {categorySelected[0].nombre} <i className="icon-arrow"></i>
            </button>
            <ul className={`select-category__selection__list ${openSelect && "open"}`}>
               {categorias.map((cat, index) => (
                  <li
                     className={`select-category__selection__list__item ${cat.numero === category && "selected"}`}
                     onClick={() => handleSelectCategory(cat.numero)}
                     key={index}
                  >
                     {cat.nombre}
                     <i className="icon-check"></i>
                  </li>
               ))}
            </ul>
         </div>
      </div>
   );
}
