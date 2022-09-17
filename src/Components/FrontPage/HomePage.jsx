import React from 'react';
import Advertisement from './Advertisement';
import Footer from './Footer';
import Home from './Home';
import Navbar from './Navbar';

const HomePage = props => {
    return (
        <div>
            <Navbar />
            <Home />
            <Advertisement />
            <Footer />
        </div>
    );
};

export default HomePage;