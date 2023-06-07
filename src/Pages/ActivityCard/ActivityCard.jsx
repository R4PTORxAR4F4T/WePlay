import React, { useEffect, useState } from 'react';

const ActivityCard = () => { 

    const [TopActivity, setTopActivity] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/topactivity')
            .then(res => res.json())
            .then(data => {
                setTopActivity(data);
                setLoading(false);
            });
    }, [])

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 my-10 '>
            {
                TopActivity.map(activity =>
                <div key={activity._id} className="card w-96 bg-base-100 shadow-xl image-full">
                    <figure><img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions justify-end">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default ActivityCard;