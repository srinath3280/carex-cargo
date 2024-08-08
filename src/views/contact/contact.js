import React, { useState } from 'react';
import './contact.css';

const Contact = () => {

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        contactNumber: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data:', formData);
    };

    return (
        <div>
            <section className='contact-banner'>
                <div className='contact-banner-image'>
                    <img src='/images/contact-banner.jpg' alt='' />
                </div>
                <div className='contact-banner-content'>
                    <h1>Contact us</h1>
                    <p>
                        Please fill in the form. We will get in touch with you asap.
                    </p>
                </div>
            </section>
            <section className='contact-content'>
                <div className='contact-content-heading'>
                    <h1>Offices</h1>
                    <p>
                        We’re just around the corner
                    </p>
                </div>
                <div className='contact-content-info1'>
                    <div className='contact-content-info1-left'>
                        <h2>HEAD OFFICE</h2>
                        <div className='contact-content-info1-left-content'>
                            <img src='/images/newdelhi.webp' alt='' />
                            <h3>New Delhi</h3>
                            <div>
                                <i class="bi bi-geo-alt"></i><br />
                                <span>
                                    New No: 192, Old No: 237, 2nd Floor,<br />
                                    Thambu Chetty Street, Mannady,<br />
                                    New Delhi – 110001.
                                </span>
                            </div>
                            <div>
                                <i class="bi bi-telephone"></i><br />
                                <span>
                                    +91 9111222330
                                </span>
                            </div>
                            <div>
                                <i class="bi bi-envelope-at"></i><br />
                                info@carex.in
                            </div>
                        </div>
                    </div>
                    <div className='contact-content-info1-right'>
                        <div>
                            <h2>Contact Info</h2>
                            <span>Sales : info@carex.in</span>
                        </div>
                        <div>
                            <h2>Social Info</h2>
                            <div className='contact-content-info1-right-icons'>
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
                        <div>
                            <h2>Working Hour's</h2>
                            <span>
                                Monday 09:30 AM - 07:00 PM <br />
                                Tuesday 09:30 AM - 07:00 PM<br />
                                Wednesday 09:30 AM - 07:00 PM<br />
                                Thursday 09:30 AM - 07:00 PM<br />
                                Friday 09:30 AM - 07:00 PM<br />
                                Saturday 09:30 AM - 07:00 PM<br />
                                Sunday 00:00 AM - 00:00 PM<br />
                            </span>
                        </div>
                    </div>
                </div>

                <div className='contact-content-info2'>
                    <h2>BRANCH OFFICE</h2>
                    <div className='contact-content-info2-blocks'>
                        <div className='contact-content-info2-blocks-1'>
                            <img src='/images/bangalore.jpg' alt='' />
                            <h3>Bangalore</h3>
                            <div>
                                <i class="bi bi-geo-alt"></i><br />
                                <span>
                                    No 112/2, Hebbal main road,<br />
                                    2nd floor, Hebbal<br />
                                    Bangalore-560 037, India.
                                </span>
                            </div>
                            <div>
                                <i class="bi bi-telephone"></i><br />
                                <span>
                                    +91 9111222334
                                </span>
                            </div>
                            <div>
                                <i class="bi bi-envelope-at"></i><br />
                                info@carex.in
                            </div>
                        </div>

                        <div className='contact-content-info2-blocks-1'>
                            <img src='/images/hydearbad.webp' alt='' />
                            <h3>Hyderabad</h3>
                            <div>
                                <i class="bi bi-geo-alt"></i><br />
                                <span>
                                    Block-1 011, Ground Floor, <br />
                                    Near Ameerpet metro station, <br />
                                    Beside KLM fasions, Hyderabad, <br />
                                    Hyderabad-500016, India.
                                </span>
                            </div>
                            <div>
                                <i class="bi bi-telephone"></i><br />
                                <span>
                                    +91 9111222332
                                </span>
                            </div>
                            <div>
                                <i class="bi bi-envelope-at"></i><br />
                                info@carex.in
                            </div>
                        </div>

                        <div className='contact-content-info2-blocks-1'>
                            <img src='/images/mumbai.webp' alt='' />
                            <h3>Mumbai</h3>
                            <div>
                                <i class="bi bi-geo-alt"></i><br />
                                <span>
                                    Ebenezer Mansion, I Block First Floor,<br />
                                    97G/H, Palai Road, Teachers Colony Junction,<br />
                                    Mumbai-420003, India<br />
                                </span>
                            </div>
                            <div>
                                <i class="bi bi-telephone"></i><br />
                                <span>
                                    +91 9111222339
                                </span>
                            </div>
                            <div>
                                <i class="bi bi-envelope-at"></i><br />
                                info@carex.in
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='contact-form'>
                <div className='contact-form-heading'>
                    <h1>Schedule a meeting with our Expert</h1>
                </div>
                <div className='contact-form-info'>
                    <form className="form-container1" onSubmit={handleSubmit}>
                        <div className="form-row">
                            <input
                                type="text"
                                name="fullName"
                                placeholder="Full name"
                                value={formData.fullName}
                                onChange={handleChange}
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email address"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-row">
                            <input
                                type="text"
                                name="contactNumber"
                                placeholder="Contact Number"
                                value={formData.contactNumber}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-row">
                            <input
                                type="text"
                                name="subject"
                                placeholder="Subject"
                                value={formData.subject}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-row">
                            <textarea
                                name="message"
                                placeholder="Message"
                                value={formData.message}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-row">
                            <button type="submit">Send Request</button>
                        </div>
                    </form>
                </div>
            </section>

            <section className='contact-map'>
                <div className='contact-map-pointer'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d7009.169148310637!2d77.13046267088622!3d28.55220387030598!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDMzJzA2LjAiTiA3N8KwMDcnNTYuMCJF!5e0!3m2!1sen!2sin!4v1723104091669!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='CareX cargo'></iframe>
                </div>
            </section>
        </div>
    )
}

export default Contact
