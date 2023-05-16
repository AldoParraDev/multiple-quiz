"use client";

import { useQuizStore } from "@/store/quiz.store";
import { QuizSettings } from "./QuizSettings";
import { QuizQuestions } from "./QuizQuestions";

export function Quiz() {
   const { gameStarted, resetQuiz } = useQuizStore();
   const handleClick = () => {
      resetQuiz();
   };
   return (
      <>
         <QuizSettings gameStarted={gameStarted} />
         <QuizQuestions gameStarted={gameStarted} />
      </>
   );
}
