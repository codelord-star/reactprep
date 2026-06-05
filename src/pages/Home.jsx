import Navbar from "../components/navbar"

function Home() {
    return (
        <div className="home-page ecommerce-home">
            <Navbar />
            <h1>Home</h1>

            <section className="hero">
                <div className="hero-copy">
                    <span>Shop the Latest</span>
                    <h1>Quality products made for everyday life</h1>
                    <p>Explore a curated selection of gadgets, accessories, and essentials with fast shipping and trusted support.</p>
                    <button type="button">Shop Now</button>
                </div>
                <div className="hero-image">
                    <img src="/assets/hero-product.png" alt="Featured product" />
                </div>
            </section>

            <section className="product-highlights">
                <h2>Featured collections</h2>
                <div className="product-grid">
                    <article className="product-card">
                        <div className="product-image">
                            <img src="./assets/images/headphones.webp" alt="" />
                        </div>
                        <h3>Wireless Headphones</h3>
                        <p>Comfortable, noise-cancelling sound with long-lasting battery life.</p>
                        <span className="price">$129.99</span>
                    </article>
                    <article className="product-card">
                        <div className="product-image">
                            <img src="./assets/images/watch.webp" alt="" />
                        </div>
                        <h3>Smart Watch</h3>
                        <p>Track health, stay connected, and customize your look with ease.</p>
                        <span className="price">$179.99</span>
                    </article>
                    <article className="product-card">
                        <div className="product-image">
                            <img src="./assets/images/backpack.webp" alt="" />
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
        </div>
    )
}

export default Home