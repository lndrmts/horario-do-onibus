import styled from "styled-components";

export const Container = styled.div`
  max-width: 799px;
  margin: auto;
  padding: 15px;
  min-height: 80vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  h1 {
    color: #005662;
    margin-top: 16px;
  }
`;

export const Navigation = styled.nav`
  width: 100%;
  background: rgba(98, 185, 133, 0.1);
  padding: 15px 0;
  a {
    display: block;
    padding: 4px 0;
    font-weight: 400;
    font-size: 14px;
    line-height: 28px;
    color: #000000;
  }
`;

export const Collapse = styled.div``;
