import about from "../../assets/img/about-img.jpeg";

const About: React.FC = () => {
  return (
    <section className="about" id="about">
      <h1 className="heading">
        <span>Tentang</span> Kami
      </h1>
      <div className="row">
        <div className="image">
          <img src={about} alt="Tentang kami" />
        </div>
        <div className="content">
          <h3>apa yang membuat kopi kami istimewa</h3>
          <p>
            Di The Roastery, setiap biji kopi dipilih dengan teliti dan
            dipanggang dengan sempurna untuk menghadirkan cita rasa terbaik di
            setiap cangkir. Kami percaya bahwa kopi bukan sekadar minuman,
            tetapi sebuah seni dan pengalaman yang menyatukan aroma, rasa, dan
            kenikmatan dalam satu tegukan. Dengan biji kopi berkualitas tinggi,
            teknik roasting terbaik, dan sentuhan cinta dari para barista kami,
            The Roastery siap memberikan kehangatan dan semangat di setiap
            sajian. Rasakan perpaduan sempurna antara tradisi dan inovasi dalam
            secangkir kopi yang menggugah selera.
          </p>
          <p>
          <b>The Roastery – Di Sini, Kopi Menemukan Jiwanya.</b>
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
