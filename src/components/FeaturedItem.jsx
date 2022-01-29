import { Link } from "react-router-dom";
import styled from "styled-components";

const FeaturedItemStyled = styled.div`
  position: relative;
  min-height: 320px;
  border-radius: 4px;
  outline: 1px solid #ebebeb;
  overflow: hidden;

  & .bookmark-btn {
    position: absolute;
    top: 16px;
    right: 16px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #fff;
    z-index: 1;
    border: none;
    outline: none;
    cursor: pointer;
  }

  & a {
    text-decoration: none;
    color: inherit;
  }

  & .featured-item-top {
    position: relative;
    width: 100%;
    height: 240px;
    background: var(--secondary-color);

    & > img {
      position: absolute;
      inset: 0;
      object-fit: cover;
    }
  }

  & .featured-item-base {
    padding: 24px 10px;

    & h4 {
      margin-bottom: 16px;
      line-height: 1.2;
    }

    & span {
      display: block;
      font-size: 1.25rem;
      line-height: 1;
    }

    & .featured-item-owner-profile {
      width: 100%;
      display: flex;
      align-items: center;
      margin-top: 16px;
      font-weight: 600;

      & > div:nth-child(1) {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        background: #242424;
        margin-right: 8px;

        & > img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }
`;

function FeaturedItem() {
  return (
    <FeaturedItemStyled>
      <Link to="/">
        <button className="bookmark-btn"></button>
        <div className="featured-item-top"></div>
        <div className="featured-item-base">
          <h4>6-bedroom Bungalow house</h4>
          <small>Starting from</small>
          <span>$2,400</span>

          <div className="featured-item-owner-profile">
            <div className="owner-photo-box"></div>
            <small>Ejike Clifford</small>
          </div>
        </div>
      </Link>
    </FeaturedItemStyled>
  );
}

export default FeaturedItem;
