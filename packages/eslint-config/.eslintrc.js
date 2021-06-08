module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: false
  },
  extends: [
    'plugin:react/recommended',
    'standard',
    'prettier/standard',
    'prettier/react',
    // 'plugin:import/errors',
    // 'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
    // project: 'packages/*'
  },
  plugins: ['prettier', 'react', 'react-hooks', 'jsx-a11y', 'import'],
  rules: {
    'class-methods-use-this': 'off',
    'generator-star-spacing': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'import/no-unresolved': 'error',
    'no-console': 'warn',
    'no-use-before-define': 'off',
    'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx', '.tsx'] }],
    'react/react-in-jsx-scope': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'space-before-function-paren': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-empty-function': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-this-alias': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-empty-interface': 'off',
    'multiline-ternary': 'off'
  },
  overrides: [
    {
      files: ['*.ts'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': ['error'],
        '@typescript-eslint/no-empty-function': ['error'],
        '@typescript-eslint/no-var-requires': ['error'],
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/no-this-alias': ['warn'],
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-unused-vars': [
          'warn',
          { varsIgnorePattern: '^_', argsIgnorePattern: '^_' }
        ]
      }
    }
  ],
  settings: {
    react: {
      version: 'detect'
    },
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    // 'import/parsers': {
    //   '@typescript-eslint/parser': ['.ts', '.tsx']
    // },
    'import/resolver': {
      typescript: {
        // alwaysTryTypes: true,
        project: ['./tsconfig.json', 'packages/**/tsconfig.json']
      },
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      },
    }
    // workspaces: {
    //   extensions: ['.mjs', '.js', '.ts', '.tsx', '.json'],
    //   sources: {
    //     '#/*': ['packages/server/src/*'],
    //     '~/*': ['packages/frontend/src/*'],
    //     '@/*': ['packages/reactadmin/src/*']
    //   }
    // }
  }
}
