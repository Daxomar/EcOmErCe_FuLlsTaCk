import React from 'react';

const Footer = () => {
    return (
        <footer id="foot" className="section-m1">
            <div className="col m1">
                <h2>Lindan kulevome</h2>
                <h4>Contact</h4>
                <p><strong>Address:</strong> Central University College (CUC) P.O. Box 2305. Tema - Ghana</p>
                <p><strong>Phone:</strong>+233 548477514</p>
                <p><strong>Hours:</strong>10:00am - 18:00pm, Mon - Fri</p>
                <div className="socialmedia-logos">
                    <h4>Follow us</h4>
                    <i className="fa-brands fa-instagram"></i>
                    <i className="fa-brands fa-whatsapp"></i>
                    <i className="fa-brands fa-telegram"></i>
                </div>
            </div>

            <div className="col">
                <h3>About</h3>
                {/* <a href="#" target="_blank">About us</a>
                <a href="#" target="_blank">Delivery Information</a>
                <a href="#" target="_blank">Privacy Policy</a>
                <a href="#" target="_blank">Terms & Conditions</a>
                <a href="#" target="_blank">Contact Us</a> */}
            </div>

            <div className="col">
                <h3>My Account</h3>
                {/* <a href="#" target="_blank">Sign In</a>
                <a href="#" target="_blank">View Cart</a>
                <a href="#" target="_blank">My Wishlist</a>
                <a href="#" target="_blank">Track My Order</a>
                <a href="#" target="_blank">Help</a> */}
            </div>

            <div className="col install">
                <h4>Install App</h4>
                <p>From App Store or Google Play</p>
                <div className="row">
                    {/* <img src="Ecommerce_img/AppleStoreLogo.png" alt="App Store" width="105" height="37" />
                    <img src="Ecommerce_img/Googleplaylogo.png" alt="Google Play" width="105" height="37" /> */}
                </div>
                <p>Secured Payment Gateways</p>
                {/* <img src="Ecommerce_img/foreignPaymentmethods.png" alt="Payment Methods" width="157" height="55.5" />
                <img src="Ecommerce_img/localPaymentMethods.png" alt="Local Payment Methods" width="157" height="55.5" /> */}
            </div>

            <div className="copyright">
                <p>@2024 David Chukwurah. All rights reserved</p>
            </div>
        </footer>
    );
};

export default Footer;