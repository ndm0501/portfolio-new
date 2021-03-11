module.exports = {
  'env': {
    'browser': true,
    'es6': true,
    'node': true
  },
  'extends': ['eslint:recommended', 'plugin:react/recommended',],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly'
  },
  'parserOptions': {
    'ecmaVersion': 2018,
    'sourceType': 'module'
  },
  rules: {
    quotes: ['error', 'single'],
    // we want to force semicolons
    semi: ['error', 'always'],
    // we use 2 spaces to indent our code
    indent: ['error', 2],
    // we want to avoid useless spaces
    'no-multi-spaces': ['error'],
    'react/jsx-indent':['error', 2],
    'react/jsx-indent-props': ['error', 2]
  },
};
