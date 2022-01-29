import { HeroSectionStyled } from "./styled/HeroSection.styled";
import { ContainerStyled } from "./styled/Container.styled";

function HeroSection() {
  return (
    <HeroSectionStyled>
      <ContainerStyled>
        <div className="hero-section-container">
          <div className="hero-text-container">
            <h1>Build your home in a comfortable house</h1>
            <p>Let's help you get your dream home</p>
          </div>
          <form autoComplete="off" className="hero-form">
            <label htmlFor="search">Search for homes</label>
            <div className="hero-form-ctn">
              <input type="search" name="search" id="search" />
              <button type="submit" className="hero-submit-btn"></button>
            </div>
          </form>
        </div>
      </ContainerStyled>
    </HeroSectionStyled>
  );
}

export default HeroSection;
