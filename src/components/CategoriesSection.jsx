import { ContainerStyled } from "./styled/Container.styled";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ClientData } from "../ClientData";

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

    & a {
      text-decoration: none;
      color: inherit;

      & > div {
        position: relative;
        min-width: 260px;
        height: 360px;
        color: #fff;
        border-radius: 4px;
        padding: 24px 16px;
        overflow: hidden;

        &::after {
          content: "";
          position: absolute;
          inset: 0;
          background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.3));
          z-index: -1;
        }

        & > img {
          position: absolute;
          width: 100%;
          height: 100%;
          inset: 0;
          object-fit: cover;
          z-index: -1;
        }

        & span {
          font-weight: bold;
          line-height: 1;
          display: block;
        }
      }
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
        {ClientData.map((item) => (
          <Link key={item.id} to="/#">
            <div>
              <img src={item.imgURL} alt="" />
              <small>{item.tag}</small>
              <span>{item.type}</span>
            </div>
          </Link>
        ))}
      </div>
    </CategoriesSectionStyled>
  );
}

export default CategoriesSection;
