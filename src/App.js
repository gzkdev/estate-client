import { useState } from "react";
import HeaderNavbar from "./components/HeaderNavbar";
import HeroSection from "./components/HeroSection";
import AppMobileMenu from "./components/AppMobileMenu";

function App() {
  const [toggle, setToggle] = useState(false)
  return (
    <>
      <HeaderNavbar toggle={toggle} setToggle={setToggle} />
      <HeroSection />
      <AppMobileMenu toggle={toggle} />
    </>
  );
}

export default App;
