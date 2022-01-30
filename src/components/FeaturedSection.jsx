import styled from "styled-components";
import FeaturedItem from "./FeaturedItem";
import { ContainerStyled } from "./styled/Container.styled";

import { ClientData } from "../ClientData";

const sizes = {
  semiTablet: "500px",
  laptop: "1200px",
};

const devices = {
  semiTabletScreen: `(min-width : ${sizes.semiTablet})`,
  laptopScreen: `(min-width : ${sizes.laptop})`,
};

const FeaturedSectionStyled = styled.section`
  padding: 0vh 0px 20vh;

  & .featured-section-container {
    width: 100%;
    display: grid;
    gap: 40px;
    padding: 48px 0px;
  }

  @media ${devices.semiTabletScreen} {
    & .featured-section-container {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media ${devices.laptopScreen} {
    & .featured-section-container {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

function FeaturedSection() {
  return (
    <FeaturedSectionStyled>
      <ContainerStyled>
        <div className="section-header">
          <h2>Featured homes</h2>
          <p>Check out the latest comfortable homes that we have now</p>
        </div>
        <div className="featured-section-container">
          {ClientData.map((item) => (
            <FeaturedItem
              img={item.imgURL}
              title={item.title}
              price={item.price}
              owner={item.owner}
              key={item.id}
            />
          ))}
        </div>
      </ContainerStyled>
    </FeaturedSectionStyled>
  );
}

export default FeaturedSection;
