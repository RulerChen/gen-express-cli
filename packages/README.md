<h1 align="center">GEN-EXPRESS-CLI</h1>

<div align="center">
  <img alt="logo" src="/docs/logo.png" style="width: 80%;">
</div>

<div align="center" style="display: flex; justify-content: center; gap: 10px;">
  <img alt="GitHub License" src="https://img.shields.io/github/license/RulerChen/gen-express-cli?style=for-the-badge">
  <img alt="NPM Version" src="https://img.shields.io/npm/v/gen-express-cli?style=for-the-badge&logo=npm">
  <img alt="node-current" src="https://img.shields.io/node/v/gen-express-cli?style=for-the-badge&logo=node.js">
  <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/RulerChen/gen-express-cli?style=for-the-badge&logo=github">
  <img alt="NPM Downloads" src="https://img.shields.io/npm/dt/gen-express-cli?style=for-the-badge&logo=npm">
  <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/RulerChen/gen-express-cli?style=for-the-badge&logo=github">
</div>

## ✨ Features

- 📦 **Easy to use**
- 📦 **TypeScript Support**
- 📦 **ESM Support**
- 📦 **Prettier & ESLint Support**
- 📦 **Jest Support (Unit Test)**
- 📦 **Swagger Support**

## 📂 Quick Start

```bash
npx gen-express-cli@latest <project-name>

cd <project-name>

npm run dev # for development
npm run start # for production
npm run build # for typescript build
npm run lint # for eslint
npm run format # for prettier
npm run test # for unit test
npm run swagger # for build swagger
```

## 📖 Usage

<!-- ![Usage](/docs/usage.png) -->

```bash
npx gen-express-cli --help

Usage: gen-express-cli [project-name]

Options:
  -v, --version                     output the current version
  -t, --template <template-name>    choose express template (choices: "javascript", "typescript")
  -l, --linter <linter-name>        choose linter (default: false)
  -u, --unit-test <unit-test-name>  choose unit test (choices: "jest", "none")
  -a, --api-doc                     use swagger for API documentation (default: false)
  -h, --help                        display help for command
```

## 📂 Folder Structure

```bash
├─ src
│  ├─ index.ts
│  ├─ __tests__
│  │  └─ user.spec.ts
│  ├─ controllers
│  │  └─ user.ts
│  ├─ models
│  │  └─ user.ts
│  └─ routes
│     ├─ index.ts
│     └─ user.ts
├─ .env
├─ .env.development
├─ .eslintrc.json
├─ .gitignore
├─ .prettierrc.json
├─ apidoc.json
├─ jest.config.ts
├─ package-lock.json
├─ package.json
├─ process.env.d.ts
├─ README.md
├─ swagger.ts
└─ tsconfig.json
```

## 📚 License

This project is licensed under the terms of the MIT license.

## 🤝 Contributing

Contributions, issues and feature requests are welcome! Feel free to give your feedback and give me a star if you like this project.
