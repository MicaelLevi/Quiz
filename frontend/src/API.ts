import { shuffleArray } from './utils';

export type Question = {
    correctAnswer: string;
    incorrectAnswers: string[];
    question: string;
}

export type QuestionState = Question & { answers: string[] };

export const fetchQuizQuestions = async () => {
    const endpoint = 'http://localhost:8080/quiz';
    const data = await (await fetch(endpoint)).json();

    return data.map((question: Question) => (
        {
            ...question,
            answers: shuffleArray([...question.incorrectAnswers, question.correctAnswer]),
        }
    ))
}