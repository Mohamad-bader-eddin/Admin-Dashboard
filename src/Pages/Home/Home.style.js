import styled from "styled-components";

export const HomePage = styled.div `
  background-color: ${(props) =>
    props.darkMode ? props.theme.dark.primary : props.theme.light.primary};
  color: ${(props) =>
    props.darkMode ? props.theme.dark.text : props.theme.light.text};
  position: relative;
`;