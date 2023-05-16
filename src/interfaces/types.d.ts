export interface QuizAPI {
   response_code: number;
   results: QuizResults[];
}

export interface QuizResults {
   category: string;
   type: string;
   difficulty: string;
   question: string;
   correct_answer: string;
   incorrect_answers: string[];
}

export interface Question {
   id: string;
   question: string;
   category: string;
   correct_answer: string;
   options: string[];
   user_answer: string;
}
