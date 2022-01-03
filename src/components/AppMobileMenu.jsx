function AppMobileMenu({ toggle }) {
  return (
    <div className={toggle ? "app-sidebar active" : "app-sidebar"}>
      <div className="app-sidebar-ctn ctn">
        <nav>
          <ul>
            <li>
              <a href="./#">Home</a>
            </li>
            <li>
              <a href="./#">About</a>
            </li>
            <li>
              <a href="./#">Blog</a>
            </li>
            <li>
              <a href="./#">Property</a>
            </li>
            <li>
              <a href="./#">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default AppMobileMenu;
