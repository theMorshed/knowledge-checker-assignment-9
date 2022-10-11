import React from 'react';
import { Link } from 'react-router-dom';

const Subject = ({ subject }) => {
    const { id, name, logo, total } = subject;
    return (
        <div>
            <div className="card card-side shadow-xl my-4 bg-slate-200 text-white">
                <figure><img className='h-48' src={logo} alt="" /></figure>
                <div className="card-body text-primary">
                    <h2 className="card-title">{name}</h2>
                    <p>Total Quiz: {total}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/api/quiz/${id}`} className="btn btn-primary">Goto Quiz</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subject;