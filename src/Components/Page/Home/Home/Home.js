import React from 'react';
import About from '../../Home/About/About';
import Banner from '../../Home/Banner/Banner';
import Services from '../../Home/Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
           <Services></Services>
        </div>
    );
};

export default Home;