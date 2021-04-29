import React from 'react';
import About from '../About/About';
import Footer from '../Footer/Footer';
import Introduce from '../Introduce/Introduce';
import Testimonials from '../Testimonials/Testimonials';
import TopBanner from '../TopBanner/TopBanner';
import WelcomePage from '../WelcomePage/WelcomePage';
import YogaCourses from '../YogaCourses/YogaCourses';

const Home = () => {
    return (
        <div>
            <TopBanner></TopBanner>
            <Introduce></Introduce>
            <About></About>
            <WelcomePage></WelcomePage>
            <YogaCourses></YogaCourses>
            <Testimonials></Testimonials>
            <Footer></Footer>
        </div>
    );
};

export default Home;