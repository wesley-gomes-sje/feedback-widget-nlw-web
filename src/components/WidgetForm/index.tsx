import { useState } from "react";
import { CloseButton } from "../CloseButton";
import bugImageUrl from "../../assets/bug.svg";
import ideaImageUrl from "../../assets/idea.svg";
import thoughtImageUrl from "../../assets/thought.svg";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccessStep";
export const feedbackTypes = {
  BUG: {
    title: "Problema",
    image: {
      source: bugImageUrl,
      alt: "Imagem de um inseto",
    },
  },
  IDEA: {
    title: "Ideia",
    image: {
      source: ideaImageUrl,
      alt: "imagem de uma lampada",
    },
  },
  OTHER: {
    title: "Outros",
    image: {
      source: thoughtImageUrl,
      alt: "imagem de uma nuvem",
    },
  },
};
export type FeedbackType = keyof typeof feedbackTypes;
export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSend, setfeedbackSend ] = useState(false);
  function handleRestartFeedback() {
    setfeedbackSend(false);
    setFeedbackType(null);
  }
  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
       {feedbackSend ? (
         <FeedbackSuccessStep onFeedbackRestartRequested={handleRestartFeedback} />
       ) : (
        <>
        {!feedbackType ? (
        <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
      ) : (
        <FeedbackContentStep
          feedbackType={feedbackType}
          onFeedbackRestartRequested={handleRestartFeedback}
          onFeedbackSend={() => setfeedbackSend(true)}
        />
      )}
        </>
       )
       }
      <footer className="text-xs text-neutral-400">
        Feito com ♥ por{" "}
        <a className="underline underline-offset-2" href="#">
          Wesley gomes
        </a>
      </footer>
    </div>
  );
}
