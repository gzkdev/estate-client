import { Link } from "react-router-dom";
import styled from "styled-components";
import { ContainerStyled } from "./styled/Container.styled";

const sizes = {
  tablet: "768px",
  laptop: "1200px",
};

const devices = {
  tabletScreen: `(min-width : ${sizes.tablet})`,
  laptopScreen: `(min-width : ${sizes.laptop})`,
};

const FooterStyled = styled.footer`
  width: 100%;
  padding: 64px 0px;
  background: #050505;
  color: #d3d3d3;

  & .footer-text-container {
    max-width: 360px;

    & p {
      margin-top: 16px;
    }
  }

  & ul {
    margin-top: 40px;

    & li {
      list-style: none;
      margin-top: 8px;

      &:first-child {
        font-weight: 600;
      }

      & a {
        text-decoration: none;
        color: inherit;
        font-size: 0.9rem;
      }
    }
  }

  @media ${devices.tabletScreen} {
    & .footer-container {
      display: grid;
      grid-template-columns: auto 20% 20%;
      justify-content: space-between;
    }

    & ul {
      margin-top: 0px;
    }
  }
`;

function Footer() {
  return (
    <FooterStyled>
      <ContainerStyled>
        <div className="footer-container">
          <div className="footer-text-container">
            <span className="logo">
              <span>Estate</span>
              <span>CLIENT</span>
            </span>
            <p>
              Estate Client is a real estate company that helps people find
              comfortable homes that are affordable within in their location.
            </p>
          </div>

          <ul>
            <li>Site map</li>
            <li>
              <Link to="/#">Home</Link>
            </li>
            <li>
              <Link to="/#">Properties</Link>
            </li>
            <li>
              <Link to="/#">About</Link>
            </li>
            <li>
              <Link to="/#">Contact</Link>
            </li>
          </ul>

          <ul>
            <li>Site map</li>
            <li>
              <Link to="/#">Home</Link>
            </li>
            <li>
              <Link to="/#">Properties</Link>
            </li>
            <li>
              <Link to="/#">About</Link>
            </li>
            <li>
              <Link to="/#">Contact</Link>
            </li>
          </ul>
        </div>
      </ContainerStyled>
    </FooterStyled>
  );
}

export default Footer;
