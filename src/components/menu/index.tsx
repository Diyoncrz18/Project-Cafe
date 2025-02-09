import menu1 from "../../assets/img/menu-1.png";
import menu2 from "../../assets/img/menu-2.png";
import menu3 from "../../assets/img/menu-3.png";
import menu4 from "../../assets/img/menu-4.png";
import menu5 from "../../assets/img/menu-5.png";
import menu6 from "../../assets/img/menu-6.png";

const Menu: React.FC = () => {
  return (
    <section className="menu" id="menu">
      <h1 className="heading">
        {" "}
        menu <span>kami</span>{" "}
      </h1>
      <div className="box-container">
        <div className="box">
          <img src={menu1} alt="menu 1" />
          <h3> Caramel Latte</h3>
          <div className="price">
            Rp25.000 <span>Rp30.000</span>
          </div>
          <a href="#" className="btn">
            Tambahkan Keranjang
          </a>
        </div>
        <div className="box">
          <img src={menu2} alt="menu 2" />
          <h3> Vannila Latte</h3>
          <div className="price">
            Rp25.000 <span>Rp30.000 </span>
          </div>
          <a href="#" className="btn">
            Tambahkan Keranjang
          </a>
        </div>
        <div className="box">
          <img src={menu3} alt="menu 3" />
          <h3> Late Machitato</h3>
          <div className="price">
            Rp25.000 <span>Rp30.000 </span>
          </div>
          <a href="#" className="btn">
            Tambahkan Keranjang
          </a>
        </div>
        <div className="box">
          <img src={menu4} alt="menu 4" />
          <h3> Hot Chocolate</h3>
          <div className="price">
            Rp25.000 <span>Rp30.000 </span>
          </div>
          <a href="#" className="btn">
            Tambahkan Keranjang
          </a>
        </div>
        <div className="box">
          <img src={menu5} alt="menu 5" />
          <h3> Cappucino</h3>
          <div className="price">
            Rp25.000 <span>Rp30.000 </span>
          </div>
          <a href="#" className="btn">
            Tambahkan Keranjang
          </a>
        </div>
        <div className="box">
          <img src={menu6} alt="menu 6" />
          <h3> Mint Chocolate</h3>
          <div className="price">
            Rp25.000 <span>Rp30.000 </span>{" "}
          </div>
          <a href="#" className="btn">
            Tambahkan Keranjang
          </a>
        </div>
        <div className="box">
          <img src={menu6} alt="menu 6" />
          <h3> Mint Chocolate</h3>
          <div className="price">
            Rp25.000 <span>Rp30.000 </span>{" "}
          </div>
          <a href="#" className="btn">
            Tambahkan Keranjang
          </a>
        </div>
        <div className="box">
          <img src={menu6} alt="menu 7" />
          <h3> Mint Chocolate</h3>
          <div className="price">
            Rp25.000 <span>Rp30.000 </span>{" "}
          </div>
          <a href="#" className="btn">
            Tambahkan Keranjang
          </a>
        </div>
      </div>
    </section>
  );
};

export default Menu;
