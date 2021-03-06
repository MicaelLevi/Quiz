import React, { useState } from 'react';
import { fetchQuizQuestions } from './API';

import QuestionCard from './components/QuestionCard';

import { QuestionState } from './API';

import { GlobalStyle, Wrapper, Overlay, Modal } from './App.styles';

type answerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
}

const TOTAL_QUESTIONS = 5;

const App = () => {
  const [start, setStart] = useState(true);
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<answerObject[]>([]);
  const [gameOver, setGameOver] = useState(true);
  const [showOverlay, setShowOverlay] = useState(false);

  const startQuiz = async () => {
    setLoading(true);
    setGameOver(false);
    setShowOverlay(false);
    setStart(false);

    const newQuestions = await fetchQuizQuestions();

    setQuestions(newQuestions);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;
      const correct = questions[number].correctAnswer === answer;

      if (correct)
        nextQuestion();
      else {
        setShowOverlay(true);
      }

      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correctAnswer,
      };
      setUserAnswers(prev => [...prev, answerObject]);
    }
  }

  const nextQuestion = () => {
    const next = number + 1;
    if (next === TOTAL_QUESTIONS) {
      setGameOver(true);
    } else
      setNumber(next);
  }




  return (
    <>
      <GlobalStyle />
      <Wrapper id="root">
        <h1>APP QUIZ</h1>
        {start ? (
          <button className="start" onClick={startQuiz}>
            Começar Jogo
          </button>
        ) : null}
        {loading && <p>Carregando...</p>}

        {!loading && !gameOver && (
          <QuestionCard
            questionNb={number + 1}
            totalQuestions={TOTAL_QUESTIONS}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswer}
          />
        )}

        {/* Confused Stonks */}
        {showOverlay && (
          <Overlay>
            <Modal>
              <h2>Você perdeu T-T</h2>
              <div>
                <button className="restart" onClick={startQuiz}>
                  Recomeçar Jogo
                  </button>
              </div>
            </Modal>
          </Overlay>
        )}
        {gameOver && userAnswers.length === TOTAL_QUESTIONS && !showOverlay ? (
          <div>
            <h2>Você ganhou</h2>
            <button className="restart" onClick={startQuiz}>
              Recomeçar Jogo
            </button>
          </div>
        ) : null}
      </Wrapper>
    </>
  );
}

export default App;