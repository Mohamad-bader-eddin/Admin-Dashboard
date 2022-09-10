import styled from "styled-components";
import { device } from "../../Style/device";

export const Information = styled.div `
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(335px, 1fr));
  gap: 40px;
  padding: 100px 20px;

  @media ${device.mobileL} {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;