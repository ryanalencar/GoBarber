module.exports = {
  env: {
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:prettier/recommended',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [
      'off',
      { extensions: ['.js', '.jsx', '.tsx', '.jsx'] },
    ],
    'import/prefer-default-export': 'off',
    'jsx-quotes': ['error', 'prefer-single'],
    'react/jsx-props-no-spreading': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'no-unused-vars': 'warn',
    'react/forbid-prop-types': 'off',
    'no-undef': 'off',
    'no-param-reassign': 'off',
    'consistent-return': 'off',
    camelcase: 'off',
    'react/prop-types': 'warn',
  },
}
