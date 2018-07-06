// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  extends: [
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    'plugin:vue/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    // 'generator-star-spacing': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    "indent": [2, 2, { "SwitchCase": 1 }],
    "quotes": [2, "single"],
    "linebreak-style": [2, "unix"],
    "semi": [2, "always"],
    "max-len": ["error", { "code": 120 }],
    "brace-style": ["error", "stroustrup"],
    "comma-dangle": ["error", {
      "arrays": "always-multiline",
      "objects": "always-multiline",
      "imports": "always-multiline",
      "exports": "always-multiline",
      "functions": "ignore"
    }],

    "no-multiple-empty-lines": [2, { "max": 1, "maxBOF": 1, "maxEOF": 1 }],
    "no-param-reassign": 1,
    "no-mixed-operators": 0,
    "no-plusplus": 0,

    "import/extensions": [2, { "js": "never" }],
    "import/no-extraneous-dependencies": ["error", { "devDependencies": true }],
    "import/no-named-as-default": 0,

    "function-paren-newline": ["error", "consistent"],
    "arrow-parens": "off",

    "object-curly-spacing": ["error", "always"],
    "object-curly-newline": ["error", { "consistent": true }]
  }
};
