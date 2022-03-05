const base = require('./.eslintrc.base');

module.exports = {
  ...base,
  env: {
    node: false,
    browser: true
  },
  extends: [...base.extends, 'plugin:react/recommended', 'plugin:react-hooks/recommended'],
  plugins: [...base.plugins, 'react-hooks'],
  settings: {
    ...base.settings,
    react: {
      version: 'detect'
    }
  },
  rules: {
    ...base.rules,
    'react/react-in-jsx-scope': 0,
    'react/display-name': 0,
    'react/jsx-sort-props': [
      1,
      {
        callbacksLast: false,
        noSortAlphabetically: false,
        shorthandLast: false
      }
    ],
    'react/no-deprecated': 1,
    'react/prefer-es6-class': [1, 'always'],
    'react/prop-types': 0,
    'react-hooks/rules-of-hooks': 1,
    'react-hooks/exhaustive-deps': 1
  }
};
