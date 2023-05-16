"use cliente";

import { useQuizStore } from "@/store/quiz.store";
import { Loader, WinnerDecoration } from "../atoms";

interface Props {
   setShowResults: (value: boolean) => void;
}

export function Results({ setShowResults }: Props) {
   const { correctAnswers, percentage, playQuiz, resetQuiz, loading, setGameStarted } = useQuizStore();

   const handleTryAgain = async () => {
      const { ready } = await playQuiz();
      if (ready && !loading) {
         setShowResults(false);
      }
   };

   const handleSettings = async () => {
      const { ready } = await resetQuiz();
      if (ready && !loading) {
         setShowResults(false);
         setGameStarted();
      }
   };

   return (
      <section className="results">
         <div className="results__container">
            <WinnerDecoration />
            {/* <h2 className="results__title">Results</h2> */}
            <p className="results__text">
               You got <strong> {correctAnswers} </strong> correct answers
            </p>
            <div className={`results__progress ${percentage > 50 ? " border-[#90EE90]" : " border-[#FFA07A]"} `}>
               <div
                  style={{ width: `${percentage}%` }}
                  className={`results__progress__bar ${
                     percentage > 50 ? "bg-[#90EE90] border-[#90EE90]" : "bg-[#FFA07A] border-[#FFA07A]"
                  } `}
               ></div>
               <span className="results__progress__number"> {percentage.toFixed(1)}% </span>
            </div>
            <div className="w-full flex items-center justify-between">
               <button onClick={handleSettings} className="results__button">
                  Settings
               </button>
               <button onClick={handleTryAgain} className="results__button">
                  Try again
               </button>
            </div>
            {loading && (
               <div className="results__loader">
                  <Loader />
               </div>
            )}
         </div>
      </section>
   );
}
