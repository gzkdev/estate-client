import styled from "styled-components"

import heroBg from "./herobg.jpg"

export const HeroSectionStyled = styled.section`
    background: 
    linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.5)),
    url(${heroBg}) center no-repeat;
    background-size: cover;
    color: #fff;

    & .hero-section-container{
        width: 100%;
        padding: max(30vh, 160px) 0px;

        & .hero-text-container{
            max-width: 540px;
            
            & h1{
                font-size: clamp(2rem, 6.4vw + 1rem, 54px);
                line-height: 1.2;
            }

            & p{
                margin: 16px 0px 40px;
            }
        }
    }
        
`