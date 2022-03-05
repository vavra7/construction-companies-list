import { Inject, Service } from 'typedi';

import { CompanyRepository } from '../repositories/Company.repository';
import { CompanyModel } from '../types/models';

@Service()
export class CompanyService {
  @Inject()
  private repository: CompanyRepository;

  public async getAll(): Promise<CompanyModel[]> {
    return this.repository.findAll();
  }
}
