import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Subject from './Subject';

const Subjects = () => {
    const subjects = useLoaderData().data;
    return (
        <div>
            <div className="hero" style={{ backgroundImage: 'url("header-bg.jpg")' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <p className="text-3xl font-bold py-24">Knowledge Checker is a QUIZ site where you can check your knowledge with some limited quiz of selected topics. If you want to check your knowledge depth then select a topics from bottom and check yourself with quizes.</p>
                </div>
            </div>
            <div className='my-10 w-10/12 md:w-4/5 lg:w-3/5 mx-auto'>
                {
                    subjects.map(subject => <Subject key={subject.id} subject={subject} />)
                }
            </div>
        </div>        
    );
};

export default Subjects;