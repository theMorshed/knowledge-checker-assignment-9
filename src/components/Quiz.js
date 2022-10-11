import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleQuiz from './SingleQuiz';

const Quiz = () => {
    const quizData = useLoaderData();
    const quizes = quizData.data.questions;
    return (
        <div>
            {
                quizes.map((quiz, index) => <SingleQuiz key={quiz.id} quiz={quiz} index={index} />)
            }
        </div>
    );
};

export default Quiz;