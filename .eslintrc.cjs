/* eslint-env node */
module.exports = {
  root: true,

  /* ---------------------------------------------------- *
   * 1.  Global parser / environment
   * ---------------------------------------------------- */
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  env: {
    browser: true,
    es2024: true,
    node: true,
  },

  /* ---------------------------------------------------- *
   * 2.  Shared plugins & presets
   * ---------------------------------------------------- */
  plugins: ['react', 'react-hooks', '@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'plugin:prettier/recommended', // makes Prettier show as ESLint rules
  ],

  /* ---------------------------------------------------- *
   * 3.  React version autodetect
   * ---------------------------------------------------- */
  settings: {
    react: {
      version: 'detect',
    },
  },

  /* ---------------------------------------------------- *
   * 4.  General rule tweaks
   * ---------------------------------------------------- */
  rules: {
    // Example: allow JSX in .tsx only
    'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],

    // Prefer arrow callbacks in JSX (optional preference)
    'react/jsx-handler-names': 'off',

    // TypeScript: turn off rules that clash with TS compiler
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],

    // Consistent component definitions
    'react/function-component-definition': ['error', { namedComponents: 'arrow-function' }],
  },

  /* ---------------------------------------------------- *
   * 5.  Per-file overrides
   * ---------------------------------------------------- */
  overrides: [
    /* — Vitest test files — */
    {
      files: ['**/*.test.{ts,tsx}', '**/*.spec.{ts,tsx}'],
      env: { jest: true }, // Vitest provides Jest globals
      plugins: ['vitest'],
      extends: ['plugin:vitest/recommended'],
      rules: {
        // Allow any expect assertions inside tests
        '@typescript-eslint/ban-ts-comment': 'off',
      },
    },

    /* — Vite / ESLint config files — */
    {
      files: ['vite.config.*', '.eslintrc.cjs'],
      env: { node: true },
      rules: {
        'import/no-default-export': 'off',
      },
    },
  ],

  /* ---------------------------------------------------- *
   * 6.  Ignore patterns (optional)
   * ---------------------------------------------------- */
  ignorePatterns: ['dist', 'coverage', '.idea', '*.d.ts'],
};
