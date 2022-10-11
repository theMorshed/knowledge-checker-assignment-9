import { useLoaderData } from 'react-router-dom';
import SingleQuiz from './SingleQuiz';

const Quiz = () => {
    const quizData = useLoaderData();
    const questions = quizData.data.questions;
    return (
        <div>
            <p className='text-3xl my-10 text-center font-semibold text-primary'>Quizes of {quizData.data.name}</p>
            <div className="my-10 flex">
                <div className='w-3/4 mx-auto'>
                    {
                        questions.map((quiz, index) => <SingleQuiz key={quiz.id} id={quiz.id} quiz={quiz} index={index} />)
                    }
                </div>
                {/* <div className="w-1/4 ml-4 text-center">
                    <h2 className='text-2xl font-semibold'>Your State here</h2>
                    <p className='text-xl text-primary font-normal'>Right Answer: {}</p>
                    <p className='text-xl text-primary font-normal'>Wrong Answer: {}</p>
                </div> */}
            </div>
        </div>
    );
};

export default Quiz;