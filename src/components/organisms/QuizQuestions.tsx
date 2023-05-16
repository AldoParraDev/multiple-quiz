"use client";

import { useQuizStore } from "@/store/quiz.store";
import { letters } from "@/lib/letters";
import confetti from "canvas-confetti";
import { decode } from "html-entities";
import { ButtonNext, Loader } from "../atoms";
import { useState } from "react";
import { Results } from "./Results";

interface Props {
   gameStarted: boolean;
}

const getColors = (user_answer: string, option: string, correct_answer: string) => {
   if (user_answer === "") return "laptop:hover:bg-primary/[0.35] bg-white text-primary";
   if (user_answer !== correct_answer && option === correct_answer) return "bg-green-600 text-white border-green-600";
   if (user_answer !== correct_answer && option === user_answer) return "bg-red-600 text-white border-red-600";
   if (user_answer === correct_answer && option === correct_answer) return "bg-green-600 text-white border-green-600";
   return "";
};

export function QuizQuestions({ gameStarted }: Props) {
   const { questions, currentQuestion, loading, setCorrectAnswers, selectUserAnswer, nextQuestion, setPercentage } =
      useQuizStore();
   const [showResults, setShowResults] = useState<boolean>(false);

   const selectedQuestion = questions[currentQuestion];

   const handleSelectOption = (optionSelected: string) => {
      if (selectedQuestion?.user_answer !== "") return;
      selectUserAnswer(optionSelected);
      if (optionSelected === selectedQuestion?.correct_answer) {
         void confetti({
            particleCount: 100,
            spread: 50,
            origin: {
               y: 0.7,
            },
         });
         setCorrectAnswers();
      }
   };
   const handleNextQuestion = () => {
      setPercentage();
      if (currentQuestion === questions.length - 1) {
         setShowResults(true);
         return;
      }
      nextQuestion();
   };

   const handleResetQuiz = (value: boolean) => {
      setShowResults(value);
   };

   if (showResults) return <Results setShowResults={(value) => handleResetQuiz(value)} />;

   return (
      <div className={`quiz-questions ${gameStarted ? "active" : "desactive"}`}>
         <div className="quiz-questions__container">
            <span className="quiz-questions__category">
               {selectedQuestion?.category.slice(14, selectedQuestion?.category.length)}
            </span>
            <h2 className="quiz-questions__question">{selectedQuestion?.question}</h2>
            <ul className="quiz-questions__list">
               {selectedQuestion?.options.map((option, index) => (
                  <li
                     onClick={() => handleSelectOption(option)}
                     key={index}
                     className={`quiz-questions__list__option ${getColors(
                        selectedQuestion?.user_answer,
                        option,
                        selectedQuestion?.correct_answer
                     )} `}
                  >
                     <span>{letters[index]}</span>
                     <p> {decode(option)} </p>
                  </li>
               ))}
            </ul>
            <div className="quiz-questions__interaction">
               <span>
                  {currentQuestion + 1} of {questions.length}
               </span>
               <ButtonNext
                  onClick={handleNextQuestion}
                  disabled={selectedQuestion?.user_answer === "" || loading}
                  finish={currentQuestion === questions.length - 1}
               />
            </div>
            {loading && (
               <div className="quiz-questions__loader">
                  <Loader />
               </div>
            )}
         </div>
      </div>
   );
}
