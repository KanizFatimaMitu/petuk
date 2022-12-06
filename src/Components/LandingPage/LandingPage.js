import React from 'react';
import Cards from '../LandingItems/Cards';
import Category from '../LandingItems/Category';
import ChefCard from '../LandingItems/ChefCard';
import Delivery from '../LandingItems/Delivery';
import Introduction from '../LandingItems/Introduction';
import Footer from '../Shared/Footer';
import Navbar from '../Shared/Navbar';

const LandingPage = () => {
    return (
        <div>
            <Introduction></Introduction>
            <Category></Category>
            <ChefCard></ChefCard>
            <Cards></Cards>
            <Delivery></Delivery>
            <Footer></Footer>
        </div>
    );
};

export default LandingPage;