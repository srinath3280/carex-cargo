import React, { useState } from 'react';
import './home.css';
import HomeProjectCarousel from './homeProjects/homeprojectcarousel';
import HomeReviewsCarousel from './homeReviews/homeReviews';

const Home = () => {

    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqData = [
        {
            question: 'What services does CAREX cargo offer?',
            answer: 'CAREX cargo offers a comprehensive range of logistics services including freight forwarding, customs clearance, warehousing, transportation, Export & Import and supply chain solutions.'
        },
        {
            question: 'How can I track my shipment?',
            answer: 'You can track your shipment by using our online tracking tool on our website. Enter your tracking number provided at the time of booking to get real-time updates on the status of your shipment.'
        },
        {
            question: 'What regions does CAREX cargo operate in?',
            answer: 'We operate globally, offering logistics services across major international and domestic routes. Whether you need shipments delivered locally or across continents, we have the capability to meet your logistics needs.'
        },
        {
            question: 'Does CAREX cargo provide customs clearance services?',
            answer: 'Yes, we offer customs clearance services as part of our comprehensive logistics solutions. Our experienced team can handle all necessary customs documentation and procedures to ensure smooth clearance of your shipments.'
        },
        {
            question: 'What types of cargo does CAREX cargo handle?',
            answer: 'CAREX cargo handles various types of cargo including general cargo, perishable goods, hazardous materials (subject to regulations), oversized shipments, and more. We provide specialized handling based on the nature of your cargo.'
        }
    ];

    return (
        <div>
            {/* Image */}
            <section className='home'>
                <div className='home-image'>
                    {/* <img src='/images/allways.jpg' alt='' /> */}
                    <img src='/images/allways1.avif' alt='' />
                </div>
                <div className='home-image-content'>
                    <div className='home-image-content-box'>
                        <h1>Delivering excellence from <br /> origin to destination.</h1>
                        <p>
                            CareX Is A Trusted Logistics Company For Global<br />
                            Customs Clearance
                        </p>
                        <a href='/'>GET FREE QUOTE</a>
                        <a href='/'>CONTACT US</a>
                    </div>
                </div>
            </section>

            {/* Projects */}
            <section className='home-projects'>
                <div className='home-projects-heading'>
                    <h1>OUR PROJECTS</h1>
                </div>
                <div>
                    <HomeProjectCarousel></HomeProjectCarousel>
                </div>
            </section>

            {/* Services */}
            <section className='home-services'>
                <div className='home-services-heading'>
                    <h1>OUR DELIVERING SERVICES</h1>
                    <p>
                        YOUR TRUSTED BEST LOGISTICS COMPANY IN CHENNAI
                    </p>
                </div>
                <div className='home-services-content'>
                    <div className='home-services-content-1'>
                        <div className='home-services-content-1-icon'>
                            <i class="bi bi-airplane"></i>
                        </div>
                        <div className='home-services-content-1-info'>
                            <h3>Air Freight</h3>
                            <p>
                                We are one of the Leading Global Air Freight Forwarder with a Global Network.
                            </p>
                            <a href='/'>GET QUOTE</a>
                        </div>
                    </div>
                    <div className='home-services-content-1'>
                        <div className='home-services-content-1-icon'>
                            <i class="bi bi-truck"></i>
                        </div>
                        <div className='home-services-content-1-info'>
                            <h3>Transportation</h3>
                            <p>
                                Sometimes goods can arrive early when they are being brought into the country.
                            </p>
                            <a href='/'>GET QUOTE</a>
                        </div>
                    </div>
                    <div className='home-services-content-1'>
                        <div className='home-services-content-1-icon'>
                            <i class="bi bi-train-front"></i>
                        </div>
                        <div className='home-services-content-1-info'>
                            <h3>Train Freight</h3>
                            <p>
                                We have Experienced Train Freight Forwarder team to handle Train Shipments.
                            </p>
                            <a href='/'>GET QUOTE</a>
                        </div>
                    </div>
                    <div className='home-services-content-1'>
                        <div className='home-services-content-1-icon'>
                            <i class="bi bi-headset"></i>
                        </div>
                        <div className='home-services-content-1-info'>
                            <h3>Customs Clearance</h3>
                            <p>
                                We EasyWay Logistics with the day-to-day updated knowledge on the Customs procedures.
                            </p>
                            <a href='/'>GET QUOTE</a>
                        </div>
                    </div>
                    <div className='home-services-content-1'>
                        <div className='home-services-content-1-icon'>
                            <i class="bi bi-house-door"></i>
                        </div>
                        <div className='home-services-content-1-info'>
                            <h3>Warehousing</h3>
                            <p>
                                Easyway provides dedicated and shared warehousing services and distribution operations to ensure that you can deliver.
                            </p>
                            <a href='/'>GET QUOTE</a>
                        </div>
                    </div>
                    <div className='home-services-content-1'>
                        <div className='home-services-content-1-icon'>
                            <i class="bi bi-diagram-2"></i>
                        </div>
                        <div className='home-services-content-1-info'>
                            <h3>Third Party Logistics</h3>
                            <p>
                                We’re committed to providing professional third party logistics services for small businesses to large enterprises.
                            </p>
                            <a href='/'>GET QUOTE</a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Industries */}
            <section className='home-industries'>
                <div className='home-industries-heading'>
                    <h1>OUR INDUSTRIES SERVICES</h1>
                </div>
                <div className='home-industries-content'>
                    <div className='home-industries-content-1'>
                        <img src='/images/homeIndustries/industries1.webp' alt='' />
                        <h4>Automotive Logistics Services</h4>
                    </div>
                    <div className='home-industries-content-1'>
                        <img src='/images/homeIndustries/industries2.webp' alt='' />
                        <h4>Retail Logistics</h4>
                    </div>
                    <div className='home-industries-content-1'>
                        <img src='/images/homeIndustries/industries3.webp' alt='' />
                        <h4>Technology & Electronics Logistics</h4>
                    </div>
                    <div className='home-industries-content-1'>
                        <img src='/images/homeIndustries/industries5.webp' alt='' />
                        <h4>Manufacturing Logistics</h4>
                    </div>
                    <div className='home-industries-content-1'>
                        <img src='/images/homeIndustries/industries4.webp' alt='' />
                        <h4>Construction Logistics</h4>
                    </div>
                </div>
            </section>

            {/* Why choose careX */}
            <section className='home-whychoose'>
                <div className='home-whychoose-heading'>
                    <h1>WHY CHOOSE CAREX CARGO SERVICES</h1>
                    <p>We're dedicated to customers and focused on quality</p>
                </div>
                <div className='home-whychoose-content'>
                    <div className='home-whychoose-content-1'>
                        <div className='home-whychoose-content-1-image'>
                            <img src='/images/whychoose/whychoose1.png' alt='' />
                        </div>
                        <div className='home-whychoose-content-1-info'>
                            <h3>RELIABLE</h3>
                            <p>
                                With much competitive rates, EasyWay offers the best services for all your international freight forwarding across the globe.
                            </p>
                        </div>
                    </div>
                    <div className='home-whychoose-content-1'>
                        <div className='home-whychoose-content-1-image'>
                            <img src='/images/whychoose/whychoose2.png' alt='' />
                        </div>
                        <div className='home-whychoose-content-1-info'>
                            <h3>GREAT PRICES</h3>
                            <p>
                                With the dedicated Customs Clearance team, all your cargoes can be cleared with easier and faster and of course with much competitive rates.
                            </p>
                        </div>
                    </div>
                    <div className='home-whychoose-content-1'>
                        <div className='home-whychoose-content-1-image'>
                            <img src='/images/whychoose/whychoose3.png' alt='' />
                        </div>
                        <div className='home-whychoose-content-1-info'>
                            <h3>FLEXIBLE WORK HOURS</h3>
                            <p>
                                The majority of logistical activity takes place outside of normal office hours. allowing them much more freedom and flexibility
                            </p>
                        </div>
                    </div>
                    <div className='home-whychoose-content-1'>
                        <div className='home-whychoose-content-1-image'>
                            <img src='/images/whychoose/whychoose4.png' alt='' />
                        </div>
                        <div className='home-whychoose-content-1-info'>
                            <h3>NETWORKS</h3>
                            <p>
                                Our strong network can help deliver your cargo by leveraging our knowledge of the shortest and most efficient routes.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Customer reviews */}
            <section className='home-reviews'>
                <div className='home-reviews-heading'>
                    <h1>WHAT OUR CUSTOMERS SAY</h1>
                    <p>
                        Safety, quality and professionalism in performance
                    </p>
                </div>
                <div className='home-reviews-contnet'>
                    <HomeReviewsCarousel></HomeReviewsCarousel>
                </div>
            </section>

            {/* Blogs */}
            <section className='home-blogs'>
                <div className='home-blogs-heading'>
                    <h1>LATEST BLOG</h1>
                </div>
                <div className='home-blogs-contnet'>
                    <div className='home-blogs-contnet-1'>
                        <div className='home-blogs-contnet-1-image'>
                            <img src='/images/homeBlogs/blog1.jfif' alt='' />
                        </div>
                        <div className='home-blogs-contnet-1-info'>
                            <span>
                                <i class="bi bi-calendar"></i>
                                August 6, 2024
                            </span>
                            <span>
                                <i class="bi bi-person-circle"></i>
                                by Jay
                            </span>
                            <h6>
                                How Easyway Logistics Manages International Cargo Challenges in Chennai...
                            </h6>
                        </div>
                    </div>
                    <div className='home-blogs-contnet-1'>
                        <div className='home-blogs-contnet-1-image'>
                            <img src='/images/homeBlogs/blog2.jpg' alt='' />
                        </div>
                        <div className='home-blogs-contnet-1-info'>
                            <span>
                                <i class="bi bi-calendar"></i>
                                July 24, 2024
                            </span>
                            <span>
                                <i class="bi bi-person-circle"></i>
                                by Jay
                            </span>
                            <h6>
                                Why Choose Easyway Logistics for Break Bulk Cargo Services?
                            </h6>
                        </div>
                    </div>
                    <div className='home-blogs-contnet-1'>
                        <div className='home-blogs-contnet-1-image'>
                            <img src='/images/homeBlogs/blog3.webp' alt='' />
                        </div>
                        <div className='home-blogs-contnet-1-info'>
                            <span>
                                <i class="bi bi-calendar"></i>
                                July 20, 2024
                            </span>
                            <span>
                                <i class="bi bi-person-circle"></i>
                                by Jay
                            </span>
                            <h6>
                                Comparing Private vs. Public Warehousing: Which Is Right for You?
                            </h6>
                        </div>
                    </div>
                    <div className='home-blogs-contnet-1'>
                        <div className='home-blogs-contnet-1-image'>
                            <img src='/images/homeBlogs/blog4.jpg' alt='' />
                        </div>
                        <div className='home-blogs-contnet-1-info'>
                            <span>
                                <i class="bi bi-calendar"></i>
                                July 13, 2024
                            </span>
                            <span>
                                <i class="bi bi-person-circle"></i>
                                by Jay
                            </span>
                            <h6>
                                Exploring the Benefits of Domestic Logistics Services in Chennai
                            </h6>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ's */}
            <section className='home-faq'>
                <div className='home-faq-heading'>
                    <h1>Frequently Asked Questions (FAQs)</h1>
                </div>
                <div className="faq-container">
                    {faqData.map((faq, index) => (
                        <div key={index} className="faq-item">
                            <div className="faq-question" onClick={() => toggleFAQ(index)}>
                                <span>{faq.question}</span>
                                <span>{openIndex === index ? '-' : '+'}</span>
                            </div>
                            {openIndex === index && <div className="faq-answer">{faq.answer}</div>}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default Home
