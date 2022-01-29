import { ContainerStyled } from "./styled/Container.styled";
import styled from "styled-components";

const sizes = {
  tablet: "768px",
  desktop: "1200px",
};

const devices = {
  tabletS: `(min-width : ${sizes.tablet})`,
  desktopS: `(min-width : ${sizes.desktop})`,
};

const CategoriesSectionStyled = styled.section`
  width: 100%;
  padding: 15vh 0px 10vh;

  & .categories-carousel {
    width: 100%;
    display: flex;
    align-items: center;
    padding: 48px 24px;
    margin: 0 auto;
    overflow: auto;
    gap: 40px;

    &::-webkit-scrollbar {
      width: 0;
    }

    & > div {
      min-width: 260px;
      height: 360px;
      background: #555;
      border-radius: 4px;
    }
  }

  @media ${devices.desktopS} {
    & .categories-carousel {
      flex-wrap: wrap;
      max-width: 1200px;
      gap: 32px;
    }
  }
`;

function CategoriesSection() {
  return (
    <CategoriesSectionStyled>
      <ContainerStyled>
        <div className="section-header">
          <h2>The Categories</h2>
          <p>
            Find comfortable and affordable homes in different categories that
            you want
          </p>
        </div>
      </ContainerStyled>
      <div className="categories-carousel">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </CategoriesSectionStyled>
  );
}

export default CategoriesSection;
