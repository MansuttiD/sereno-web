'use client';
import questions from '../../lib/faqs.json';
import Faq from './Faq';

export default function BoxFaqs() {
  return (
    <section
    id="Faq"
    >
      <article className="faqs-article">
        <header className="mb-8">
          <h2 className="faqs-title "><span className='font-semibold'>Preguntas</span> Frecuentes</h2>
        </header>
        <div className="flex flex-col gap-5">
          {questions.map((question) => (
            <Faq question={question.question} answer={question.answer} key= {question.id}/>
          ))}
        </div>
      </article>
    </section>
  );
}