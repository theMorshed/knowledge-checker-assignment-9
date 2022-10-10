import React from 'react';

const SingleQuiz = ({ quiz }) => {
    console.log(quiz);
    const { question, options } = quiz;
    return (
        <div>
            <p className='text-3xl font-bold'>Quiz : {question}</p>
                     
        </div>
    );
};

export default SingleQuiz;