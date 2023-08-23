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
  font-size: 24px;
  font-weight: 700;
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
  min-width: 631px;
  border-radius: 6px;
  padding: 40px 48px;
  background: #202024;
  height: 194px;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

`;

//export const Button = styled.button`

//`;

export const ButtonContent = styled.div`
  margin: 5%;

  button {
    background: #29292e;
    border-radius: 6px;
    height: 58px;
    width: 211.5px;
    color: #fff;
    font-size: 16px;
    font-weight: 700;
    border: none;
    cursor: pointer;
    margin: 8px;

    &:hover {
      background-color: #29292a;
      transition: background-color 0.5s;
    }
  }
`