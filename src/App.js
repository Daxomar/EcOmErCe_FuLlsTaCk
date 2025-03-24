import foreignPaymentMethods from './Ecommerce_img/foreignPaymentmethods.png'; 
import React from 'react';

const App = () => {
    // Data for featured products
    const featuredProducts = [
        { img: ".src/Ecommerce_img/photo_2024-03-02_02-34-30.jpg", name: "White Corset", price: "₵ 35", link: "productsfolder/White_corset.html" },
        { img: ".src/Ecommerce_img/photo_2024-03-02_02-34-31.jpg", name: "Turtle Neck", price: "₵ 65", link: "productsfolder/Turtle_neck.html" },
        { img: ".src/Ecommerce_img/photo_2024-03-02_02-34-32.jpg", name: "", price: "₵ 90", link: "#" },
        { img: ".src/Ecommerce_img/photo_2024-03-02_02-34-33.jpg", name: "Men's Shirt", price: "₵ 35", link: "productsfolder/Menshirt.html" },
        { img: ".src/Ecommerce_img/photo_2024-03-02_02-34-34 (2).jpg", name: "Black Corset", price: "₵ 35", link: "productsfolder/Black_corset.html" },
        { img: ".src/Ecommerce_img/photo_2024-03-02_02-34-34.jpg", name: "Night wear", price: "₵ 95", link: "productsfolder/Night_wear.html" },
        { img: ".src/Ecommerce_img/photo_2024-03-02_02-34-36 (2).jpg", name: "Burayiss", price: "₵ 46", link: "productsfolder/Buraysis.html" },
        { img: ".src/Ecommerce_img/photo_2024-03-02_02-34-39 (2).jpg", name: "Hoodie", price: "₵ 65", link: "productsfolder/Hoodie.html" },
        { img: ".src/Ecommerce_img/photo_2024-03-02_02-34-41.jpg", name: "", price: "₵ 55", link: "#" },
        { img: ".src/Ecommerce_img/photo_2024-03-02_02-34-42.jpg", name: "", price: "₵ 200", link: "#" },
        { img: ".src/Ecommerce_img/photo_2024-03-02_02-34-43 (2).jpg", name: "Mickey Mouse Top", price: "₵ 46", link: "productsfolder/Mickey_Mouse_Top.html" },
        { img: ".src/Ecommerce_img/photo_2024-03-02_02-34-46.jpg", name: "Wine Corianda", price: "₵ 70", link: "productsfolder/Wine_Corianda.html" },
    ];

    // Data for new arrivals
    const newArrivals = [
        { img: ".src/Ecommerce_img/photo_2024-03-01_15-55-46 (3).jpg", name: "", price: "$$$", link: "#" },
        { img: ".src/Ecommerce_img/photo_2024-03-01_15-55-46 (4).jpg", name: "White heels", price: "₵ 65", link: "#" },
        { img: ".src/Ecommerce_img/photo_2024-03-02_17-22-26 (2).jpg", name: "Men's Set", price: "₵ 130", link: "#" },
        { img: ".src/Ecommerce_img/photo_2024-03-01_15-55-47.jpg", name: "Pink ladies heel", price: "₵ 70", link: "#" },
        { img: ".src/Ecommerce_img/photo_2024-03-02_17-22-27.jpg", name: "Hydro Flask", price: "₵ 35", link: "#" },
        { img: ".src/Ecommerce_img/photo_2024-03-01_15-55-49 (2).jpg", name: "Green Sneakers", price: "₵ 200", link: "#" },
        { img: ".src/Ecommerce_img/photo_2024-03-02_17-22-28 (2).jpg", name: "Dear Perfume", price: "₵ 50", link: "#" },
        { img: ".src/Ecommerce_img/photo_2024-03-02_17-22-26.jpg", name: "Toaster", price: "₵ 100", link: "productsfolder/Toaster.html" },
        { img: ".src/Ecommerce_img/photo_2024-03-01_15-55-49 (5).jpg", name: "Pink heels", price: "₵ 83", link: "#" },
        { img: ".src/Ecommerce_img/photo_2024-03-02_17-22-29.jpg", name: "Electric Cooker", price: "₵ 110", link: "#" },
        { img: ".src/Ecommerce_img/photo_2024-03-02_17-22-27 (2).jpg", name: "Posture Corrector (Men)", price: "₵ 50", link: "#" },
        { img: ".src/Ecommerce_img/photo_2024-03-02_17-22-30.jpg", name: "Blender", price: "₵ 120", link: "#" },
    ];

    return (
        <main>
            {/* Header Section */}
            <header id="header">
                <a href="#header">LINDA KULEVOME</a>
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

            {/* Hero Section */}
            <section className="hero">
                <h4>Trade-in-offer</h4>
                <h2>Super Value deals</h2>
                <h1>On all products</h1>
                <p style={{ color: '#eee' }}>Save more with low delivery fees!!</p>
                <button>Shop Now</button>
            </section>

            {/* Feature Section */}
            <section id="feature" className="section-p1 section-pad">
                {[
                    { img: ".src/Ecommerce_img/Screenshot 2024-04-22 004924.png", title: "Affordable shipping" },
                    { img: ".src/Ecommerce_img/Screenshot 2024-04-22 011854.png", title: "Online ordering" },
                    { img: ".src/Ecommerce_img/Screenshot 2024-04-22 005549.png", title: "Promotions" },
                    { img: ".src/Ecommerce_img/Screenshot 2024-04-22 005711.png", title: "Save Money" },
                    { img: ".src/Ecommerce_img/Screenshot 2024-04-22 005922.png", title: "Customer support" },
                ].map((feature, index) => (
                    <div className="feature-box" key={index}>
                        <img src={feature.img} alt={feature.title} width="250" height="195" />
                        <h6>{feature.title}</h6>
                    </div>
                ))}
            </section>

            {/* Featured Products Section */}
            <section id="product1" className="section-pad">
                <h2>Featured Products</h2>
                <p>2024 Collections New and cheaper</p>
                <div className="product-container">
                    {featuredProducts.map((product, index) => (
                        <div className="pro-box" key={index}>
                            <a href={product.link}>
                                <img src={product.img} alt={product.name} />
                            </a>
                            <div className="description">
                                <h5>{product.name}</h5>
                                <div className="star">
                                    {[...Array(5)].map((_, i) => (
                                        <i key={i} className="fa fa-star" aria-hidden="true"></i>
                                    ))}
                                </div>
                                <h4>{product.price}</h4>
                            </div>
                            <a href="cart.html"><i className="fa fa-shopping-cart" aria-hidden="true"></i></a>
                        </div>
                    ))}
                </div>
            </section>

            {/* Banner Section */}
            <section id="banner" className="section-m1">
                <h4>Repair service</h4>
                <h2>Up to <span>30% off</span> All t-Shirts & Accessories</h2>
                <button>Explore more</button>
            </section>

            {/* New Arrivals Section */}
            <section id="product1" className="section-pad">
                <h2>🎉New Arrivals🎉</h2>
                <p>2024 Collections New and cheaper</p>
                <div className="product-container">
                    {newArrivals.map((product, index) => (
                        <div className="pro-box" key={index}>
                            <a href={product.link}>
                                <img src={product.img} alt={product.name} />
                            </a>
                            <div className="description">
                                <h5>{product.name}</h5>
                                <div className="star">
                                    {[...Array(5)].map((_, i) => (
                                        <i key={i} className="fa fa-star" aria-hidden="true"></i>
                                    ))}
                                </div>
                                <h4>{product.price}</h4>
                            </div>
                            <a href="cart.html"><i className="fa fa-shopping-cart" aria-hidden="true"></i></a>
                        </div>
                    ))}
                </div>
            </section>

            {/* Newsletter Section */}
            <section id="newsletter" className="section-m1">
                <div>
                    <h4>Sign Up For Newsletter</h4>
                    <p>Get E-mail updates about our latest shop and <span>special offers</span></p>
                </div>
                <form action="daxohnero@gmail.com" method="post">
                    <fieldset>
                        <input type="email" id="email" required placeholder="Your email address" />
                        <label htmlFor="email"></label>
                        <button type="submit">Sign Up</button>
                    </fieldset>
                </form>
            </section>

            {/* Footer Section */}
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
                    <a href="#" target="_blank">About us</a>
                    <a href="#" target="_blank">Delivery Information</a>
                    <a href="#" target="_blank">Privacy Policy</a>
                    <a href="#" target="_blank">Terms & Conditions</a>
                    <a href="#" target="_blank">Contact Us</a>
                </div>

                <div className="col">
                    <h3>My Account</h3>
                    <a href="#" target="_blank">Sign In</a>
                    <a href="#" target="_blank">View Cart</a>
                    <a href="#" target="_blank">My Wishlist</a>
                    <a href="#" target="_blank">Track My Order</a>
                    <a href="#" target="_blank">Help</a>
                </div>

                <div className="col install">
                    <h4>Install App</h4>
                    <p>From App Store or Google Play</p>
                    <div className="row">
                        <img src=".src/Ecommerce_img/AppleStoreLogo.png" alt="App Store" width="105" height="37" />
                        <img src=".src/Ecommerce_img/Googleplaylogo.png" alt="Google Play" width="105" height="37" />
                    </div>
                    <p>Secured Payment Gateways</p>
                    <img src={foreignPaymentMethods} alt="Payment Methods" width="157" height="55.5" />
                    <img src=".src/Ecommerce_img/localPaymentMethods.png" alt="Local Payment Methods" width="157" height="55.5" />
                </div>

                <div className="copyright">
                    <p>@2024 David Chukwurah. All rights reserved</p>
                </div>
            </footer>
        </main>
    );
};

export default App;