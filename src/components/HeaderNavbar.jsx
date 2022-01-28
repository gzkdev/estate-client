import logo from "../assets/images/logo.svg";

function HeaderNavbar({ toggle, setToggle }) {
  return (
    <div className="header-nav">
      <div className="header-nav-ctn ctn">
        <a href="/" className="logo">
          <img className="logo-img" src={logo} alt="app logo" />
        </a>
        <nav>
          <ul>
            <li>{/* <a href="/">Home</a> */}</li>
            <li>
              <a href="/">Listing</a>
            </li>
            <li>
              <a href="/">Property</a>
            </li>
            <li>
              <a href="/">Agency</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
        </nav>
        <div
          className={toggle ? "menu-toggle toggle" : "menu-toggle"}
          onClick={() => setToggle(!toggle)}
        ></div>
      </div>
    </div>
  );
}

export default HeaderNavbar;
