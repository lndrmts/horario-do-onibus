import styled from "styled-components";

export const Wrapper = styled.article`
  max-width: 799px;
  margin: 56px auto;
  padding: 15px;
  hr {
    margin: 32px 0;
    border: none;
    background-color: rgba(0, 0, 0, 0.05);
    height: 1px;
    width: 100%;
  }
  h1 {
    font-weight: 400;
    font-size: 48px;
    line-height: 1;
    color: #00838f;
    margin-bottom: 16px;
    span {
      font-weight: 500;
      font-size: 14px;
      line-height: 17px;

      color: #000000;
    }
  }
  h3 {
    margin-bottom: 0;
    font-size: 18px;
    text-transform: inherit;
  }
  p {
    font-weight: 600;
    font-size: 16px;
  }
`;
export const Type = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: #777777;
  margin: 0;
  text-transform: uppercase;
`;

export const Price = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
  span {
    color: #777777;
    font-weight: 400;
    text-transform: uppercase;
  }
`;
export const Place = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  margin: 8px 0;
  text-transform: uppercase;
  color: #005662;
`;

export const Hour = styled.p`
  padding: 8px 0;
`;
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

export const OpenItinerario = styled.a`
  background-color: #00838f;
`;

export const ContentItinerario = styled.div`
  background-color: #00838f;
  height: 100vh;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  padding: 4rem 1rem;
  overflow: auto;
  h3 {
    text-transform: uppercase;
    color: #ffffff;
    font-size: 18px;
    margin: 16px 0 8px;
  }
  p {
    font-size: 12px;
    line-height: 28px;
    color: #ffffff;
  }
`;
