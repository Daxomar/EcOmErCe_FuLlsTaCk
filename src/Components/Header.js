import React from 'react';

const Header = () => {
    return (
        <header id="header">
            <a href="#header">LINDA KULEVOME</a> {/* Replace with logo */}
            <nav>
                <ul id="navbar">
                    <li><a className="active" href="ecommerce.html">Home</a></li>
                    <li><a href="shopindex.html" target="_blank">Shop</a></li>
                    <li><a href="blog.html">Blog</a></li>
                    <li><a href="about.html">About</a></li>
                    <li><a href="contact.html">Contact</a></li>
                    <li><a href="cart.html"><i className="fa fa-shopping-cart" aria-hidden="true"></i></a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;