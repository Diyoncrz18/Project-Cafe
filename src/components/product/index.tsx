import product1 from "../../assets/img/product-1.png";
import product2 from "../../assets/img/product-2.png";
import product3 from "../../assets/img/product-3.png";

const Product = () => {
  return (
    <section className="products" id="products">
      <h1 className="heading">
        {" "}
        produk <span>kami</span>{" "}
      </h1>
      <div className="box-container">
        <div className="box">
          <div className="icons">
            <a href="#" className="fas fa-shopping-cart" />
            <a href="#" className="fas fa-heart" />
            <a href="#" className="fas fa-eye" />
          </div>
          <div className="image">
            <img src={product1} alt="product 1" />
          </div>
          <div className="content">
            <h3>café fresco</h3>
            <div className="stars">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star-half-alt" />
            </div>
            <div className="price">
              R$15,00 <span>R$20,00</span>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="icons">
            <a href="#" className="fas fa-shopping-cart" />
            <a href="#" className="fas fa-heart" />
            <a href="#" className="fas fa-eye" />
          </div>
          <div className="image">
            <img src={product2} alt="product 2" />
          </div>
          <div className="content">
            <h3>kopi segar</h3>
            <div className="stars">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star-half-alt" />
            </div>
            <div className="price">
              R$15,00 <span>R$20,00</span>
            </div>
          </div>
        </div>
        <div className="box">
          <div className="icons">
            <a href="#" className="fas fa-shopping-cart" />
            <a href="#" className="fas fa-heart" />
            <a href="#" className="fas fa-eye" />
          </div>
          <div className="image">
            <img src={product3} alt="product 3" />
          </div>
          <div className="content">
            <h3>kopi segar</h3>
            <div className="stars">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star-half-alt" />
            </div>
            <div className="price">
              R$15,00 <span>R$20,00</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
