import js from '@eslint/js';
import prettier from 'eslint-plugin-prettier';
import ts from '@typescript-eslint/eslint-plugin';

export default [
  js.configs.recommended,
  ts.configs.recommended,
  {
    rules: {
      'prettier/prettier': 'error',
    },
  },
  {
    rules: {
      ...prettier.configs.recommended.rules,
    },
  },
];
