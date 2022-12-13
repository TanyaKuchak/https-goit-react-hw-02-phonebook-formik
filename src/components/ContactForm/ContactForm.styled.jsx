import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 25px;
  font-size: 20px;
  font-weight: 600;
`;

export const Input = styled.input`
  width: 350px;
  /* height: 40px; */
  background-color: #f1f4f6;
  font-size: 16px;
  font-weight: 600;
  border-radius: 5px;
  padding: 10px;

  :hover,
  :focus {
    background-color: #e4ffc0;
  }
`;

export const Button = styled.button`
  text-align: center;
  height: 40px;
  width: 120px;
  font-size: 16px;
  font-weight: 600;
  background-color: #a8a2f1;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  padding: 10px;
  color: white;
`;
