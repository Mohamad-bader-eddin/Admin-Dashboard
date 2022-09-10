import styled from "styled-components";
import { device } from "../../Style/device";

export const Box = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${device.laptopL} {
    flex-direction: column;
  }
`;