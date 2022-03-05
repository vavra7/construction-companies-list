import styled from 'styled-components';

export const Row = styled.div.attrs({ className: 'row' })`
  display: grid;
  gap: ${({ theme }) => theme.gutter};
  grid-template-columns: repeat(12, 1fr);

  & + .row {
    margin-top: ${({ theme }) => theme.gutter};
  }
`;
