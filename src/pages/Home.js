import HeroSection from '../components/HeroSection'
import HeaderNavbar from '../components/HeaderNavbar';
import { useState } from 'react';
import FixedMenu from '../components/FixedMenu';
import CategoriesSection from '../components/CategoriesSection';
import FeaturedSection from '../components/FeaturedSection';
import FloatingFixedButton from '../components/FloatingFixedButton';
import Footer from '../components/Footer';

function Home() {
    const [menuState, toggleMenuState] = useState(false);

    return (<>
        <FloatingFixedButton />
        <FixedMenu menuState={menuState} />
        <HeaderNavbar toggleMenuState={toggleMenuState} menuState={menuState} />
        <HeroSection />
        <CategoriesSection />
        <FeaturedSection />
        <Footer />
    </>)
}

export default Home;
