import { Link } from "react-router-dom";
import styled from "styled-components";

const FixedMenuStyled = styled.div`
  display: none;
  position: fixed;
  top: 72px;
  left: 0;
  width: 90%;
  left: 50%;
  transform: translate(-50%, 0);
  padding: 40px 24px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 24px rgba(0, 0, 0, 0.12);

  &[data-toggle="show"] {
    display: block;
  }

  & nav ul li {
    list-style: none;
    text-align: center;
    margin: 8px 0px;

    & a {
      display: block;
      font-weight: 600;
      color: inherit;
      padding: 16px 0px;
      text-decoration: none;
    }
  }
`;

function FixedMenu({ menuState }) {
  return (
    <FixedMenuStyled data-toggle={menuState ? "show" : "hide"}>
      <nav className="fixed-menu-container">
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
    </FixedMenuStyled>
  );
}

export default FixedMenu;
