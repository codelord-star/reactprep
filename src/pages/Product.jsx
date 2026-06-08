import { useParams } from "react-router-dom";
import products from '../utilities/products'

function Product(){
    const { id } = useParams();
    const product = products.find((p) => p.id === parseInt(id));

    if (!product) {
        return (
            <div className="continer my-4">
                <h2>Product not found</h2>
            </div>
        )
    }

    return (
        <div>
            <div className="row">
                <div className="col-md-6">
                    <img src={product.image} alt={product.name} />
                </div>
                <div className="col-md-6 text-start">
                    <h1>{product.name}</h1>
                    <p className="lead">Price: ${product.price.toFixed(2)}</p>
                    <p>{product.description}</p>
                    <button className="btn btn-success">Add to Cart</button>
                </div>
            </div>
        </div>  
    );
}

export default Product