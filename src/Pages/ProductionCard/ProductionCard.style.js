import styled from "styled-components";
import { device } from "../../Style/device";

export const CardContainer = styled.div `
  min-height: 100vh;
  padding: 100px 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 40px;

  @media ${device.mobileM} {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;