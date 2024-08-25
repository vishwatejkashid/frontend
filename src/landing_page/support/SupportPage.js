import React from 'react';
import Navbar from '../Navbar';
import CreateTicket from './CreateTicket';
import Hero from './Hero';
import Footer from '../Footer';

function SupportPage() {
    return ( 
        <>
            <Navbar/>
            <CreateTicket/>
            <Hero/>
            <Footer/>
        </>
       
     );
}

export default SupportPage;