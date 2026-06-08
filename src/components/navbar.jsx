import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">

        <Link className="navbar-brand" to="/">
          My App
        </Link>

        <div>
          <Link className="btn btn-outline-light me-2" to="/">
            Home
          </Link>

          <Link className="btn btn-outline-light me-2" to="/about">
            About
          </Link>

          <Link className="btn btn-outline-light me-2" to="/product">
            Product
          </Link>

          <Link className="btn btn-outline-light" to="/contact">
            Contact
          </Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;