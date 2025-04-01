import path from "node:path";
import url from "node:url";

import { FlatCompat } from "@eslint/eslintrc";
import prettier from "eslint-config-prettier";
import unicorn from "eslint-plugin-unicorn";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript", "prettier"),
  {
    ignores: [".contentlayer", ".next", "public/time-travel", "next-env.d.ts"],
  },
  unicorn.configs.all,
  prettier,
  {
    files: [
      "**/*.ts",
      "**/*.mts",
      "**/*.tsx",
      "**/*.js",
      "**/*.mjs",
      "**/*.jsx",
    ],
    linterOptions: {
      reportUnusedDisableDirectives: "error",
    },
    rules: {
      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          fixStyle: "inline-type-imports",
        },
      ],
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          args: "all",
          argsIgnorePattern: "^_",
          ignoreRestSiblings: true,
          caughtErrors: "all",
        },
      ],
      "func-names": ["error", "always"],
      "func-name-matching": [
        "error",
        "always",
        {
          considerPropertyDescriptor: true,
        },
      ],
      "func-style": ["error", "expression"],
      "import/consistent-type-specifier-style": ["error", "prefer-inline"],
      "import/no-extraneous-dependencies": ["error"],
      "import/no-useless-path-segments": [
        "error",
        {
          noUselessIndex: true,
        },
      ],
      "import/order": [
        "warn",
        {
          pathGroupsExcludedImportTypes: ["unknown"],
          "newlines-between": "always",
          alphabetize: {
            order: "asc",
          },
        },
      ],
      "no-restricted-imports": [
        "error",
        {
          paths: [
            {
              name: "react",
              allowImportNames: ["default"],
              message: "Only React default import is allowed.",
            },
          ],
          patterns: [
            {
              regex: String.raw`(\.{1,2}\/)(\.{2}\/)*(\.+[^./]+[^/]*|[^./][^/]*)\/`,
              message: "Deep relative imports are not allowed.",
            },
          ],
        },
      ],
      quotes: [
        "error",
        "double",
        {
          avoidEscape: true,
          allowTemplateLiterals: false,
        },
      ],
      "sort-imports": [
        "error",
        {
          ignoreDeclarationSort: true,
          memberSyntaxSortOrder: ["all", "single", "multiple", "none"],
        },
      ],
      "unicorn/filename-case": [
        "error",
        {
          cases: {
            camelCase: true,
            pascalCase: true,
          },
        },
      ],
      "unicorn/no-null": "off",
      "unicorn/no-keyword-prefix": "off",
      "unicorn/prefer-json-parse-buffer": "off",
      "unicorn/prevent-abbreviations": [
        "error",
        {
          replacements: {
            args: false,
            props: false,
            ref: false,
          },
          allowList: {
            generateStaticParams: true,
            urlSearchParams: true,
          },
        },
      ],
    },
  },
  {
    files: ["**/*.tsx", "**/*.jsx"],
    rules: {
      "react/jsx-curly-brace-presence": [
        "warn",
        {
          props: "always",
          children: "never",
        },
      ],
      "react/jsx-sort-props": [
        "warn",
        {
          callbacksLast: true,
          shorthandLast: true,
          ignoreCase: true,
          reservedFirst: true,
        },
      ],
    },
  },
];

export default eslintConfig;
