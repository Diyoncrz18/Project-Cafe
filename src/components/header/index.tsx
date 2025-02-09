import logo from "../../assets/img/logo.png";
import card1 from "../../assets/img/cart1.png";
import cart2 from "../../assets/img/cart2.png";
import cart3 from "../../assets/img/cart3.png";
import cart4 from "../../assets/img/cart4.png";

const Header: React.FC = () => {
  return (
    <header className="header">
      <a href="#" className="logo">
        <img src={logo} alt="" />
      </a>
      <nav className="navbar">
        <a href="#home">Beranda</a>
        <a href="#about">Tentang</a>
        <a href="#menu">Menu</a>
        <a href="#products">Produk</a>
        <a href="#review">Ulasan</a>
        <a href="#contact">Kontak</a>
        <a href="#blogs">Blog</a>
      </nav>
      <div className="icons">
        <div className="fas fa-search" id="search-btn" />
        <div className="fas fa-shopping-cart" id="cart-btn" />
        <div className="fas fa-bars" id="menu-btn" />
        <div className="fas fa-bell" id="notification-btn" />
        <div className="fas fa-cog" id="settings-btn" />
      </div>

      <div className="search-form">
        <input type="search" id="search-box" placeholder="pesquise aqui..." />
        <label htmlFor="search-box" className="fas fa-search" />
      </div>

      <div className="cart-items-container">
        <div className="cart-item">
          <span className="fas fa-times" />
          <img src={card1} />
          <div className="content">
            <h3>Item de cartão 01</h3>
            <div className="price">R$15.99/-</div>
          </div>
        </div>
        <div className="cart-item">
          <span className="fas fa-times" />
          <img src={cart2} />
          <div className="content">
            <h3>Item de cartão 02</h3>
            <div className="price">R$15.99/-</div>
          </div>
        </div>
        <div className="cart-item">
          <span className="fas fa-times" />
          <img src={cart3} />
          <div className="content">
            <h3>Item de cartão 03</h3>
            <div className="price">R$15.99/-</div>
          </div>
        </div>
        <div className="cart-item">
          <span className="fas fa-times" />
          <img src={cart4} />
          <div className="content">
            <h3>Item de cartão 04</h3>
            <div className="price">R$15.99/-</div>
          </div>
        </div>
        <a href="#" className="btn">
          Saindo Agora
        </a>
      </div>
    </header>
  );
};

export default Header;
