import { CircleDecoration } from "@/components/atoms/CircleDecoration";
import { Quiz, StoreInitializer } from "@/components/organisms";
import { Footer, Header } from "@/components/ui";
import { getQuestions } from "@/services/questions.service";
import { useQuizStore } from "@/store/quiz.store";

export default async function Home() {
   const questions = await getQuestions();
   useQuizStore.setState({ questions });
   return (
      <main className="main-page">
         <StoreInitializer questions={questions} />
         <CircleDecoration className="top-[10%] right-[-30rem] -rotate-45" />
         <CircleDecoration className="bottom-[10%] left-[-30rem] rotate-[135deg]" />
         <Header />
         <Quiz />
         <Footer />
      </main>
   );
}
