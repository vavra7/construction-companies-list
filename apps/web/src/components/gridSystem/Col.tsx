import styled from 'styled-components';

type ColSpan =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | '1'
  | '2'
  | '3'
  | '4'
  | '5'
  | '6'
  | '7'
  | '8'
  | '9'
  | '10'
  | '11'
  | '12';

export interface ColProps {
  lg?: ColSpan;
  md?: ColSpan;
  sm?: ColSpan;
  xs?: ColSpan;
}

export const Col = styled.div.attrs({ className: 'col' })<ColProps>`
  grid-column: span 12;
  ${props =>
    props.xs
      ? `
        @media (min-width: ${props.theme.breakPoints.xs}) {
          grid-column: span ${props.xs};
        }
      `
      : ''}
  ${props =>
    props.sm
      ? `
        @media (min-width: ${props.theme.breakPoints.sm}) {
          grid-column: span ${props.sm};
        }
      `
      : ''}
  ${props =>
    props.md
      ? `
        @media (min-width: ${props.theme.breakPoints.md}) {
          grid-column: span ${props.md};
        }
      `
      : ''}
  ${props =>
    props.lg
      ? `
        @media (min-width: ${props.theme.breakPoints.lg}) {
          grid-column: span ${props.lg};
        }
      `
      : ''}
`;
