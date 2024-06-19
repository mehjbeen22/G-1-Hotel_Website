import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import appImg1 from '../Images/app.jpg';
import appImg2 from '../Images/app.jpg';
import appImg3 from '../Images/app.jpg';
import styled from 'styled-components';



const SignBtn = styled.button`
  background-color: green;
  color: white;
  border: none;
  padding: 2px;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 10px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #003322;
  }
`;

function FooterCom() {
    const [email, setEmail] = useState('');

    const handleSubmit = () => {
        if (email === '') {
            alert("Please enter an email address.");
        } else {
            alert("Sign Up Successful");
        }
    }

    return (
        <footer className='footer-container bg-dark text-light pt-5'>
            <div className='container'>
                <div className='row newsletter mb-4'>
                    <div className='col-md-8'>
                        <h3>Sign Up For Newsletter</h3>
                        <p>Get E-mail updates about our latest hotel offers and <span className="text-warning">special deals</span></p>
                    </div>
                    <div className='col-md-4 d-flex align-items-center'>
                        <input
                            type='email'
                            className='form-control me-2'
                            placeholder='Your Email Address...'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <SignBtn onClick={handleSubmit}>Sign Up</SignBtn>
                    </div>
                </div>

                <div className='row section-p1'>
                    <div className='col-md-3 mb-4'>
                        <h4>Contact</h4>
                        <p><strong>Address: </strong>Hotel StayEase, Mumbai, India</p>
                        <p><strong>Phone:</strong> +91 234 567 8900</p>
                        <p><strong>Hours:</strong> 24/7</p>
                        <div className="follow">
                            <h4>Follow Us</h4>
                            <div className="icon">
                                <a href="https://www.facebook.com/" className="fa fa-facebook-square text-light me-2" aria-hidden="true"></a>
                                <a href="https://www.instagram.com/" className="fa fa-instagram text-light me-2" aria-hidden="true"></a>
                                <a href="https://twitter.com/" className="fa fa-twitter-square text-light me-2" aria-hidden="true"></a>
                                <a href="https://www.pinterest.com/" className="fa fa-pinterest-p text-light me-2" aria-hidden="true"></a>
                                <a href="https://www.youtube.com/" className="fa fa-youtube-play text-light" aria-hidden="true"></a>
                            </div>
                        </div>
                    </div>
                    
                    <div className='col-md-3 mb-4'>
                        <h4>About</h4>
                        <a href="#" className='text-light d-block mb-2'>About Us</a>
                        <a href="#" className='text-light d-block mb-2'>Our Story</a>
                        <a href="#" className='text-light d-block mb-2'>Privacy Policy</a>
                        <a href="#" className='text-light d-block mb-2'>Terms & Conditions</a>
                        <a href="#" className='text-light d-block mb-2'>Contact Us</a>
                    </div>
                    
                    <div className='col-md-3 mb-4'>
                        <h4>Customer Service</h4>
                        <a href="#" className='text-light d-block mb-2'>Help Center</a>
                        <a href="#" className='text-light d-block mb-2'>FAQs</a>
                        <a href="#" className='text-light d-block mb-2'>Cancellation Policy</a>
                        <a href="#" className='text-light d-block mb-2'>Accessibility</a>
                        <a href="#" className='text-light d-block mb-2'>Contact Support</a>
                    </div>
                    
                    <div className='col-md-3 install mb-4'>
                        <h4>Install Our App</h4>
                        <p>From App Store or Google Play</p>
                        <div className='row mb-2'>
                            <div className='col'>
                                <img src={appImg1} className='img-fluid' alt="App Store" />
                            </div>
                            <div className='col'>
                                <img src={appImg2} className='img-fluid' alt="Google Play" />
                            </div>
                        </div>
                        <p>Secured Payment Gateways</p>
                        <img src={appImg3} className='img-fluid' alt="Payment Gateways" />
                    </div>
                </div>
                
                <div className='text-center pt-3 border-top mt-4'>
                    <p className='mb-0'>© 2024, Your Hotel Name</p>
                </div>
            </div>
        </footer>
    );
}

export default FooterCom;
