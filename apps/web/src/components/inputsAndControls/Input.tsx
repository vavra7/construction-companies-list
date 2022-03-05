import { ChangeEvent, FC } from 'react';
import styled from 'styled-components';

const StyledLabel = styled.label`
  font-size: 12px;
`;

const StyledInput = styled.input`
  width: 100%;
  font-size: 16px;
  padding: 8px 4px;
  border: none;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 4px;

  &:focus,
  &:focus-visible {
    outline: 1px solid #000;
  }
`;

export interface InputProps {
  disabled?: boolean;
  id?: string;
  label: string;
  name: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: 'search' | 'text' | 'password' | 'number';
  value?: string | number;
}

const Input: FC<InputProps> = ({
  disabled = false,
  id,
  label,
  name,
  onChange,
  type = 'text',
  value
}) => {
  return (
    <>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <StyledInput
        autoComplete="off"
        disabled={disabled}
        id={id}
        name={name}
        onChange={onChange}
        type={type}
        value={value}
      />
    </>
  );
};

export default Input;
