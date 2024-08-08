import React from 'react';
import './footer.css';

const Footer = () => {
    return (
        <div className='footer'>
            <section className='footer-block1'>
                <div className='footer-block1-links'>
                    <div className='footer-block1-links-logo'>
                        <img src='/images/carex-logo.png' alt='' />
                    </div>
                    <div className='footer-block1-links-service'>
                        <h1>Services</h1>
                        <a href='/'>Freight Forwarder Services</a><br />
                        <a href='/'>Customs House Agent</a><br />
                        <a href='/'>Transportation Services</a><br />
                        <a href='/'>Warehouse Service</a><br />
                        <a href='/'>Third party Logistics Service</a><br />
                        <a href='/'>Domestic and Coastal Container Service</a><br />
                        <a href='/'>Import Consolidation</a><br />
                    </div>
                    <div className='footer-block1-links-companies'>
                        <h1>Companies</h1>
                        <a href='/'>Services</a><br />
                        <a href='/'>About us</a><br />
                        <a href='/'>Contact us</a><br />
                        <a href='/'>Get a Quote</a><br />
                        <a href='/'>Founder</a><br />
                        <a href='/'>Our Team</a><br />
                        <a href='/'>Mission and Vision</a><br />
                        <a href='/'>History</a><br />
                        <a href='/'>FAQ</a><br />
                        <a href='/'>Privacy Policy</a><br />
                    </div>
                    <div className='footer-block1-links-location'>
                        <h1>Location Service</h1>
                        <span>Customs House Agent in Delhi</span><br />
                        <span>Air Freight Forwarder in Mumbai</span><br />
                        <span>Customs House Agent in Bangalore</span><br />
                        <span>Customs House Agent in Hyderabad</span><br />
                        <span>Customs House Agent in Tuticorin</span><br />
                        <span>Freight forwarder in Mumbai</span><br />
                        <span>Customs House Agent in Chennai</span><br />
                    </div>
                </div>
            </section>
            <section className='footer-block2'>
                <div className='footer-block2-location'>
                    <div className='footer-block2-location-info'>
                        <h1>New Delhi</h1>
                        <p>
                            192, Old No: 237, Second Floor, <br />
                            Thambu Chetty Street, Mannady, <br />
                            Opp to Delhi public school, New Delhi, <br />
                            New Delhi-110001, India.
                        </p>
                        <p>
                            Mobile: +91 9111222330
                        </p>
                        <p>
                            Email: info@carex.in
                        </p>
                    </div>
                    <div className='footer-block2-location-info'>
                        <h1>Bangalore</h1>
                        <p>
                            No 112/2, Hebbal main road,<br />
                            2nd floor, Hebbal<br />
                            Bangalore-560 037, India.
                        </p>
                        <p>
                            Mobile: +91 9111222334
                        </p>
                        <p>
                            Email: info@carex.in
                        </p>
                    </div>
                    <div className='footer-block2-location-info'>
                        <h1>Hyderabad</h1>
                        <p>
                            Block-1 011, Ground Floor, <br />
                            Near Ameerpet metro station, <br />
                            Beside KLM fasions, Hyderabad, <br />
                            Hyderabad-500016, India.
                        </p>
                        <p>
                            Mobile: +91 9111222332
                        </p>
                        <p>
                            Email: info@carex.in
                        </p>
                    </div>
                    <div className='footer-block2-location-info'>
                        <h1>Mumbai</h1>
                        <p>
                            Ebenezer Mansion,
                            I Block First Floor,
                            97G/H, Palai Road,
                            Teachers Colony Junction,
                            Mumbai-420003, India
                        </p>
                        <p>
                            Mobile: +91 9111222339
                        </p>
                        <p>
                            Email: info@carex.in
                        </p>
                    </div>
                </div>
            </section>
            <section className='footer-block3'>
                <div className='footer-block3-social'>
                    <div className='footer-block3-social-left'>
                        <p>
                            Network :
                            <a href='/'> New Delhi, </a>
                            <a href='/'>Mumbai, </a>
                            <a href='/'>Hyderabad, </a>
                            <a href='/'>Bangalore, </a>
                            <a href='/'>Chennai, </a>
                            etc.,
                        </p>
                    </div>
                    <div className='footer-block3-social-right'>
                        <div>
                            <i class="bi bi-facebook"></i>
                        </div>
                        <div>
                            <i class="bi bi-instagram"></i>
                        </div>
                        <div>
                            <i class="bi bi-whatsapp"></i>
                        </div>
                        <div>
                            <i class="bi bi-twitter"></i>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Footer
