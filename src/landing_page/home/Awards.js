import React from 'react';

function Awards() {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6'>
                <img src='media/images/largestBroker.svg' alt='broker'/>
                </div>
                <div className='col-6 mt-3'>
                    <h2>Largest stock broker in India</h2>
                    <p>2+ million Zerodha clients contribute to over 15% of all retail order volumes in india daily by trading and investing in: </p>
                    <div className='row '>
                        <div className='col-6'>
                        <ul >
                            <li><p>Future and Options</p></li>
                            <li><p>Commodity derivatives</p></li>
                            <li><p>Currency derivatives</p></li>
                        </ul>
                        </div>
                        <div className='col-6'>
                        <ul >
                            <li><p>Stocks & IPOs</p></li>
                            <li><p>Direct mutual funds</p></li>
                            <li><p>Bonds and Government securities</p></li>

                        </ul>
                        </div>
                    </div>
                    <img src='media/images/pressLogos.png' alt='Press Logos' style={{width:"90%"}}/>
                </div>

            </div>
        </div>
     );
}

export default Awards;