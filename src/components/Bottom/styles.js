import styled from "styled-components";

export const Section = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  left: 0;
  height: 56px;
  align-items: center;
  width: 100%;
  a {
    width: 50%;
    display: flex;
    align-items: center;
    height: 56px;
    justify-content: center;
    font-weight: 500;
    font-size: 14px;
    line-height: 28px;
    color: #ffffff;
    text-decoration: none;
    svg {
      margin-right: 16px;
    }
    + a {
      background: #777777;
    }
  }
`;

export const Itinerario = styled.a`
  background-color: #00838f;
`;
