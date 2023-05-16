"use client";

import { useRef } from "react";
import { useQuizStore } from "@/store/quiz.store";
import { Question } from "@/interfaces/types";

export function StoreInitializer({ questions }: { questions: Question[] }) {
   const initialized = useRef(false);
   if (!initialized.current) {
      useQuizStore.setState({ questions });
      initialized.current = true;
   }
   return null;
}
