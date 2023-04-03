function Hero() {
    return (
  <section id="hero">
  <div className="container h-100">
    <div className="row h-100">
      <div className="col-md-6 hero-tagline my-auto">
        <h1>Membantu Temukan Rumah Impian</h1>
        <p>
          <span className="fw-bold">Rumah Impian</span> hadir untuk temukan
          rumah terbaik untukmu, untuk di jual ataupun di sewa dengan sumber
          terpercaya.
        </p>
        
        <button className="button-lg-primary">Temukan Rumah</button>
        <a href="#">
        <img src="/Assets/eva-row.png" alt="arrow"  className=""></img>
        </a>
      </div>
    </div>
    <img src="/Assets/Hero-Image.png" alt="Hero-image"  className="img-hero position-absolute end-0  bottom-0"></img>
    <img src="/Assets/Accsent.png" alt="Accsent"  className=" Accsent-img position-absolute top-0 start-0"></img>
  </div>
</section>
    );
  }
  
  export default Hero;