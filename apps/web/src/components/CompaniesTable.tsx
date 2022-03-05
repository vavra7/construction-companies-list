import React, { FC } from 'react';
import styled, { css } from 'styled-components';

import { Company } from '../types/gqlTypes';
import ProgressLinear from './ProgressLinear';

const sharedPadding = css`
  padding: 8px;
`;

const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
`;

const StyledTable = styled.table`
  width: 100%;
`;

const StyledTh = styled.th`
  ${sharedPadding}
`;

const StyledTr = styled.tr`
  &:nth-child(odd) {
    background-color: ${({ theme }) => theme.colors.background};
  }
`;

const StyledTd = styled.td<{ align?: 'left' | 'center' | 'right' }>`
  ${sharedPadding}
  text-align: ${props => props.align || 'left'};
`;

const StyledImg = styled.img`
  width: 40px;
  height: auto;
  vertical-align: middle;
`;

export interface CompaniesTableProps {
  data?: Company[];
  progress: boolean;
}

const CompaniesTable: FC<CompaniesTableProps> = ({ data, progress }) => {
  return (
    <TableWrapper>
      <ProgressLinear active={progress} />
      <StyledTable>
        <thead>
          <tr>
            <StyledTh>Logo</StyledTh>
            <StyledTh>Company Name</StyledTh>
            <StyledTh>Specialties</StyledTh>
            <StyledTh>City</StyledTh>
          </tr>
        </thead>
        {data?.length ? (
          <tbody>
            {data.map(company => (
              <StyledTr key={company.id}>
                <StyledTd align="center">
                  <StyledImg src={company.logo} />
                </StyledTd>
                <StyledTd align="left">{company.name}</StyledTd>
                <StyledTd align="left">{company.specialties.join(', ')}</StyledTd>
                <StyledTd align="left">{company.city}</StyledTd>
              </StyledTr>
            ))}
          </tbody>
        ) : (
          <tbody>
            <StyledTr>
              <StyledTd align="center" colSpan={4}>
                No Data
              </StyledTd>
            </StyledTr>
          </tbody>
        )}
      </StyledTable>
    </TableWrapper>
  );
};

export default CompaniesTable;
