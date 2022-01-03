import HeroSearchForm from "./HeroSearchForm";

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-ctn ctn">
        <div className="hero-text-ctn">
          <h1>Build your home in a comfortable house</h1>
          <p>Lorem Officiis minima eum porro consectetur adipisicing elit</p>

          <div className="cta-links">
            <a href="./#">Buy house</a>
            <a href="./#">Rent house</a>
          </div>

          <HeroSearchForm />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
