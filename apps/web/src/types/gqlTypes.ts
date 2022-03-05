/**
 *  ⚠️ DO NOT EDIT ⚠️
 *  This file is automatically generated. Run "yarn codegen" to update.
 */

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  Boolean: boolean;
  Float: number;
  ID: string;
  Int: number;
  String: string;
};

export type Company = {
  __typename?: 'Company';
  city: Scalars['String'];
  id: Scalars['ID'];
  logo: Scalars['String'];
  name: Scalars['String'];
  specialties: Array<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  companies: Array<Company>;
};
