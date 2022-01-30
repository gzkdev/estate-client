import styled from "styled-components";
import { Link } from "react-router-dom";
import BookMarkButton from "./BookMarkButton";

const FeaturedItemStyled = styled.div`
  position: relative;
  min-height: 320px;
  border-radius: 4px;
  outline: 1px solid #ebebeb;
  overflow: hidden;

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
      width: 100%;
      height: 100%;
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

function FeaturedItem({ img, title, price, owner }) {
  return (
    <FeaturedItemStyled>
      <Link to="/">
        <BookMarkButton />
        <div className="featured-item-top">
          <img src={img} alt="" />
        </div>
        <div className="featured-item-base">
          <h4>{title}</h4>
          <small>Starting from</small>
          <span>${price}</span>
          <div className="featured-item-owner-profile">
            <div className="owner-photo-box"></div>
            <small>{owner}</small>
          </div>
        </div>
      </Link>
    </FeaturedItemStyled>
  );
}

export default FeaturedItem;
