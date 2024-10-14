/**
/**
 * @type {import('eslint').ESLint.ConfigData}
 */


module.exports = {
  root: true,
  ignorePatterns: ['*'], // Ignore all files
  env: { browser: true, es2020: true },
  plugins: ['perfectionist', 'unused-imports', 'prettier'],
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'prettier',
    'plugin:storybook/recommended',
  ],
  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 'latest',
    ecmaFeatures: { jsx: true },
    project: './client/tsconfig.json', // Path to tsconfig.json in the client folder
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: './client/tsconfig.json',
      },
    },
  },
  overrides: [
    {
      files: ['src/**/*.{ts,tsx,js,jsx}'], // Only apply ESLint to source files
      parserOptions: {
        project: './client/tsconfig.json', // Pointing to the tsconfig.json within client
      },
    },
  ],
  rules: {
    'no-alert': 'off',
    'no-console': 'off',
    'no-unused-vars': 'off',
    // Your existing rules
  },
};
