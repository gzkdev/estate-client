import styled from "styled-components";

const sizes = {
    tablet: '768px',
    desktop: '1200px'
}

const devices = {
    tabletS: `(min-width : ${sizes.tablet})`,
    desktopS: `(min-width : ${sizes.desktop})`
}

export const HeaderNavBarStyled = styled.div`
    position: fixed;
    width: 100%;
    min-height: 64px;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--neutral-color);
    box-shadow: 0 0 24px rgba(0, 0, 0, 0.12);
    z-index: 1000;

    & .header-navbar-container{
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    & .logo{
        text-decoration: none;
        color: inherit;
        font-size: 0.9rem;

        & > span{
            display: block;
            line-height: 1;

            &:nth-child(2){
                font-weight: bold;
            }
        }
    }

    & .header-navbar-nav{
        display: none;
    }

    & .app-menu-toggle{
        position: relative;
        width: 40px;
        height: 40px;
        cursor: pointer;   
    }

    & .app-menu-toggle::before,
    & .app-menu-toggle::after {
        content: "";
        position: absolute;
        top: 50%;
        left: 50%;
        width: 70%;
        height: 2px;
        background: #242424;
        transition: 200ms ease-in-out;
    }

    & .app-menu-toggle::before{
        transform: translate(-50%, -4px);
        box-shadow: 0 6px 0 #242424;
    }

    & .app-menu-toggle::after{
        transform: translate(-50%, 8px);
    }

    & .app-menu-toggle.open::before{
        box-shadow: none;
        transform: translate(-50%,0) rotate(45deg);
    }

    & .app-menu-toggle.open::after{
        transform: translate(-50%,0) rotate(-45deg);
    }

@media ${devices.tabletS}{
    & .app-menu-toggle {
        display: none;
    }

    & .header-navbar-nav {
        display: block;
    }

    .header-navbar-nav ul li {
        display: inline-block;
        margin-right: 40px;
    }

    .header-navbar-nav ul li a {
        text-decoration: none;
        color: inherit;
        font-weight: 600;
        font-size: 0.96rem;
    }
}
`