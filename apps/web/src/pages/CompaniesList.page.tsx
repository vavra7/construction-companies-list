import { useQuery } from '@apollo/client';
import { FC } from 'react';

import { companiesQuery } from '../api/graphql';
import { CompaniesQuery, CompaniesQueryVariables } from '../api/graphql/index.types';
import CompaniesFilter from '../components/CompaniesFilter';
import CompaniesTable from '../components/CompaniesTable';
import { Col, Container, Row } from '../components/gridSystem';

const CompaniesListPage: FC = () => {
  const { data, loading } = useQuery<CompaniesQuery, CompaniesQueryVariables>(companiesQuery);

  return (
    <main>
      <Container>
        <Row>
          <Col xs={12}>
            <h1>Companies List</h1>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <CompaniesFilter data={data?.companies}>
              {filteredData => <CompaniesTable data={filteredData} progress={loading} />}
            </CompaniesFilter>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default CompaniesListPage;
