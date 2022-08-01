import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

type QuestionProps = {
  title: string;
  info: string;
};

export function Question({ title, info }: QuestionProps) {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <article className="question">
      <header>
        <h4>{title}</h4>
        <button className="btn" onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>

      <p>{showInfo && info}</p>
    </article>
  );
}
