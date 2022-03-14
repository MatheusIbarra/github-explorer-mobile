module.exports = {
    "parser": "@typescript-eslint/parser",
    "plugins": ["@typescript-eslint"],
    "extends": [
        "next/core-web-vitals",
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "settings": {
        "react": {
        "version": "16.13.2"
        }
    },
    "rules": {
        "import/order": ["error", {"newlines-between": "always"}],
        "quotes": ["error", "single"],
        "object-curly-spacing": ["error", "always"],
        "@typescript-eslint/no-explicit-any": "warn"
    }
}
