import { EyeIcon } from '@heroicons/react/24/solid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const customId = "custom-id-yes";

const SingleQuiz = ({ id, quiz, index }) => {
    const { question, options, correctAnswer } = quiz;

    const rightAnswer = () => toast(`Correct Answer is: ${correctAnswer}`, {
        toastId: customId
    });
    const handleAnswer = (selectedAnswer) => {
        if (selectedAnswer === correctAnswer) {
            (() => {
                toast('Your answer is correct', {
                    toastId: customId
                });
            })();
        } else {
            (() => {
                toast('You have selected a wrong answer', {
                    toastId: customId
                });
            })();
        }
    }

    return (
        <div className='mb-4 border border-primary rounded p-4 shadow-lg bg-slate-200 text-primary'>
            <div className='relative mb-5'>
                <p className='text-2xl font-bold mr-10'>Quiz {index + 1}: {question}</p>
                <EyeIcon onClick={rightAnswer} className="ml-5 w-8 h-8 text-primary cursor-pointer absolute top-0 right-0" />
                <ToastContainer autoClose={2000} />
            </div>
            <form action="">
                {
                    options.map((option, index) => {
                        return (
                            <div key={index} className="form-control">
                                <label onClick={() => handleAnswer(option)} className="label cursor-pointer justify-start">
                                    <input type="radio" name="radio-6" className="radio checked:bg-primary" />
                                    <span className="label-text ml-3 text-primary">{option}</span>
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