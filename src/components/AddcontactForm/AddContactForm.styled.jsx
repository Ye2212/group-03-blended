import styled from "styled-components";
export const Form = styled.form`
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const Label = styled.label`
  margin: 0 10px 5px;
  font-size: 12px;
`;

export const Input = styled.input`
width: 250px;
height: 25px;
border-radius: 3px;
padding-left: 4px;
padding-right: 4px;
&::placeholder {
  font: inherit;
}
  }
`;

export const Button = styled.button`
  margin: 20px auto 0;
  background-color: #61dafb;
  width: 45px;
  height: 45px;
   border: none;
  border-radius: 50%;
  font-weight: 700;
  transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);
  &: hover,
  &: focus {
    background-color: #38d2fc;
  }
`;
