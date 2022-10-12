import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleQuiz from './SingleQuiz';

const Quiz = () => {
    const quizData = useLoaderData();
    const questions = quizData.data.questions;
    const [userAnswer, setUserAnswer] = useState([]);
    let correctAnswerCount = 0;
    let allCorrectAnswer = [];
    for (const correct of questions) {
        allCorrectAnswer.push(correct.correctAnswer);
    }
    const handleCorrectAnswer = (answer) => {
        setUserAnswer((current) => [...current, answer]);
    }
    if (userAnswer.length > 0) {
        for (const correct of allCorrectAnswer) {
            if (userAnswer.includes(correct) === true) {
                correctAnswerCount += 1;
            }
        }
    }
    return (
        <div>
            <p className='text-3xl my-10 text-center font-semibold text-primary'>Quizes of {quizData.data.name}</p>
            <div className="my-10 md:flex md:flex-row-reverse gap-8">
                <div className='w-full md:w-1/4 text-left mb-10'>
                    <h2 className='text-xl text-primary font-semibold mb-5'>Your Exam State</h2>
                    <p className='text-lg'>Right Answer: <span className='text-primary font-semibold ml-3'>{correctAnswerCount}</span></p>
                </div>
                <div className='w-full md:w-3/4 mx-auto'>
                    {
                        questions.map((quiz, index) => <SingleQuiz key={quiz.id} id={quiz.id} quiz={quiz} index={index} handleCorrectAnswer={handleCorrectAnswer} />)
                    }
                </div>
            </div>
        </div>
    );
};

export default Quiz;