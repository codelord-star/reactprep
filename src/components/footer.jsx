export default function Footer(){
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-grid">
          <div className="footer-brand">
            <strong>Jacob MH</strong>
            <p className="muted">Curated products & thoughtful service</p>
          </div>
          <div className="footer-links">
            <h4>Shop</h4>
            <ul>
              <li>Products</li>
              <li>Collections</li>
              <li>Gift cards</li>
            </ul>
          </div>
          <div className="footer-links">
            <h4>Company</h4>
            <ul>
              <li>About</li>
              <li>Contact</li>
              <li>Support</li>
            </ul>
          </div>
          <div className="footer-subscribe">
            <h4>Join our newsletter</h4>
            <form onSubmit={(e)=>e.preventDefault()} className="subscribe-form">
              <input aria-label="email" placeholder="Your email" />
              <button className="btn-primary">Subscribe</button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <small>© {new Date().getFullYear()} Jacob MH. All rights reserved.</small>
        </div>
      </div>
    </footer>
  )
}
