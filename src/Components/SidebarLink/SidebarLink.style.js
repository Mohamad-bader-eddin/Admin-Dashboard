import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { device } from "../../Style/device";
import { hoverColor, mainColor } from "../../Style/variable";

export const LinkItem = styled.li `
  padding: 5px 0;
  transition: 0.3s;

  &:hover {
    background-color: ${hoverColor};
  }

  &:not(:last-of-type) {
    margin-bottom: 10px;
  }
`;

export const A = styled(NavLink)
`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
  font-weight: bold;
  color: white;

  .content {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .icon {
    margin: 0 10px;
  }

  &.active {
    border-left: 5px solid ${mainColor};
    color: ${mainColor};
  }

  @media ${device.tablet} {
    .icon {
      margin: 0 5px;
      font-size: 12px;
    }
  }
`;