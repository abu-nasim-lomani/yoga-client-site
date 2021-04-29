import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="container">
            <div className="row mt-5">
                <div className="col-md-3 col-sm-12 m-auto">
                    <div>
                        <h2>Follow Me on</h2>
                        <div className='text-center'>
                            <h5>Facebook</h5>
                            <h5>Twitter</h5>
                            <h5>Instagram</h5>
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12 text-center  m-auto">
                    <h2>News letter</h2>
                    <p>Sign up to get your Exclusive offers</p>
                    <div className="news-letter m-auto">
                        <input type="text" placeholder="You e-mail" /><i className="fa fa-arrow-right"></i>
                    </div>
                </div>
                <div className="col-md-3 col-sm-12 m-auto">
                    <div>
                        <h2>Information</h2>
                        <div className='text-center'>
                            <h5>Privacy Policy</h5>
                            <h5>Shipping & Returns</h5>
                            <h5>Contact</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;