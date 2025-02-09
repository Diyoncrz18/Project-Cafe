const Contact: React.FC = () => {
  return (
    <section className="contact" id="contact">
      <h1 className="heading">
        {" "}
        <span>hubungi </span> kami{" "}
      </h1>
      <div className="row">
        <iframe
          className="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d991.3468425726165!2d124.9772567!3d1.4292499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32870fd0bdad82af%3A0x82a727d9254493fd!2sWATULESUNG%20CAFE!5e0!3m2!1sen!2sid!4v1705890000000!5m2!1sen!2sid"
          allowFullScreen={true}
          loading="lazy"
        />
        <form action="">
          <h3>Kontak</h3>
          <div className="inputBox">
            <span className="fas fa-user" />
            <input type="text" placeholder="nama" />
          </div>
          <div className="inputBox">
            <span className="fas fa-envelope" />
            <input type="email" placeholder="email" />
          </div>
          <div className="inputBox">
            <span className="fas fa-phone" />
            <input type="number" placeholder="telpon" />
          </div>
          <input type="submit" value="hubungi sekarang" className="btn" />
        </form>
      </div>
    </section>
  );
};

export default Contact;
