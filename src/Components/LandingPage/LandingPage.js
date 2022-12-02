import React from 'react';
import Cards from '../LandingItems/Cards';
import Category from '../LandingItems/Category';
import Introduction from '../LandingItems/Introduction';
import Navbar from '../Shared/Navbar';

const LandingPage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Introduction></Introduction>
            <Category></Category>
            <Cards></Cards>
        </div>
    );
};

export default LandingPage;