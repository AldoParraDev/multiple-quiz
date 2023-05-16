import { useQuizStore } from "@/store/quiz.store";
import { ButtonPlay, Loader } from "../atoms";
import { SelectAmount, SelectCategory, SelectDifficulty } from "../molecules";

interface Props {
   gameStarted: boolean;
}

export function QuizSettings({ gameStarted }: Props) {
   const { loading } = useQuizStore();
   return (
      <section className={`quiz-settings ${!gameStarted ? "active" : "desactive"}`}>
         <div className="quiz-settings__container">
            <h1 className="quiz-settings__title">
               {/* <i className="icon-settings"></i> */}
               Settings
            </h1>
            <div className="quiz-settings__selects">
               <SelectAmount />
               <SelectCategory />
               <SelectDifficulty />
            </div>
            <div className="quiz-settings__button">
               <ButtonPlay />
            </div>
            {loading && (
               <div className="quiz-settings__loader">
                  <Loader />
               </div>
            )}
         </div>
      </section>
   );
}
