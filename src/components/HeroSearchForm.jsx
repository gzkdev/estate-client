import styled from "styled-components";

import { FaSearch } from "react-icons/fa";

const Form = styled.form`
  width: 100%;
  max-width: 540px;
  padding: 24px 0px;

  & label {
    font-weight: 600;
    font-size: 0.96rem;
  }

  & .hero-form-container {
    display: grid;
    grid-template-columns: auto 48px;
    gap: 2px;
    padding: 16px 0px;
  }
`;

function HeroSearchForm() {
  return (
    <Form autoComplete="off" className="hero-form">
      <label htmlFor="search">Search for homes</label>
      <div className="hero-form-container">
        <input type="search" />
        <button type="submit">
          <FaSearch />
        </button>
      </div>
    </Form>
  );
}

export default HeroSearchForm;
