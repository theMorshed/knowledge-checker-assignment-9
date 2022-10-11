import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Subject from './Subject';

const Subjects = () => {
    const subjects = useLoaderData().data;
    return (
        <div className='my-10 w-10/12 md:w-4/5 lg:w-3/5 mx-auto'>
            {
                subjects.map(subject => <Subject key={subject.id} subject={subject} />)
            }
        </div>
    );
};

export default Subjects;