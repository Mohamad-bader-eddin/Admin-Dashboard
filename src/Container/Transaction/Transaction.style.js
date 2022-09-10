import styled from "styled-components";
import { device } from "../../Style/device";

export const Transactions = styled.div `
  padding: 0 20px 50px;

  .cellWrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .image {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    margin: 0 10px;
    object-fit: cover;
  }
  .status {
    padding: 5px;
    border-radius: 5px;
    &.Approved {
      color: green;
      background-color: rgba(0, 128, 0, 0.151);
    }
    &.Pending {
      color: goldenrod;
      background-color: rgba(189, 189, 3, 0.103);
    }
  }

  @media ${device.mobileS} {
    padding: 0;
  }
`;