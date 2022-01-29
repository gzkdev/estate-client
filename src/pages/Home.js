import HeroSection from '../components/HeroSection'
import HeaderNavbar from '../components/HeaderNavbar';
import { useState } from 'react';
import FixedMenu from '../components/FixedMenu';

function Home() {
    const [menuState, toggleMenuState] = useState(false);

    return (<>
        <FixedMenu menuState={menuState} />
        <HeaderNavbar toggleMenuState={toggleMenuState} menuState={menuState} />
        <HeroSection />
    </>)
}

export default Home;
