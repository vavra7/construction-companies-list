import { FC } from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  box-shadow: 0 1px 5px rgba(0, 0, 1, 0.5);
  background-color: ${({ theme }) => theme.colors.primary};
`;

const StyledLogo = styled.span`
  display: inline-block;
  color: #fff;
  font-weight: bold;
  padding: 16px;
`;

const Header: FC = () => {
  return (
    <StyledHeader>
      <StyledLogo>Construction Companies</StyledLogo>
    </StyledHeader>
  );
};

export default Header;
