// Initially configured on 07-23-2019 with ESLint version 6.1.0
// ESLint Configs
// =============================================================================
const parser = 'babel-eslint';
const parserOptions = {
  sourceType: 'module',
  ecmaVersion: 2018,
  ecmaFeatures: {
    jsx: true,
  },
};

const env = {
  es6: true,
  node: true,
  browser: true,
  jasmine: true,
  jest: true,
};

const plugins = ['react', 'react-hooks', 'import'];

const settings = {
  'import/extensions': ['.js', '.jsx', '.json', '.css'],
  react: {
    version: 'detect',
  },
};

// Possible Errors
// =============================================================================
const rulesPossibleErrors = {
  'for-direction': 2,
  'getter-return': 2,
  'no-async-promise-executor': 2,
  'no-await-in-loop': 0,
  'no-compare-neg-zero': 2,
  'no-cond-assign': 2,
  'no-console': 2,
  'no-constant-condition': 2,
  'no-control-regex': 2,
  'no-debugger': 2,
  'no-dupe-args': 2,
  'no-dupe-keys': 2,
  'no-duplicate-case': 2,
  'no-empty': 2,
  'no-empty-character-class': 2,
  'no-ex-assign': 2,
  'no-extra-boolean-cast': 2,
  'no-extra-parens': 0,
  'no-extra-semi': 2,
  'no-func-assign': 2,
  'no-inner-declarations': 2,
  'no-invalid-regexp': 2,
  'no-irregular-whitespace': 2,
  'no-obj-calls': 2,
  'no-prototype-builtins': 0,
  'no-regex-spaces': 2,
  'no-sparse-arrays': 2,
  'no-template-curly-in-string': 2,
  'no-unexpected-multiline': 2,
  'no-unreachable': 2,
  'no-unsafe-finally': 2,
  'no-unsafe-negation': 2,
  'require-atomic-updates': 2,
  'use-isnan': 2,
  'valid-typeof': 2,
};

// Best Practices
// =============================================================================
const rulesBestPractices = {
  'accessor-pairs': 0,
  'array-callback-return': 2,
  'block-scoped-var': 2,
  'class-methods-use-this': 0,
  complexity: 0,
  'consistent-return': 2,
  curly: [2, 'multi-line', 'consistent'],
  'default-case': 2,
  'dot-location': [2, 'property'],
  'dot-notation': 2,
  eqeqeq: [2, 'always', { null: 'ignore' }],
  'guard-for-in': 2,
  'max-classes-per-file': 0,
  'no-alert': 2,
  'no-caller': 2,
  'no-case-declarations': 2,
  'no-div-regex': 2,
  'no-else-return': 2,
  'no-empty-function': 2,
  'no-empty-pattern': 2,
  'no-eq-null': 0,
  'no-eval': 2,
  'no-extend-native': 2,
  'no-extra-bind': 2,
  'no-extra-label': 2,
  'no-fallthrough': 0,
  'no-floating-decimal': 2,
  'no-global-assign': 2,
  'no-implicit-coercion': 0,
  'no-implicit-globals': 2,
  'no-implied-eval': 2,
  'no-invalid-this': 2,
  'no-iterator': 2,
  'no-labels': 2,
  'no-lone-blocks': 2,
  'no-loop-func': 2,
  'no-magic-numbers': 0,
  'no-multi-spaces': 0,
  'no-multi-str': 2,
  'no-new': 2,
  'no-new-func': 2,
  'no-new-wrappers': 2,
  'no-octal': 2,
  'no-octal-escape': 2,
  'no-param-reassign': 0,
  'no-proto': 2,
  'no-redeclare': 2,
  'no-restricted-properties': 2,
  'no-return-assign': [2, 'except-parens'],
  'no-return-await': 2,
  'no-script-url': 2,
  'no-self-assign': 2,
  'no-self-compare': 2,
  'no-sequences': 2,
  'no-throw-literal': 2,
  'no-unmodified-loop-condition': 2,
  'no-unused-expressions': 0,
  'no-unused-labels': 2,
  'no-useless-call': 2,
  'no-useless-catch': 2,
  'no-useless-concat': 2,
  'no-useless-escape': 2,
  'no-useless-return': 2,
  'no-void': 2,
  'no-warning-comments': 0,
  'no-with': 2,
  'prefer-promise-reject-errors': 0,
  radix: 2,
  'require-await': 2,
  'require-unicode-regexp': 0,
  'vars-on-top': 2,
  'wrap-iife': 2,
  yoda: 2,
};

// Strict Mode
// =============================================================================
const rulesStrictMode = {
  strict: 0,
};

// Variables
// =============================================================================
const rulesVariables = {
  'init-declarations': 0,
  'no-delete-var': 2,
  'no-label-var': 2,
  'no-restricted-globals': 0,
  'no-shadow': 0,
  'no-shadow-restricted-names': 2,
  'no-undef': 2,
  'no-undef-init': 2,
  'no-undefined': 2,
  'no-unused-vars': [
    2,
    {
      vars: 'all',
      args: 'after-used',
    },
  ],
  'no-use-before-define': [2, { functions: false }],
};

// Node.js and CommonJS
// =============================================================================
const rulesNodeJSandCommonJS = {
  'callback-return': 0,
  'global-require': 0,
  'handle-callback-err': 0,
  'no-mixed-requires': 2,
  'no-new-require': 2,
  'no-path-concat': 2,
  'no-process-env': 0,
  'no-process-exit': 0,
  'no-restricted-modules': 0,
  'no-sync': 0,
};

// ECMAScript 6
// =============================================================================
const rulesECMAScript6 = {
  'arrow-body-style': 0,
  'arrow-parens': 0,
  'arrow-spacing': [
    2,
    {
      before: true,
      after: true,
    },
  ],
  'constructor-super': 2,
  'generator-star-spacing': 0,
  'no-class-assign': 2,
  'no-confusing-arrow': 0,
  'no-const-assign': 2,
  'no-dupe-class-members': 2,
  'no-duplicate-imports': 2,
  'no-new-symbol': 2,
  'no-restricted-imports': 0,
  'no-this-before-super': 2,
  'no-useless-computed-key': 2,
  'no-useless-constructor': 2,
  'no-useless-rename': 2,
  'no-var': 2,
  'object-shorthand': 0,
  'prefer-arrow-callback': 0,
  'prefer-const': [2, { destructuring: 'all' }],
  'prefer-destructuring': [
    2,
    {
      array: false,
      object: true,
    },
    {
      enforceForRenamedProperties: false,
    },
  ],
  'prefer-numeric-literals': 0,
  'prefer-rest-params': 2,
  'prefer-spread': 2,
  'prefer-template': 2,
  'require-yield': 2,
  'rest-spread-spacing': [2, 'never'],
  'sort-imports': 0,
  'symbol-description': 2,
  'template-curly-spacing': [2, 'never'],
  'yield-star-spacing': 0,
};

// React
// =============================================================================
const rulesPluginReact = {
  'react/display-name': 2,
  'react/jsx-boolean-value': 0,
  'react/jsx-curly-spacing': 2,
  'react/jsx-no-duplicate-props': 2,
  'react/jsx-no-undef': 2,
  'react/sort-prop-types': 2,
  'react/jsx-sort-props': 0,
  'react/jsx-uses-react': 2,
  'react/jsx-uses-vars': 2,
  'react/no-danger': 2,
  'react/no-did-mount-set-state': 2,
  'react/no-did-update-set-state': 2,
  'react/no-multi-comp': 0,
  'react/no-unknown-property': 2,
  'react/prop-types': 2,
  'react/react-in-jsx-scope': 0,
  'react/require-extension': 0,
  'react/self-closing-comp': 2,
  'react/sort-comp': 2,
  'react/jsx-wrap-multilines': 2,
  'react/no-deprecated': 2,
  'react/no-danger-with-children': 2,
  'react/no-direct-mutation-state': 2,
  'react/no-is-mounted': 2,
  'react/no-render-return-value': 2,
  'react/prefer-es6-class': 2,
  'react/require-render-return': 2,
  'react/style-prop-object': 2,
  'react/no-children-prop': 2,
  'react/no-find-dom-node': 2,
  'react/no-unescaped-entities': 2,
};

const rulesPluginReactHooks = {
  'react-hooks/rules-of-hooks': 2,
  'react-hooks/exhaustive-deps': 2,
};

// Imports
// =============================================================================
const rulesPluginImport = {
  'import/no-unresolved': [2, { commonjs: true, amd: true }],
  'import/named': 2,
  'import/default': 2,
  'import/namespace': 2,
  'import/export': 2,
  'import/no-named-as-default': 2,
  'import/no-named-as-default-member': 2,
  'import/no-mutable-exports': 2,
};

// Final composed config object
// =============================================================================
module.exports = exports = {
  extends: ['plugin:prettier/recommended'],
  parser,
  parserOptions,
  env,
  plugins,
  settings,
  rules: {
    ...rulesPossibleErrors,
    ...rulesBestPractices,
    ...rulesStrictMode,
    ...rulesVariables,
    ...rulesNodeJSandCommonJS,
    ...rulesECMAScript6,
    ...rulesPluginReact,
    ...rulesPluginReactHooks,
    ...rulesPluginImport,
  },
};
