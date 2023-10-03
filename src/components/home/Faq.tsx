import { useState } from 'react';

export default function Faq({ question, answer }: any) {

  const [boxQuestion, setBoxQuestion] = useState(true);
  const [arrowQuestion, setArrowQuestion] = useState(true)

  const handleBoxAndArrowQuestion = () => {
    setBoxQuestion(!boxQuestion);
    if (arrowQuestion) {
      setArrowQuestion(!arrowQuestion)
    } else{
      setTimeout(() => {
        setArrowQuestion(!arrowQuestion)
      }, 400);
    }

  };

  return (
    <div
      className={` ${
        boxQuestion ? ' h-11 sm:h-[3.5rem] md:h-[8rem] pb-5' : 'h-full pb-5'
      } faq-card `}
    >
      <h3 className="faq-question">
        <img className="h-2 my-auto md:h-4" src="./assets/img/home/elipse.svg" />
        <span>{question}</span>
        <img
          className={`${
            !arrowQuestion  ? 'hidden' : ''
          } ml-auto cursor-pointer h-2 md:h-5`}
          onClick={handleBoxAndArrowQuestion}
          src="./assets/img/home/vectorDawn.svg"
        />
      </h3>
      <p className="faq-response">
        <span>{answer}</span>
        <img
          className="ml-auto cursor-pointer h-2 md:h-5"
          onClick={handleBoxAndArrowQuestion}
          src="./assets/img/home/vectorUp.svg"
        />
      </p>
    </div>
  );
}