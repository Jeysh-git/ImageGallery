module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      legacyDecorators: true
    }
  },
  plugins: [
    'ember'
  ],
  extends: [
    'eslint:recommended',
    'plugin:ember/recommended'
  ],
  env: {
    browser: true
  },
  globals: {
    server: true,
    window: true,
    Appcues: true
  },
  rules: {
    'no-debugger': ['error'],
    'no-dupe-keys': ['error'],
    'no-duplicate-case': ['error'],
    'no-empty': ['error'],
    'no-extra-semi': ['error'],
    'no-inner-declarations': ['error'],
    'no-invalid-regexp': ['error'],
    'no-irregular-whitespace': ['error'],
    'accessor-pairs': ['error'],
    'curly': ['error'],
    'dot-location': ['error'],
    'dot-notation': ['error'],
    'eqeqeq': ['error', 'always'],
    'guard-for-in': ['error'],
    'no-alert': ['error'],
    'no-caller': ['error'],
    'no-restricted-globals': ['error'],
    'indent': ['error', 2],
    'keyword-spacing': ['error'],
    'key-spacing': ['error'],
    'comma-dangle': ['error', 'never'],
    'comma-spacing': ['error'],
    'comma-style': ['error'],
    'computed-property-spacing': ['error'],
    'line-comment-position': ['error', {
      'position': 'above'
    }],
    'no-continue': ['error'],
    'no-trailing-spaces': ['error'],
    'no-var': ['error'],
    'no-eval': ['error'],
    'no-return-assign': 0,
    'wrap-iife': 0,
    'operator-linebreak': 0,
    'no-empty': ['error'],
    'no-new': 1,
    'no-plusplus': 0,
    'no-invalid-regexp': 1,
    'no-useless-escape': 0,
    'quotes': ['warn', 'single', {
      'avoidEscape': true
    }],
    'ember/avoid-leaking-state-in-ember-objects': ['off'],
    'ember/jquery-ember-run': ['off'],
    'ember/no-function-prototype-extensions': ['off'],
    'ember/closure-actions': ['off'],
    'ember/no-observers': ['off'],
    'ember/use-brace-expansion': ['off'],
    'ember/no-incorrect-calls-with-inline-anonymous-functions': ['off'],
    'ember/no-deeply-nested-dependent-keys-with-each': ['off'],
    'ember/require-return-from-computed': ['off'],
    'ember/new-module-imports': ['warn'],
    'ember/no-duplicate-dependent-keys': ['off'],
    'ember/no-ember-testing-in-module-scope': ['off'],
    'ember/no-side-effects': ['warn'],
    'ember/no-unnecessary-route-path-option': ['warn'],
    'ember/no-on-calls-in-components': ['off'],
    'ember/require-super-in-init': ['warn'],
    'ember/no-new-mixins': ['off']
  },
  overrides: [
    // node files
    {
      files: [
        '.eslintrc.js',
        '.template-lintrc.js',
        'ember-cli-build.js',
        'testem.js',
        'blueprints/*/index.js',
        'config/**/*.js',
        'lib/*/index.js',
        'Gruntfile.js'
      ],
      parserOptions: {
        sourceType: 'script'
      },
      env: {
        browser: false,
        node: true
      },
      plugins: ['node'],
      rules: {
        ...require('eslint-plugin-node').configs.recommended.rules, // add your custom rules and overrides for node files here

        // this can be removed once the following is fixed
        // https://github.com/mysticatea/eslint-plugin-node/issues/77
        'node/no-unpublished-require': 'off'
      }
    }
  ]
};