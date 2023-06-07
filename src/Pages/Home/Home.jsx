import React from 'react';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import Banner from '../Shared/Banner/banner';
import activityCover from '../../../public/activity-banner.avif';
import Cover from '../Shared/Cover/Cover';
import ActivityCard from '../ActivityCard/ActivityCard';

const Home = () => {
    return (
        <div className='lg:w-4/6 mx-auto'>
            <Header></Header>
            <Banner></Banner>
            <Cover img={activityCover} title='Popular Activity' subtitle='There is out top 6 activity which student love to join'></Cover>
            <ActivityCard></ActivityCard>
            <Footer></Footer>
        </div>
    );
};

export default Home;