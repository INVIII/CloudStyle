module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
  },
  globals: {
    define: true,
    require: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
    '@vue/typescript/recommended',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'prettier/@typescript-eslint',
  ],
  'parser': '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      globalReturn: true,
      jsx: true
    },
    allowImportExportEverywhere: true
  },

  rules: {
    strict: [2, 'never'],
    'no-multi-spaces': 0,
    'spaced-comment': 0,
    'no-multi-assign': 0,
    //Import rules
    'import/extensions': [
      2,
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        mjs: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    'import/no-extraneous-dependencies': 0,
    'import/no-named-as-default-member': 0,
    'import/prefer-default-export': 0,
    //Keeping below till idea supports these codestyles
    'object-curly-spacing': 0,

    //ts related rules
    indent: 0,
    '@typescript-eslint/indent': 0,
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/camelcase': 0,
    'import/no-webpack-loader-syntax': 0,
    '@typescript-eslint/prefer-interface': 0,
    'import/no-cycle': 1,
    'react/prop-types': 0,
    // '@typescript-eslint/ban-ts-ignore': 1,
    '@typescript-eslint/explicit-function-return-type': [1, {
      allowTypedFunctionExpressions: true,
    }],
    '@typescript-eslint/no-this-alias': 0,
    'import/no-unresolved': [
      2,
      { caseSensitive: false },
    ],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'import/no-named-as-default': 0,
    'linebreak-style': ['error', process.platform === 'win32' ? 'windows' : 'unix'],
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/no-empty-function': 0,
  },
    "settings": {
      "import/resolver": {
        "node": {
          "extensions": [".js", ".jsx", ".ts", ".tsx"]
        }
      }
    },
};
