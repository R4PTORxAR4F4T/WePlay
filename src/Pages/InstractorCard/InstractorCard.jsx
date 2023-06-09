import React,{ useEffect, useState } from 'react';

const InstractorCard = () => {

    const [TopInstractor, setTopInstractor] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/topinstractor')
            .then(res => res.json())
            .then(data => {
                setTopInstractor(data);
                setLoading(false);
            });
    }, [])
    
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10'>
        {   
            TopInstractor.map(instractor =>
            <div key={instractor._id} className="card bg-base-100 shadow-xl">
            <figure><img src={instractor.image} /></figure>
            <div className="card-body">
              <h2 className="card-title">
                {instractor.name}
              </h2>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">{instractor.className}</div>
                <div className="badge badge-outline">{instractor.numStudents}</div> 
              </div>
            </div>
            </div>)
        }
        </div>
    );
};

export default InstractorCard;