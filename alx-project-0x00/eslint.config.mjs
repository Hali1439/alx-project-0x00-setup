import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import next from 'eslint-plugin-next';
import tailwindcss from 'eslint-plugin-tailwindcss';

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        sourceType: 'module',
        ecmaVersion: 'latest',
        project: true,
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      react: eslintPluginReact,
      'react-hooks': eslintPluginReactHooks,
      tailwindcss,
      next,
    },
    rules: {
      // React rules
      'react/react-in-jsx-scope': 'off', // Next.js handles React import
      'react/jsx-uses-react': 'off',

      // React Hooks rules
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',

      // Tailwind CSS linting
      'tailwindcss/classnames-order': 'warn',

      // TypeScript-specific
      '@typescript-eslint/consistent-type-imports': 'warn',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
];
