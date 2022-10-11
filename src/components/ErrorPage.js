import React from 'react';
import { useRouteError } from 'react-router-dom';
import Header from './Header';

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div className='w-4/5 mx-auto'>
            <Header />
            <p className='mt-20 text-3xl text-center mt-5 text-red-500 font-semibold'>{error.status} - {error.statusText}::: Sorry! This route is not exist, Please select another route from our navigation bar and enjoy yourself..</p>
        </div>
    );
};

export default ErrorPage;