module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["some-other-config-you-use", "prettier"],
  parserOptions: {
    ecmaVersion: "2015",
    sourceType: "module",
  },
};
