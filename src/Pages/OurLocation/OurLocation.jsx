import React from 'react';

const OurLocation = () => {
    return (
        <div className='my-8'>
            <p className='text-center text-4xl font-bold my-4'>Our locations</p>
            <div className='flex flex-col md:flex-row justify-center items-center'>
                <div className='w-full md:w-1/2 '>
                    <img src="/map.jpg" alt="" />
                </div>
                <div className='w-full md:w-1/2 flex flex-col justify-center items-center'>
                    <p className='text-center text-3xl m-4'>Here is our location map.</p>
                    <p className='text-center text-2xl m-4'>You can take a look about our plase and navigate yourself</p>
                    <p className='text-center m-4'>For better exparience you can use Goople map</p>
                    <button className="btn btn-outline ">Locate</button>
                </div>
            </div>
        </div>
    );
};

export default OurLocation;