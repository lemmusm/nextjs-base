module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "standard-with-typescript", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: "tsconfig.eslint.json",
    tsconfigRootDir: __dirname,
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ["react", "react-hooks", "@typescript-eslint"],
  rules: {
    "no-console": "warn",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "error",
    "react/self-closing-comp": "error",
    "no-restricted-imports": "error",
    "no-case-declarations": "off",
    "react/prop-types": "off",
    "react/display-name": "off",
    camelcase: "warn",
    "no-param-reassign": ["error", { props: false }],
    "no-nested-ternary": "error",
    "no-use-before-define": "off",
    "newline-before-return": "error",
    "no-empty-function": "error",
    "no-var": "error",
    "prefer-const": "error",
    "no-multi-spaces": "error",
    "no-mixed-spaces-and-tabs": "error",
    "key-spacing": "error",
    "no-spaced-func": "error",
    "one-var-declaration-per-line": "error",
    "default-case": "error",
    curly: "error",
    "no-implicit-coercion": "error",
    "no-return-assign": "error",
    "require-await": "error",
    "prefer-arrow-callback": "error",
    "import/no-unresolved": "off",
    "import/named": "off",
    "import/default": "error",
    "import/namespace": "error",
    "import/no-self-import": "error",
    "import/no-cycle": "error",
    "import/no-relative-parent-imports": "error",
    "import/no-absolute-path": "error",
    "import/no-dynamic-require": "error",
    "import/no-useless-path-segments": "error",
    "import/export": "error",
    "import/no-named-as-default": "error",
    "import/no-named-as-default-member": "error",
    "import/no-deprecated": "error",
    "import/no-extraneous-dependencies": "error",
    "import/no-mutable-exports": "error",
    "import/no-unused-modules": "error",
    "import/first": "error",
    "import/no-duplicates": "error",
    "import/order": "error",
    "import/newline-after-import": "error",
    "import/no-named-default": "error",
    "import/no-anonymous-default-export": "error",
    "@typescript-eslint/no-shadow": "error",
    "@typescript-eslint/adjacent-overload-signatures": "error",
    "@typescript-eslint/array-type": "error",
    "@typescript-eslint/await-thenable": "error",
    "@typescript-eslint/ban-types": "error",
    "@typescript-eslint/class-literal-property-style": "error",
    "@typescript-eslint/consistent-type-assertions": "error",
    "@typescript-eslint/explicit-function-return-type": "error",
    "@typescript-eslint/explicit-member-accessibility": "error",
    "@typescript-eslint/member-ordering": "error",
    "@typescript-eslint/method-signature-style": "error",
    "@typescript-eslint/no-base-to-string": "error",
    "@typescript-eslint/no-dynamic-delete": "error",
    "@typescript-eslint/no-empty-interface": "error",
    "@typescript-eslint/no-extra-non-null-assertion": "error",
    "@typescript-eslint/no-extraneous-class": "error",
    "@typescript-eslint/no-for-in-array": "error",
    "@typescript-eslint/no-implied-eval": "error",
    "@typescript-eslint/no-inferrable-types": "error",
    "@typescript-eslint/no-invalid-void-type": "off",
    "@typescript-eslint/no-misused-new": "error",
    "@typescript-eslint/no-misused-promises": "off",
    "@typescript-eslint/no-namespace": "error",
    "@typescript-eslint/no-non-null-asserted-optional-chain": "error",
    "@typescript-eslint/no-non-null-assertion": "error",
    "@typescript-eslint/no-parameter-properties": "error",
    "@typescript-eslint/no-require-imports": "error",
    "@typescript-eslint/no-this-alias": "error",
    "@typescript-eslint/no-throw-literal": "error",
    "@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
    "@typescript-eslint/no-unnecessary-condition": "off",
    "@typescript-eslint/no-unnecessary-qualifier": "error",
    "@typescript-eslint/no-unnecessary-type-arguments": "error",
    "@typescript-eslint/no-unnecessary-type-assertion": "error",
    "@typescript-eslint/no-var-requires": "error",
    "@typescript-eslint/prefer-as-const": "error",
    "@typescript-eslint/prefer-for-of": "error",
    "@typescript-eslint/prefer-function-type": "error",
    "@typescript-eslint/prefer-includes": "error",
    "@typescript-eslint/prefer-namespace-keyword": "error",
    "@typescript-eslint/prefer-optional-chain": "error",
    "@typescript-eslint/prefer-reduce-type-parameter": "error",
    "@typescript-eslint/prefer-regexp-exec": "error",
    "@typescript-eslint/prefer-string-starts-ends-with": "error",
    "@typescript-eslint/prefer-ts-expect-error": "error",
    "@typescript-eslint/promise-function-async": "error",
    "@typescript-eslint/require-array-sort-compare": "error",
    "@typescript-eslint/restrict-plus-operands": "error",
    "@typescript-eslint/switch-exhaustiveness-check": "error",
    "@typescript-eslint/triple-slash-reference": "error",
    "@typescript-eslint/type-annotation-spacing": "error",
    "@typescript-eslint/unbound-method": "error",
    "@typescript-eslint/unified-signatures": "error",
    "@typescript-eslint/brace-style": "error",
    "@typescript-eslint/comma-spacing": "error",
    "@typescript-eslint/default-param-last": "error",
    "@typescript-eslint/dot-notation": "error",
    "@typescript-eslint/func-call-spacing": "error",
    "@typescript-eslint/init-declarations": "error",
    "@typescript-eslint/keyword-spacing": "error",
    "@typescript-eslint/no-array-constructor": "error",
    "@typescript-eslint/no-dupe-class-members": "error",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-use-before-define": "error",
    "@typescript-eslint/no-useless-constructor": "error",
    "@typescript-eslint/require-await": "off",
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-unsafe-call": "off",
    "@typescript-eslint/no-unsafe-return": "off",
    "@typescript-eslint/no-unsafe-assignment": "off",
    "@typescript-eslint/no-unsafe-member-access": "off",
    "@typescript-eslint/no-unsafe-argument": "off",
  },
  overrides: [
    {
      files: ["**/*.js"],
      rules: {
        "@typescript-eslint/explicit-function-return-type": "off",
        "@typescript-eslint/explicit-member-accessibility": "off",
        "newline-before-return": "off",
        camelcase: "off",
        "prettier/prettier": "off",
        "no-undef": "off",
        "@typescript-eslint/class-name-casing": "off",
        "@typescript-eslint/camelcase": "off",
        "@typescript-eslint/restrict-plus-operands": "off",
        "@typescript-eslint/no-unnecessary-condition": "off",
        "@typescript-eslint/unbound-method": "off",
        "@typescript-eslint/restrict-template-expressions": "off",
        "@typescript-eslint/no-unnecessary-boolean-literal-compare": "off",
        "@typescript-eslint/dot-notation": "off",
        "@typescript-eslint/prefer-nullish-coalescing": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/init-declarations": "off",
        "@typescript-eslint/no-misused-promises": "off",
        "no-empty-function": "off",
        "no-nested-ternary": "off",
        "@typescript-eslint/promise-function-async": "off",
        "@typescript-eslint/no-require-imports": "off",
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/no-base-to-string": "off",
        "@typescript-eslint/no-unsafe-assignment": "off",
        "@typescript-eslint/no-unsafe-call": "off",
        "@typescript-eslint/no-unsafe-return": "off",
        "@typescript-eslint/explicit-module-boundary-types": "off",
        "@typescript-eslint/no-unsafe-member-access": "off",
        "@typescript-eslint/no-floating-promises": "off",
        "@typescript-eslint/no-shadow": "off",
        "import/named": "off",
        "import/default": "off",
        "import/namespace": "off",
        "import/no-self-import": "off",
        "import/no-cycle": "off",
        "import/no-relative-parent-imports": "off",
        "import/no-absolute-path": "off",
        "import/no-dynamic-require": "off",
        "import/no-useless-path-segments": "off",
        "import/export": "off",
        "import/no-named-as-default": "off",
        "import/no-named-as-default-member": "off",
        "import/no-deprecated": "off",
        "import/no-extraneous-dependencies": "off",
        "import/no-mutable-exports": "off",
        "import/no-unused-modules": "off",
        "import/first": "off",
        "import/exports-last": "off",
        "import/no-duplicates": "off",
        "import/order": "off",
        "import/newline-after-import": "off",
        "import/no-named-default": "off",
        "import/no-anonymous-default-export": "off",
        "@typescript-eslint/no-unsafe-argument": "off",
      },
    },
    {
      files: ["./**/*.stories.tsx"],
      rules: {
        "import/no-anonymous-default-export": "off",
        "@typescript-eslint/explicit-function-return-type": "off",
      },
    },
    {
      files: ["./src/generated/*"],
      rules: {
        "@typescript-eslint/no-explicit-any": "off",
        "@typescript-eslint/no-shadow": "off",
      },
    },
  ],
};
