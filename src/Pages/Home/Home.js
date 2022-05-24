import React from 'react';
import Footer from '../Shared/Footer';
import AskUs from './AskUs';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Reviews from './Reviews';
import Tools from './Tools';
import WhyChooseUs from './WhyChooseUs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Tools></Tools>
            <BusinessSummary></BusinessSummary>
            <WhyChooseUs></WhyChooseUs>
            <Reviews></Reviews>
            <AskUs></AskUs>
            
            <Footer></Footer>
        </div>
    );
};

export default Home;