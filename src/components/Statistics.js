import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const Statistics = () => {
    const quizData = useLoaderData().data;
    const [questions, setQuestions] = useState(quizData);
    return (
        <div className='mt-20 w-full md:w-1/2 mx-auto'>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={questions} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                    <Line type="monotone" dataKey="total" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Statistics;