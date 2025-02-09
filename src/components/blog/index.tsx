import blog1 from "../../assets/img/blog-1.jpeg";
import blog2 from "../../assets/img/blog-2.jpeg";
import blog3 from "../../assets/img/blog-3.jpeg";

const Blog = () => {
  return (
    <section className="blogs" id="blogs">
      <h1 className="heading">
        {" "}
        blog <span>Kami</span>{" "}
      </h1>
      <div className="box-container">
        <div className="box">
          <div className="image">
            <img src={blog1} />
          </div>
          <div className="content">
            <a href="#" className="title">
              kopi yang enak dan menyegarkan
            </a>
            <span>di update / 21 Jan 2025</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
              nobis!
            </p>
            <a href="#" className="btn">
              leia mais
            </a>
          </div>
        </div>
        <div className="box">
          <div className="image">
            <img src={blog2} />
          </div>
          <div className="content">
            <a href="#" className="title">
              kopi yang enak dan menyegarkan
            </a>
            <span>di update / 21 Jan 2025</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
              nobis!
            </p>
            <a href="#" className="btn">
              leia mais
            </a>
          </div>
        </div>
        <div className="box">
          <div className="image">
            <img src={blog3} />
          </div>
          <div className="content">
            <a href="#" className="title">
              kopi yang enak dan menyegarkan
            </a>
            <span>di update / 21 Jan 2025</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
              nobis!
            </p>
            <a href="#" className="btn">
              leia mais
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
