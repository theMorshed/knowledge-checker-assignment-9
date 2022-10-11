import React from 'react';

const SingleQuiz = ({ quiz, index }) => {
    const { question, options } = quiz;
    return (
        <div>
            <p className='text-3xl font-bold'>Quiz {index + 1}: {question}</p>
            <form action="">
                {
                    options.map(option => {
                        return (
                            <div className="form-control">
                                <label className="label cursor-pointer justify-start">
                                    <input type="radio" name="radio-6" className="radio checked:bg-blue-500" checked />
                                    <span className="label-text ml-3">{option}</span>
                                </label>
                            </div>
                        );
                    })
                }
            </form>            
        </div>
    );
};

export default SingleQuiz;