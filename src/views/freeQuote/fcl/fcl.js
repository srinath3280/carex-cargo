import React, { useState } from 'react';
import './fcl.css';

const Fcl = () => {
    const [formData, setFormData] = useState({
        transportMode: '',
        shipmentType: '',
        pickupLocation: '',
        deliverLocation: '',
        container: '',
        numberOfContainers: '',
        companyName: '',
        fullName: '',
        emailAddress: '',
        contactNumber: '',
        specialInstructions: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };
    return (
        <div>
            <section className='fcl'>
                <div className='fcl-heading'>
                    <h1>Quick Inquiry Form (FCL)</h1>
                </div>
            </section>
            <section>
                <div className="form-container">
                    <form onSubmit={handleSubmit}>
                        <div className="form-row">
                            <div className="form-group">
                                <label>Transport Mode</label>
                                <select name="transportMode" value={formData.transportMode} onChange={handleChange}>
                                    <option value="">--Please choose an option--</option>
                                    <option value="SEA">SEA</option>
                                    <option value="AIR">AIR</option>
                                    <option value="ROA">ROA</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Shipment Type</label>
                                <select name="shipmentType" value={formData.shipmentType} onChange={handleChange}>
                                    <option value="">--Please choose an option--</option>
                                    <option value="Door-Door">Door-Door</option>
                                    <option value="Door-Port">Door-Port</option>
                                    <option value="Port-Port">Port-Port</option>
                                    <option value="Port-Door">Port-Door</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label>Pickup From</label>
                                <input type="text" name="pickupLocation" value={formData.pickupLocation} onChange={handleChange} placeholder="Pickup Location" />
                            </div>
                            <div className="form-group">
                                <label>Deliver To</label>
                                <input type="text" name="deliverLocation" value={formData.deliverLocation} onChange={handleChange} placeholder="Deliver Location" />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label>Container (FCL)</label>
                                <select name="container" value={formData.container} onChange={handleChange}>
                                    <option value="">--Please choose an option--</option>
                                    <option value="20GP">20GP</option>
                                    <option value="40GP">40GP</option>
                                    <option value="40HC">40HC</option>
                                    <option value="Others">Others</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Number of Containers</label>
                                <select name="numberOfContainers" value={formData.numberOfContainers} onChange={handleChange}>
                                    <option value="">--Please choose an option--</option>
                                    {[...Array(10)].map((_, index) => (
                                        <option key={index + 1} value={index + 1}>{index + 1}</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label>Company Name</label>
                                <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label>Full Name</label>
                                <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label>Email Address</label>
                                <input type="email" name="emailAddress" value={formData.emailAddress} onChange={handleChange} />
                            </div>
                            <div className="form-group">
                                <label>Contact Number</label>
                                <input type="tel" name="contactNumber" value={formData.contactNumber} onChange={handleChange} />
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Special Instructions</label>
                            <textarea name="specialInstructions" value={formData.specialInstructions} onChange={handleChange}></textarea>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Fcl
