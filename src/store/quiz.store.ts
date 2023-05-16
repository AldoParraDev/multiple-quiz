import { create } from "zustand";
import { Question } from "@/interfaces/types";
import { getQuestions } from "@/services/questions.service";

interface QuestionStore {
   questions: Question[];
   currentQuestion: number;
   correctAnswers: number;
   percentage: number;
   loading: boolean;
   gameStarted: boolean;
   amount: number;
   category: number;
   difficulty: string;
   setCorrectAnswers: () => void;
   selectAmount: (amount: number) => void;
   selectCategory: (category: number) => void;
   selectDifficulty: (difficulty: string) => void;
   selectUserAnswer: (answer: string) => void;
   setPercentage: () => void;
   setGameStarted: () => void;
   nextQuestion: () => void;
   resetQuiz: () => Promise<{ ready: boolean }>;
   playQuiz: () => Promise<{ ready: boolean }>;
}

export const useQuizStore = create<QuestionStore>((set, get) => ({
   questions: [],
   currentQuestion: 0,
   correctAnswers: 0,
   percentage: 0,
   loading: false,
   gameStarted: false,
   amount: 5,
   category: 10,
   difficulty: "easy",
   selectAmount: (amount: number) => {
      set({ amount });
   },
   selectCategory: (category: number) => {
      set({ category });
   },
   selectDifficulty: (difficulty: string) => {
      set({ difficulty });
   },
   setCorrectAnswers: () => {
      set((state) => ({
         correctAnswers: state.correctAnswers + 1,
      }));
   },
   selectUserAnswer: (answer: string) => {
      const questions = get().questions;
      const currentQuestion = get().currentQuestion;
      questions[currentQuestion].user_answer = answer;
      set({ questions });
   },
   nextQuestion: () => {
      set((state) => ({
         currentQuestion: state.currentQuestion + 1,
      }));
   },
   setPercentage: () => {
      const correct_answer = get().correctAnswers;
      const totalQuestions = get().questions.length;
      const percentage = (correct_answer / totalQuestions) * 100;
      set({ percentage });
   },
   setGameStarted: () => {
      set({ gameStarted: false });
   },
   resetQuiz: async () => {
      set({ loading: true });
      const amount = 5;
      const category = 10;
      const difficulty = "easy";
      const questions = await getQuestions(amount, category, difficulty);
      set({
         questions,
         currentQuestion: 0,
         correctAnswers: 0,
         loading: false,
         gameStarted: false,
         amount,
         category,
         difficulty,
      });
      return { ready: true };
   },
   playQuiz: async () => {
      set({ loading: true });
      const amount = get().amount;
      const category = get().category;
      const difficulty = get().difficulty;
      const questions = await getQuestions(amount, category, difficulty);
      set({ questions, currentQuestion: 0, correctAnswers: 0, gameStarted: true, loading: false });
      return { ready: true };
   },
}));
