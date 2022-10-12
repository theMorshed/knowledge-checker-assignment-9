import React from 'react';
import { useRouteError } from 'react-router-dom';
import Header from './Header';

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className='w-full md:w-3/5 mx-auto'>
            <Header />
            <div className='text-center'>
                <p className='mt-20 text-3xl mt-5 text-red-500 font-semibold'>{error.status} - {error.statusText}</p>
                <p className='text-primary text-xl mt-2'>::: Sorry! This route is not exist, Please select another route from our navigation bar and enjoy yourself..</p>
            </div>
        </div>
    );
};

export default ErrorPage;