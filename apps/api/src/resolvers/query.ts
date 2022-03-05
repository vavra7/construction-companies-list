import Container from 'typedi';

import { CompanyService } from '../services/Company.service';
import { Resolvers } from '../types/gqlTypes';

const companyService = Container.get(CompanyService);

export const Query: Resolvers['Query'] = {
  companies: () => {
    return companyService.getAll();
  }
};
