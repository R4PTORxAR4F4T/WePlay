import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const ActivityCard = () => { 

    const { loading} = useAuth();
    const [TopActivity, setTopActivity] = useState([]);

    useEffect(() => {
        fetch('https://assignment-12-server-jet-iota.vercel.app/topactivity')
            .then(res => res.json())
            .then(data => {
                setTopActivity(data);
            });
    }, [loading])

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10 '>
            {
                TopActivity.map(activity =>
                <div key={activity._id} className="card bg-base-100 shadow-xl image-full">
                    <figure><img src={activity.image}/></figure>
                    <div className="card-body">
                        <h2 className="card-title">{activity.name}</h2>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ActivityCard;