import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { FC } from 'react';
import { ThemeProvider } from 'styled-components';

import Header from './components/Header';
import { config } from './config';
import CompaniesListPage from './pages/CompaniesList.page';
import GlobalStyle from './styles/GlobalStyle';
import { theme } from './styles/theme';

const client = new ApolloClient({
  uri: config.gqlUrl,
  cache: new InMemoryCache()
});

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <GlobalStyle />
        <Header />
        <CompaniesListPage />
      </ApolloProvider>
    </ThemeProvider>
  );
};

export default App;
