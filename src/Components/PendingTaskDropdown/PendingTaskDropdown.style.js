import styled from "styled-components";

export const SkillName = styled.h5 `
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px 0;
  flex: 2;

  & span {
    position: relative;
    font-size: 10px;
    border: 1px solid #ccc;
    padding: 1px 3px;
    border-radius: 4px;
    background-color: #607d8b;
    color: white;
  }

  & span::before {
    content: "";
    position: absolute;
    border-style: solid;
    border-width: 4px;
    border-color: #607d8b transparent transparent transparent;
    right: 8px;
    bottom: -8px;
  }
`;

export const Progress = styled.div `
  height: 20px;
  width: 100%;
  background-color: #ddd;
  position: relative;

  & span {
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    transition: width 0.5s linear;
  }
`;