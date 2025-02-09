import about from "../../assets/img/about-img.jpeg";

const About: React.FC = () => {
  return (
    <section className="about" id="about">
      <h1 className="heading">
        {" "}
        <span>Tentang</span> Kami
      </h1>
      <div className="row">
        <div className="image">
          <img src={about} />
        </div>
        <div className="content">
          <h3>apa yang membuat kopi kami istimewa</h3>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque
            suscipit sapiente quos obcaecati eius deleniti non, numquam
            aspernatur quas voluptatibus unde velit nobis quidem officia? Modi
            maiores architecto aperiam obcaecati.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            dolores! Dolor delectus mollitia numquam excepturi quaerat nam non
            cumque necessitatibus?
          </p>
          <a href="#" className="btn">
            cari tahu lebih lanjut
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
