module.exports = {
  root: true,
  env: {
    node: true,
    es2024: true,
    browser: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    lib: ['esnext'],
    ecmaVersion: 'latest',
    sourceType: 'module',
    tsconfigRootDir: './',
    project: ['./tsconfig.json']
  },
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'standard-with-typescript',
    'plugin:react/recommended',
    'plugin:github/recommended',
    'plugin:lodash/recommended',
    'plugin:regexp/recommended',
    'plugin:sonarjs/recommended',
    'plugin:promise/recommended',
    'plugin:eslint-comments/recommended',
    'plugin:jsonc/recommended-with-json',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking'
  ],
  plugins: [
    'pure',
    'react',
    'github',
    'lodash',
    'regexp',
    'sonarjs',
    'unicorn',
    'promise',
    'immutable',
    'no-secrets',
    'json-format',
    'optimize-regex',
    '@typescript-eslint',
    'write-good-comments'
  ],
  settings: {
    react: {
      version: 'detect'
    },
    'import/resolver': {
      typescript: {},
      node: {
        paths: ['src'],
        extensions: ['.js', '.ts', '.tsx', '.jsx'],
        moduleDirectory: ['node_modules', 'src/']
      }
    }
  },
  rules: {
    'i18n-text/no-en': 0,
    'no-invalid-this': 0,
    indent: [
      'error',
      2,
      {
        SwitchCase: 1
      }
    ],
    'import/no-namespace': 0,
    'github/array-foreach': 0,
    semi: ['error', 'never'],
    quotes: ['error', 'single'],
    'no-shadow': 'off',
    'github/no-then': 0,
    'promise/always-return': 0,
    'lodash/prefer-lodash-method': 0,
    '@typescript-eslint/no-shadow': 'warn',
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/triple-slash-reference': 0,
    '@typescript-eslint/strict-boolean-expressions': 0,
    '@typescript-eslint/space-before-function-paren': 0,
    'filenames/match-regex': [2, '^[a-z_.]+$', true],
    'linebreak-style': [
      'error',
      process.platform === 'win32' ? 'windows' : 'unix'
    ]
  }
}
