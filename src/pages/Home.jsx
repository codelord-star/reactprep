import Navbar from "../components/navbar"
import Footer from "../components/footer"
//import hero from "../assets/hero.png"
import headphones from "../assets/images/headphones.webp"
import watch from "../assets/images/watch.webp"
import backpack from "../assets/images/backpack.webp"

function Home() {
    return (
        <div className="home-page ecommerce-home">
            <Navbar />
            <h1>Home</h1>

            <section className="hero">
                <div className="hero-copy">
                    <span>Shop the Latest</span>
                    <h2>Quality products made for everyday life</h2>
                    <p>Explore a curated selection of gadgets, accessories, and essentials with fast shipping and trusted support.</p>
                    <button type="button">Shop Now</button>
                </div>
                <div className="hero-image">
                    {/* <img src={hero} alt="Featured product" /> */}
                </div>
            </section>

            <section className="product-highlights">
                <h2>Featured collections</h2>
                <div className="product-grid">
                    <article className="product-card">
                        <div className="product-image">
                            <img src={headphones} alt="Wireless Headphones" />
                        </div>
                        <h3>Wireless Headphones</h3>
                        <p>Comfortable, noise-cancelling sound with long-lasting battery life.</p>
                        <span className="price">$129.99</span>
                    </article>
                    <article className="product-card">
                        <div className="product-image">
                            <img src={watch} alt="Smart Watch" />
                        </div>
                        <h3>Smart Watch</h3>
                        <p>Track health, stay connected, and customize your look with ease.</p>
                        <span className="price">$179.99</span>
                    </article>
                    <article className="product-card">
                        <div className="product-image">
                            <img src={backpack} alt="Everyday Backpack" />
                        </div>
                        <h3>Everyday Backpack</h3>
                        <p>Durable, lightweight carry with dedicated laptop and travel pockets.</p>
                        <span className="price">$59.99</span>
                    </article>
                </div>
            </section>

            <section className="why-shop">
                <h2>Why shop with us?</h2>
                <div className="benefits-grid">
                    <div>
                        <h3>Fast delivery</h3>
                        <p>Get your order quickly with reliable shipping options.</p>
                    </div>
                    <div>
                        <h3>Secure checkout</h3>
                        <p>Safe payment options and privacy-first order handling.</p>
                    </div>
                    <div>
                        <h3>Easy returns</h3>
                        <p>Hassle-free returns and friendly customer support.</p>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Home