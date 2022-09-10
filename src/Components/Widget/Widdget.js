import styled from "styled-components";

export const BoxContent = styled.div `
  padding: 10px 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Left = styled.div `
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  .title {
    line-height: 2;
    color: #777;
    margin-bottom: 10px;
    text-transform: uppercase;
  }

  .link {
    text-decoration: underline;
    font-weight: bold;
    color: #4988b9;
    margin-top: 10px;
    cursor: pointer;
  }
`;

export const Right = styled.div `
  display: flex;
  align-items: flex-end;
  flex-direction: column;
`;

export const Precentage = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  color: ${(props) => (props.posotive ? "green" : "red")};
`;

export const Icon = styled.div `
  margin-top: 15px;

  .icon {
    width: 30px;
    height: 30px;
  }
`;