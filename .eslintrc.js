module.exports = {
  parserOptions: {
    project: './tsconfig.json'
  },
  extends: [
    'standard-with-typescript',
    'react-app',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:eslint-comments/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:promise/recommended',
    'plugin:import/recommended',
    'plugin:react/recommended',
    'plugin:unicorn/recommended',
    'plugin:jest/recommended',
    'plugin:prettier/recommended',
    'prettier/react',
    'prettier/@typescript-eslint'
  ],
  env: {
    node: true,
    jest: true,
    browser: true
  },
  rules: {
    // Next.js does not need React to be in the scope
    'react/react-in-jsx-scope': 0,

    // common abbreviations are known such as props
    'unicorn/prevent-abbreviations': 0,

    // typescript types are used for props validations
    'react/prop-types': 0,

    // helps in creating better organised components
    'react/destructuring-assignment': 2
  }
}
