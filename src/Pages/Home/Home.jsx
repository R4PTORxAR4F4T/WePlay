import React from 'react';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import Banner from '../Shared/Banner/banner';
import activityCover from '/activity-banner.avif';
import instractorCover from '/Swimming-Lessons-2.jpg';
import Cover from '../Shared/Cover/Cover';
import ActivityCard from '../ActivityCard/ActivityCard';
import InstractorCard from '../InstractorCard/InstractorCard';
import { Helmet } from 'react-helmet-async';
import OurLocation from '../OurLocation/OurLocation';


const Home = () => {
    return (
        <div className='lg:w-4/6 mx-auto'>
            <Helmet>
                <title>WePlay | Home</title>
            </Helmet>
            <Header></Header>
            <Banner></Banner>
            <Cover img={activityCover} title='Popular Activity' subtitle='There is out top 6 activity which student love to join'></Cover>
            <ActivityCard></ActivityCard>
            <Cover img={instractorCover} title='Top Instractor' subtitle='There is our top Instractors'></Cover>
            <InstractorCard></InstractorCard>
            <OurLocation></OurLocation>
            <Footer></Footer>
        </div>
    );
};

export default Home;