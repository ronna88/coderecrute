import * as Dialog from "@radix-ui/react-dialog";
import styled from "styled-components";

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`;

export const Title = styled(Dialog.Title)`
  color: #fff;
  font-size: 16px;
  float: left !important;

  div + & {
    margin-top: 16px;
  }
`;

export const Close = styled(Dialog.Close)`
  float: right;
  border: none;
  background: none;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`;

export const Content = styled(Dialog.Content)`
  min-width: 686px;
  border-radius: 6px;
  padding: 40px 48px;
  background: #202024;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  form {
    display: flex;
    flex-direction: column;

    input {
      width: 403px;
      height: 54px;
      border-radius: 6px;
      border: none;
      padding: 8px;
      background: #121214;
      color: #c1c1c1;
      margin-top: 16px;
    }

    textarea {
      width: 403px;
      border-radius: 6px;
      border: none;
      padding: 8px;
      background: #121214;
      color: #c1c1c1;
      margin-top: 16px;
    }

    & button:last-child {
      margin: 32px auto;
    }
  }
`;

export const Button = styled.button`
  background: #00875f;
  border-radius: 6px;
  height: 58px;
  width: 439px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #00b37e;
    transition: background-color 0.5s;
  }
`;
