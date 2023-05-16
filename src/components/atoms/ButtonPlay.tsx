"use client";

import { useQuizStore } from "@/store/quiz.store";

export function ButtonPlay() {
   const { playQuiz } = useQuizStore();
   const handlePlay = () => {
      playQuiz();
   };
   return (
      <button className="button-play" onClick={() => handlePlay()}>
         <span>Play</span>
      </button>
   );
}
