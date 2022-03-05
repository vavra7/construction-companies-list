import styled from 'styled-components';

export const Container = styled.div.attrs({ className: 'container' })`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.gutter};
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  max-width: ${({ theme }) => theme.breakPoints.lg};
`;
