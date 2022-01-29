import { HeroSectionStyled } from "./styled/HeroSection.styled";
import { ContainerStyled } from "./styled/Container.styled";
import HeroSearchForm from "./HeroSearchForm";

function HeroSection() {
  return (
    <HeroSectionStyled>
      <ContainerStyled>
        <div className="hero-section-container">
          <div className="hero-text-container">
            <h1>Build your home in a comfortable house</h1>
            <p>Let's help you get your dream home</p>
          </div>
          <HeroSearchForm />
        </div>
      </ContainerStyled>
    </HeroSectionStyled>
  );
}

export default HeroSection;
