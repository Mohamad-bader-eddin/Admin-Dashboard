import styled from "styled-components";
import { device } from "../../Style/device";

export const Rev = styled.div `
  flex-basis: 35%;
`;

export const Header = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin: 10px 0;

  h4 {
    text-transform: uppercase;
    color: #777;
    font-weight: bold;
  }
`;

export const Body = styled.div `
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px;

  .chart {
    width: 100px;
    height: 100px;
  }

  h5 {
    color: #888;
    margin: 20px 0;
    font-size: 20px;
    text-align: center;
  }

  h4 {
    font-size: 24px;
    margin-bottom: 20px;
  }

  p {
    color: #777;
    line-height: 1.6;
    text-align: center;
  }
`;

export const Footer = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
  padding: 10px;
`;

export const Item = styled.div `
  text-align: center;
  margin: 10px 0;

  h4 {
    color: #777;
  }
  .itemResult {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    font-size: 14px;
    color: ${(props) => (props.positive ? "green" : "red")};
  }

  @media ${device.mobileL} {
    .itemResult {
      font-size: 10px;
    }
    h4 {
      font-size: 12px;
    }
  }
`;