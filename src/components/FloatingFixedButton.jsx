import { FaEnvelope } from "react-icons/fa";
import styled from "styled-components";

const FloatingButton = styled.button`
  position: fixed;
  bottom: 24px;
  right: 5vmin;
  height: 56px;
  width: 56px;
  background: #242424;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  text-decoration: none;
  z-index: 999;
`;

function FloatingFixedButton() {
  return (
    <FloatingButton>
      <FaEnvelope />
    </FloatingButton>
  );
}

export default FloatingFixedButton;
