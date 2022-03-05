import { gql } from '@apollo/client';

export const companiesQuery = gql`
  query Companies {
    companies {
      id
      city
      logo
      name
      specialties
    }
  }
`;
