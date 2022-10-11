import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleQuiz from './SingleQuiz';

const Quiz = () => {
    const quizData = useLoaderData();
    const quizes = quizData.data.questions;
    return (
        <div className="my-10 flex">
            <div className='w-3/4'>
                {
                    quizes.map((quiz, index) => <SingleQuiz key={quiz.id} quiz={quiz} index={index} />)
                }
            </div>
            <div className="w-1/4 ml-4 text-center">
                <h2 className='text-2xl font-semibold'>Your State here</h2>
                <p className='text-xl text-primary font-normal'>Right Answer: { }</p>
                <p className='text-xl text-primary font-normal'>Wrong Answer: { }</p>
            </div>
        </div>
    );
};

export default Quiz;