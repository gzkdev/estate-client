import styled from "styled-components";
import { useState } from "react";
import { FaHeart } from "react-icons/fa";

const BookMarkButtonStyled = styled.button`
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
  z-index: 10;

  &[data-clicked="clicked"] {
    color: red;
  }
`;

function BookMarkButton() {
  const [clicked, SetClicked] = useState(false);

  return (
    <BookMarkButtonStyled
      onClick={() => SetClicked(!clicked)}
      data-clicked={clicked ? "clicked" : ""}
    >
      <FaHeart />
    </BookMarkButtonStyled>
  );
}

export default BookMarkButton;
