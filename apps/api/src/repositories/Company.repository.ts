import fs from 'fs';
import path from 'path';
import { Service } from 'typedi';

import { CompanyModel } from '../types/models';

@Service()
export class CompanyRepository {
  public async findAll(): Promise<CompanyModel[]> {
    const data = await new Promise<CompanyModel[]>((resolve, reject) => {
      fs.readFile(path.resolve(__dirname, '../../data.json'), (err, res) => {
        if (err) {
          reject(err);
        } else {
          resolve(JSON.parse(res.toString()));
        }
      });
    });
    return data;
  }
}
