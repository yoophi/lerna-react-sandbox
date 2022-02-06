import styled from "styled-components";
import Button from "@my/button";

export const Input = styled.input`
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  font-weight: 300;
  padding: 9px 36px;
  border: 1px solid #fe4784;
`;

export function InputWithButton() {
  return (
    <div>
      <Input />
      <Button>Click Me!</Button>
    </div>
  );
}
