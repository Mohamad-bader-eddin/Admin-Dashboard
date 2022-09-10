import styled from "styled-components";
import { device } from "../../Style/device";

export const Content = styled.div `
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;

  @media ${device.mobileM} {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;