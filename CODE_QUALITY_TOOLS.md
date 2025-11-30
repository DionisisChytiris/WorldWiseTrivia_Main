# Code Quality Tools Documentation

## Overview

This document explains the code quality tools configured for the WorldWiseTrivia project: **ESLint**, **Prettier**, and **Husky**. These tools work together to ensure consistent code style, catch potential bugs, and maintain code quality standards.

---

## 📋 Table of Contents

1. [ESLint](#eslint)
2. [Prettier](#prettier)
3. [Husky](#husky)
4. [Troubleshooting](#troubleshooting)
5. [Usage Guide](#usage-guide)

---

## 🔍 ESLint

### What is ESLint?

ESLint is a static code analysis tool that identifies problematic patterns and enforces coding standards in JavaScript and TypeScript code. It helps catch bugs before they reach production and ensures consistent code style across the team.

### Configuration

**File:** `.eslintrc.js`

Our ESLint configuration includes:

- **Expo preset**: Optimized for React Native/Expo projects
- **TypeScript support**: `@typescript-eslint/parser` and `@typescript-eslint/eslint-plugin`
- **React rules**: React and React Hooks best practices
- **React Native rules**: Platform-specific linting rules
- **Prettier integration**: Disables formatting rules that conflict with Prettier

### Key Rules Enabled

```javascript
{
  // TypeScript
  '@typescript-eslint/no-explicit-any': 'warn',           // Warns on 'any' types
  '@typescript-eslint/no-unused-vars': 'warn',            // Warns on unused variables
  
  // React
  'react/react-in-jsx-scope': 'off',                      // Not needed in React 17+
  'react/prop-types': 'off',                              // Using TypeScript instead
  
  // React Native
  'react-native/no-unused-styles': 'warn',                // Warns on unused styles
  'react-native/split-platform-components': 'warn',       // Encourages platform-specific components
  'react-native/no-inline-styles': 'warn',                // Prefers StyleSheet over inline styles
  
  // React Hooks
  'react-hooks/rules-of-hooks': 'error',                  // Enforces Rules of Hooks
  'react-hooks/exhaustive-deps': 'warn',                  // Warns on missing dependencies
}
```

### Usage

```bash
# Check for linting errors
npm run lint

# Automatically fix linting errors (where possible)
npm run lint:fix
```

### What ESLint Catches

- Unused variables and imports
- Incorrect React Hooks usage
- TypeScript type issues
- React Native best practices violations
- Potential bugs and code smells

---

## 💅 Prettier

### What is Prettier?

Prettier is an opinionated code formatter that automatically formats your code to ensure consistent style. It removes all original styling and ensures that all outputted code conforms to a consistent style.

### Configuration

**File:** `.prettierrc.js`

Our Prettier configuration:

```javascript
{
  semi: true,                    // Use semicolons
  trailingComma: 'es5',         // Trailing commas where valid in ES5
  singleQuote: true,             // Use single quotes
  printWidth: 100,               // Line length before wrapping
  tabWidth: 2,                   // 2 spaces for indentation
  useTabs: false,               // Use spaces, not tabs
  arrowParens: 'avoid',         // Omit parens when possible in arrow functions
  bracketSpacing: true,         // Spaces between brackets
  endOfLine: 'lf',              // Unix-style line endings
}
```

### Usage

```bash
# Format all files
npm run format

# Check if files are formatted (CI/CD)
npm run format:check
```

### What Prettier Does

- Formats code automatically
- Ensures consistent indentation
- Standardizes quotes and semicolons
- Wraps long lines appropriately
- Formats JSON, Markdown, and other files

---

## 🐕 Husky

### What is Husky?

Husky is a tool that makes it easy to use Git hooks. Git hooks are scripts that run automatically at certain points in your Git workflow (e.g., before commits, before pushes). We use Husky to run code quality checks before commits.

### Configuration

**File:** `.husky/pre-commit`

Our pre-commit hook runs `lint-staged`, which executes ESLint and Prettier on only the files that are staged for commit. This ensures:

1. Only changed files are checked (faster)
2. Code is automatically formatted before commit
3. Linting errors prevent bad code from being committed

**File:** `.lintstagedrc.js`

```javascript
{
  '*.{js,jsx,ts,tsx}': [
    'eslint --fix',      // Fix linting errors
    'prettier --write',  // Format code
  ],
  '*.{json,md,yml,yaml}': [
    'prettier --write',  // Format non-code files
  ],
}
```

### How It Works

1. You stage files with `git add`
2. You run `git commit`
3. Husky intercepts the commit
4. `lint-staged` runs ESLint and Prettier on staged files
5. If there are unfixable errors, the commit is blocked
6. If everything passes, the commit proceeds

### Internet Connection & Husky

**❓ Question: Is there an issue with Husky because of internet connection?**

**✅ Answer: No, Husky does NOT require an internet connection to work.**

Husky runs entirely locally on your machine. It:
- Uses locally installed npm packages
- Runs scripts from your `node_modules` folder
- Does not make any network requests
- Works completely offline

**However**, if you're setting up Husky for the first time or installing dependencies, you will need internet to:
- Install Husky: `npm install --save-dev husky`
- Install other dependencies: `npm install`

Once installed, Husky works completely offline.

### Troubleshooting Husky

**Problem:** Husky hooks not running
- **Solution:** Run `npm run prepare` (or `npx husky install`) to set up Git hooks

**Problem:** "command not found: husky"
- **Solution:** Make sure Husky is installed: `npm install --save-dev husky`

**Problem:** Pre-commit hook fails
- **Solution:** Fix the linting/formatting errors shown in the terminal

**Problem:** Want to skip hooks temporarily
- **Solution:** Use `git commit --no-verify` (not recommended, but available)

### Bypassing Hooks (Not Recommended)

If you absolutely need to bypass hooks (e.g., emergency hotfix):

```bash
git commit --no-verify -m "Emergency fix"
```

⚠️ **Warning:** Only use this in emergencies. The hooks are there to maintain code quality.

---

## 🔧 Troubleshooting

### ESLint Errors

**Error:** "Cannot find module '@typescript-eslint/parser'"
- **Solution:** Run `npm install --save-dev @typescript-eslint/parser @typescript-eslint/eslint-plugin`

**Error:** "Parsing error: Unexpected token"
- **Solution:** Make sure your file has the correct extension (`.ts` or `.tsx`)

**Error:** Too many warnings/errors
- **Solution:** Run `npm run lint:fix` to auto-fix many issues

### Prettier Issues

**Issue:** Prettier formatting conflicts with ESLint
- **Solution:** Make sure `eslint-config-prettier` is installed and included in ESLint config

**Issue:** Prettier not formatting files
- **Solution:** Check `.prettierignore` - files might be excluded

### Husky Issues

**Issue:** Pre-commit hook not running
- **Solution 1:** Check if `.husky/pre-commit` file exists and is executable
- **Solution 2:** Run `npm run prepare` to reinstall hooks
- **Solution 3:** Check Git version (Husky requires Git 2.9+)

**Issue:** "Permission denied" on `.husky/pre-commit`
- **Solution (Linux/Mac):** Run `chmod +x .husky/pre-commit`
- **Solution (Windows):** Usually not needed, but check file permissions

---

## 📖 Usage Guide

### Daily Workflow

1. **Make changes** to your code
2. **Stage files**: `git add .`
3. **Commit**: `git commit -m "Your message"`
   - Husky automatically runs ESLint and Prettier
   - If errors are found, fix them and commit again
4. **Push**: `git push`

### Manual Formatting

If you want to format files before committing:

```bash
# Format all files
npm run format

# Check formatting without changing files
npm run format:check
```

### Manual Linting

If you want to check for linting errors:

```bash
# Check for errors
npm run lint

# Auto-fix errors
npm run lint:fix
```

### IDE Integration

**VS Code:**
- Install "ESLint" extension
- Install "Prettier" extension
- Enable "Format on Save" in settings

**Other IDEs:**
- Most modern IDEs have ESLint and Prettier plugins
- Configure them to use your project's config files

---

## 📚 Additional Resources

- [ESLint Documentation](https://eslint.org/docs/latest/)
- [Prettier Documentation](https://prettier.io/docs/en/)
- [Husky Documentation](https://typicode.github.io/husky/)
- [lint-staged Documentation](https://github.com/okonet/lint-staged)

---

## ✅ Summary

| Tool | Purpose | Runs When | Requires Internet |
|------|---------|-----------|-------------------|
| **ESLint** | Find and fix code issues | On commit (via Husky) or manually | ❌ No (uses local packages) |
| **Prettier** | Format code consistently | On commit (via Husky) or manually | ❌ No (uses local packages) |
| **Husky** | Run Git hooks | On Git events (commit, push, etc.) | ❌ No (runs locally) |

**All three tools work completely offline once installed!** 🎉

---

**Last Updated:** 2025-01-27  
**Maintained by:** Development Team

