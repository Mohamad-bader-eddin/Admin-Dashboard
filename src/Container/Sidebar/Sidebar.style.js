import styled from "styled-components";
import { device } from "../../Style/device";

export const SideBar = styled.nav `
  position: fixed;
  width: ${(props) => (props.openSidebar ? "250px" : "50px")};
  min-height: 100vh;
  background-color: ${(props) =>
    props.darkMode ? props.theme.dark.nav : props.theme.light.nav};
  padding: 10px 5px;
  text-align: center;
  transition: 0.2s;
  z-index: 1;

  @media ${device.tablet} {
    padding: 10px 0px;
  }
`;

export const Links = styled.ul `
  margin-top: 20px;
`;