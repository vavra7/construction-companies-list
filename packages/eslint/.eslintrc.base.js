module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['sort-destructure-keys', 'simple-import-sort', 'typescript-sort-keys'],
  ignorePatterns: ['.eslintrc.js', 'codegen.js'],
  rules: {
    // typescript
    '@typescript-eslint/ban-ts-comment': 0,
    '@typescript-eslint/ban-types': 0,
    '@typescript-eslint/explicit-function-return-type': [
      1,
      {
        allowExpressions: true
      }
    ],
    '@typescript-eslint/explicit-member-accessibility': [
      1,
      {
        overrides: {
          constructors: 'no-public'
        }
      }
    ],
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/member-ordering': [
      1,
      {
        default: [
          // index signature
          'signature',
          // fields
          'public-static-field',
          'protected-static-field',
          'private-static-field',
          'public-instance-field',
          'protected-instance-field',
          'private-instance-field',
          'public-abstract-field',
          'protected-abstract-field',
          'private-abstract-field',
          'public-field',
          'protected-field',
          'private-field',
          'static-field',
          'instance-field',
          'abstract-field',
          'field',
          // constructors
          'public-constructor',
          'protected-constructor',
          'private-constructor',
          'constructor',
          // methods
          'public-static-method',
          'protected-static-method',
          'private-static-method',
          'public-instance-method',
          'protected-instance-method',
          'private-instance-method',
          'public-abstract-method',
          'protected-abstract-method',
          'private-abstract-method',
          'public-method',
          'protected-method',
          'private-method',
          'static-method',
          'instance-method',
          'abstract-method',
          'method'
        ]
      }
    ],
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/no-empty-interface': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-non-null-assertion': 0,
    '@typescript-eslint/no-var-requires': 0,
    // eslint
    'no-async-promise-executor': 0,
    'no-prototype-builtins': 0,
    'prefer-const': 1,
    'prefer-rest-params': 0,
    'no-useless-escape': 0,
    // prettier
    'prettier/prettier': 1,
    // simple-import
    'simple-import-sort/exports': 1,
    'simple-import-sort/imports': 1,
    // sort-destructure-keys
    'sort-destructure-keys/sort-destructure-keys': 1,
    // typescript-sort-keys
    'typescript-sort-keys/interface': 1,
    'typescript-sort-keys/string-enum': 1
  }
};
