import React from 'react';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import Banner from '../Shared/Banner/banner';
import activityCover from '/activity-banner.avif';
import instractorCover from '/Swimming-Lessons-2.jpg';
import Cover from '../Shared/Cover/Cover';
import ActivityCard from '../ActivityCard/ActivityCard';
import InstractorCard from '../InstractorCard/InstractorCard';

const Home = () => {
    return (
        <div className='lg:w-4/6 mx-auto'>
            <Header></Header>
            <Banner></Banner>
            <Cover img={activityCover} title='Popular Activity' subtitle='There is out top 6 activity which student love to join'></Cover>
            <ActivityCard></ActivityCard>
            <Cover img={instractorCover} title='Top Instractor' subtitle='There is our top Instractors'></Cover>
            <InstractorCard></InstractorCard>
            <Footer></Footer>
        </div>
    );
};

export default Home;