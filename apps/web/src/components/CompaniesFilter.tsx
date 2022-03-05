import React, { FC, useMemo, useState } from 'react';

import { Company } from '../types/gqlTypes';
import Checkbox from './inputsAndControls/Checkbox';
import Input from './inputsAndControls/Input';

interface CompaniesFilterProps {
  children: (filteredData: Company[] | undefined) => React.ReactNode;
  data?: Company[];
}

const CompaniesFilter: FC<CompaniesFilterProps> = ({ children, data }) => {
  const [searchFilter, setSearchFilter] = useState<string>('');
  const [specialtiesFilter, setSpecialtiesFilter] = useState<string[]>([]);

  const specialtiesList = useMemo<string[]>(() => {
    const list: string[] = [];
    data?.forEach(company =>
      company.specialties.forEach(speciality => {
        !list.includes(speciality) && list.push(speciality);
      })
    );
    return list;
  }, [data]);

  const filteredData = useMemo<Company[] | undefined>(() => {
    if (!data) return;
    let _filteredData = data;
    if (searchFilter) {
      _filteredData = _filteredData.filter(company =>
        company.name.toLowerCase().includes(searchFilter.toLowerCase())
      );
    }
    if (specialtiesFilter.length) {
      _filteredData = _filteredData.filter(company =>
        specialtiesFilter.every(spec => company.specialties.includes(spec))
      );
    }
    return _filteredData;
  }, [data, searchFilter, specialtiesFilter]);

  return (
    <>
      <Input
        id="companies-search-input"
        label="Search"
        name="search"
        onChange={e => setSearchFilter(e.target.value)}
        type="search"
        value={searchFilter}
      />
      {specialtiesList?.map(listItem => (
        <Checkbox
          id={`company-${listItem.toLowerCase()}-checkbox`}
          key={listItem}
          label={listItem}
          name={listItem}
          onChange={e => {
            if (e.target.checked) {
              setSpecialtiesFilter(specs => [...specs, listItem]);
            } else {
              setSpecialtiesFilter(specs => specs.filter(spec => spec !== listItem));
            }
          }}
          value={specialtiesFilter.includes(listItem)}
        />
      ))}
      {children(filteredData)}
    </>
  );
};

export default CompaniesFilter;
