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
            </div>
        </div>
    );
};

export default Quiz;