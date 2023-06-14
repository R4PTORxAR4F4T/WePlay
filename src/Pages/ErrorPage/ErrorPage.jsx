import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';



const ErrorPage = () => {

    return (
        <div className='w-4/6 mx-auto'>
            <Helmet>
                <title>WePlay | Page not Found</title>
            </Helmet>
            <div className="flex flex-col items-center justify-center h-screen">
                <img src="/error404.png" alt="Error" className=" mb-4" />
                <p className="text-lg text-center">
                    Oops! The page you're looking for doesn't exist.
                </p>
                <p className="text-lg text-center">
                    Back to <Link className='hover:text-cyan-500 hover:font-medium btn btn-sm'  to="/">Home</Link>
                </p>
            </div>
        </div>
    );
};

export default ErrorPage;