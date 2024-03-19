import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "../styles/product.css";

function Product() {
  const products = useSelector((state) => state.product.products);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch({
      type: "AddtoCart",
      payload: product,
    });
    dispatch({
      type: "AddtoCart1",
      payload: product,
    });
  };

  const handleRemoveFromCart = (id) => {
    dispatch({
      type: "RemoveFromCart",
      payload: id,
    });
    dispatch({
      type: "RemoveFromCart1",
      payload: id,
    });
  };

  const truncateDescription = (expand, description, limit) => {
    return expand ? description.slice(0, limit) : description;
  };

  const handleExpand = (id) => {
    dispatch({
      type: "expand",
      payload: id,
    });
  };

  return (
    <div className="display">
      <h1>Products</h1>
      <div className="row">
        {products.map((product) => (
          <div className="col-3" key={product.id}>
            <div className="card h-80">
              <img src={product.thumbnail} className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">Rs {product.price}</p>
                <div className="desClass">
                  <p className="card-text description" id="description">
                    {truncateDescription(
                      product.isExpand,
                      product.description,
                      20
                    )}
                  </p>
                  <button
                    className="desButton"
                    type="button"
                    onClick={() => handleExpand(product.id)}
                  >
                    {product.isExpand ? "Read More" : "Read Less"}
                  </button>
                </div>
                {product.isAddToCart ? (
                  <button
                    onClick={() => handleRemoveFromCart(product.id)}
                    className="btn btn-danger bg-danger"
                  >
                    Remove from Cart
                  </button>
                ) : (
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="btn btn-primary bg-primary"
                  >
                    Add to Cart
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
