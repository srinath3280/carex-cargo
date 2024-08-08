import React from 'react';
import './freequote.css';
import { Outlet } from 'react-router-dom';

const FreeQuote = () => {
    
    return (
        <div>
            <section className='freequote-banner'>
                <div className='freequote-banner-image'>
                    <img src='/images/request-quote-banner.jpg' alt='' />
                </div>
                <div className='freequote-banner-content'>
                    <h1>Request Rate</h1>
                </div>
            </section>
            <section className='freequote-button'>
                <div className='freequote-button-block'>
                    <a href='/free-quote/fcl-request-quote'>FCL Request Cost</a>
                    <a href='/free-quote/lcl-request-quote'>LCL Request Cost</a>
                </div>
            </section>
            <Outlet></Outlet>
        </div>
    )
}

export default FreeQuote
