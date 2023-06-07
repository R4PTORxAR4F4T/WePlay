import React from 'react';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import Banner from '../Shared/Banner/banner';

const Home = () => {
    return (
        <div className='lg:w-4/6 mx-auto'>
            <Header></Header>
            <Banner></Banner>
            <Footer></Footer>
        </div>
    );
};

export default Home;