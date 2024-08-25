import React from 'react';

function Hero() {
    return ( 
       <div className='container'>
        <div className='row text-center'>
        <img src='media/images/homeHero.png' alt='Hero Img' className='mb-5'/>
        <h1> Invest in everything</h1>
        <p className='mb-4'>Online platform to invest in stocks ,derivatives, mutual funds and more </p>
        <button className='btn btn-primary col-3 p-2 fs-5 mb-5'style={{margin:'auto'}}>Signup Now</button>

        </div>
       </div>
     );
}

export default Hero;