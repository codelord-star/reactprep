import Navbar from "../components/navbar";
import Footer from "../components/footer";

function About() {
    return (
        <div className="about-page ecommerce-about">
            <Navbar/>
            <h1>About Us</h1>
            <section className="about-hero">
                <p>
                    At Jacob MH, we bring curated products and a seamless shopping experience
                    to every customer. Our store combines value, quality, and fast support so you
                    can shop with confidence.
                </p>
            </section>

            <section className="about-details">
                <div className="about-copy">
                    <h2>Built for modern shoppers</h2>
                    <p>
                        Our online store focuses on everyday essentials, tech accessories, and lifestyle
                        products designed for convenience and comfort.
                    </p>
                </div>
                <div className="about-highlights">
                    <article>
                        <h3>Trusted quality</h3>
                        <p>Every product is selected for durability and user satisfaction.</p>
                    </article>
                    <article>
                        <h3>Fast shipping</h3>
                        <p>Quick order fulfillment so you get what you need without waiting.</p>
                    </article>
                    <article>
                        <h3>Great support</h3>
                        <p>Responsive customer care ready to help with orders and returns.</p>
                    </article>
                </div>
            </section>

            <section className="our-mission">
                <h2>Our mission</h2>
                <p>
                    We aim to create a thoughtful ecommerce destination where browsing feels easy,
                    checkout feels secure, and every purchase feels like a smart choice.
                </p>
            </section>
            <Footer />
        </div>
    );
}

export default About