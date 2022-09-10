import styled from "styled-components";
import { device } from "../../Style/device";

export const Nav = styled.nav `
  position: fixed;
  width: ${(props) =>
    props.openSidebar ? "calc(100% - 300px)" : "calc(100% - 100px)"};
  min-height: 60px;
  margin: 10px 25px;
  background-color: ${(props) =>
    props.darkMode ? props.theme.dark.nav : props.theme.light.nav};
  box-shadow: 0px 3px 5px 0px
    ${(props) =>
      props.darkMode ? props.theme.dark.shadow : props.theme.light.shadow};
  z-index: 100;

  @media ${device.tablet} {
    width: ${(props) =>
      props.openSidebar ? "calc(100% - 260px)" : "calc(100% - 60px)"};
    margin: 0 5px;
  }
`;

export const Content = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;

  @media ${device.tablet} {
    .links {
      flex-basis: 100%;
    }
  }

  @media ${device.mobileM} {
    justify-content: center;
  }
`;