import { FC } from 'react';
import styled, { keyframes } from 'styled-components';

const move = keyframes`
  0% {
    right: 100%;
    width: 100%;
  }
  100% {
    right: -50%;
    width: 50%;
  }
`;

const StyledWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 2px;
  overflow: hidden;
`;

const StyledBuffer = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.primary};
  animation: ${move} infinite 1s linear;
  width: 100%;
  height: 100%;
  top: 0;
`;

export interface ProgressLinearProps {
  active: boolean;
}

const ProgressLinear: FC<ProgressLinearProps> = ({ active }) => {
  return <StyledWrapper>{active && <StyledBuffer />}</StyledWrapper>;
};

export default ProgressLinear;
