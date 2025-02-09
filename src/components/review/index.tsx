import quote from "../../assets/img/quote-img.png";
import pic1 from "../../assets/img/pic-1.jpg";
import pic2 from "../../assets/img/pic-2.jpg";
import pic3 from "../../assets/img/pic-3.jpg";

const Review = () => {
  return (
    <section className="review" id="review">
      <h1 className="heading">
        {" "}
        komentar <span>pelanggan</span>{" "}
      </h1>
      <div className="box-container">
        <div className="box">
          <img src={quote} className="quote" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
            recusandae iste delectus consequatur officia sint aut perferendis
            fugit perspiciatis temporibus ipsum suscipit amet excepturi, est
            tempora id unde eum vitae.
          </p>
          <img src={pic1} className="user" />
          <h3>Vicky J. Majanduga</h3>
          <div className="stars">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star-half-alt" />
          </div>
        </div>
        <div className="box">
          <img src={quote} className="quote" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
            recusandae iste delectus consequatur officia sint aut perferendis
            fugit perspiciatis temporibus ipsum suscipit amet excepturi, est
            tempora id unde eum vitae.
          </p>
          <img src={pic2} className="user" />
          <h3>aadith C. Gunawan</h3>
          <div className="stars">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star-half-alt" />
          </div>
        </div>
        <div className="box">
          <img src={quote} className="quote" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione,
            recusandae iste delectus consequatur officia sint aut perferendis
            fugit perspiciatis temporibus ipsum suscipit amet excepturi, est
            tempora id unde eum vitae.
          </p>
          <img src={pic3} className="user" />
          <h3>Jordan Sutarto</h3>
          <div className="stars">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star-half-alt" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Review;
