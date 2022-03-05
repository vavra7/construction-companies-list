import React, { ChangeEvent, FC } from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  margin: 8px;
`;

const StyledLabel = styled.label`
  user-select: none;
`;

export interface CheckboxProps {
  id?: string;
  label: string;
  name: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: boolean;
}

const Checkbox: FC<CheckboxProps> = ({ id, label, name, onChange, value }) => {
  return (
    <div>
      <StyledInput checked={value} id={id} name={name} onChange={onChange} type="checkbox" />
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
    </div>
  );
};

export default Checkbox;
