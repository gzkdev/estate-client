import { HeaderNavBarStyled } from "./styled/HeaderNavBar.styled";
import { ContainerStyled } from "./styled/Container.styled";
import { Link } from "react-router-dom";

function HeaderNavbar({ menuState, toggleMenuState }) {
  return (
    <HeaderNavBarStyled className="header-navbar">
      <ContainerStyled>
        <div className="header-navbar-container">
          <Link to="/#" className="logo">
            <span>Estate</span>
            <span>CLIENT</span>
          </Link>
          <nav className="header-navbar-nav">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">Properties</Link>
              </li>
              <li>
                <Link to="/">About</Link>
              </li>
              <li>
                <Link to="/">Contact</Link>
              </li>
            </ul>
          </nav>
          <div
            onClick={() => toggleMenuState(!menuState)}
            className={menuState ? "app-menu-toggle open" : "app-menu-toggle"}
          ></div>
        </div>
      </ContainerStyled>
    </HeaderNavBarStyled>
  );
}

export default HeaderNavbar;
