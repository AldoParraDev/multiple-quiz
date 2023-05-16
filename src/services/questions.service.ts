import { Question, QuizAPI } from "@/interfaces/types";
import { decode } from "html-entities";

export async function getQuestions(
   amount: number = 5,
   category: number = 10,
   difficulty: string = "easy"
): Promise<Question[]> {
   const URL_API = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`;
   try {
      const data = await fetch(URL_API, { next: { revalidate: 60 } }).then(
         async (res) => await (res.json() as Promise<QuizAPI>)
      );
      const questions = data.results.map((result) => {
         const listAnswers = [...result.incorrect_answers, result.correct_answer];
         const randomQuestions = listAnswers.sort(() => Math.random() - 0.5);
         return {
            id: crypto.randomUUID(),
            category: result.category,
            question: decode(result.question, { level: "html5" }),
            correct_answer: result.correct_answer,
            options: randomQuestions,
            user_answer: "",
         };
      });

      return questions;
   } catch (error) {
      console.log(error);

      return [];
   }
}
