import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Company {
    id: ID!
    name: String!
    logo: String!
    specialties: [String!]!
    city: String!
  }

  type Query {
    companies: [Company!]!
  }
`;
