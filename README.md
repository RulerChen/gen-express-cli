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

## 📘 Introduction

`gen-express-cli` is a alternative to `express-generator` with more features and easy to use. It is a command line tool that helps you to generate a new express project with TypeScript, ESM, Docker, Prettier, ESLint, Jest, Swagger, and Path Alias.

## ✨ Features

- 📦 **Easy to use**
- 📦 **TypeScript Support**
- 📦 **ESM Support**
- 📦 **Docker Support**
- 📦 **Prettier & ESLint Support**
- 📦 **Jest Support (Unit Test)**
- 📦 **Swagger Support**
- 📦 **Path Alias**

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

docker build -t <image-name> .
```

## 📖 Usage

![Usage](/docs/usage.png)

```bash
npx gen-express-cli --help

Usage: gen-express-cli [project-name]

Options:
  -v, --version                     output the current version
  -t, --template <template-name>    choose express template (choices: "javascript", "typescript")
  -l, --linter                      choose linter (default: false)
  -u, --unit-test <unit-test-name>  choose unit test (choices: "jest", "none")
  -a, --api-doc                     use swagger for API documentation (default: false)
  -d, --docker                      use docker for containerization (default: false)
  -al, --alias                      use alias for import (default: false)
  -m  --manager <package-manager>   choose package manager (choices: "npm", "yarn")
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
├─ .dockerignore
├─ .env
├─ .env.development
├─ .eslintrc.json
├─ .gitignore
├─ .prettierrc.json
├─ apidoc.json
├─ Dockerfile
├─ jest.config.ts
├─ package-lock.json
├─ package.json
├─ process.env.d.ts
├─ README.md
├─ swagger.ts
└─ tsconfig.json
```

## 📦 Dependencies

```json
[
  "dependencies": {
    "cors": "^2",
    "cross-env": "^7",
    "dotenv": "^16",
    "express": "^4",
    "swagger-ui-express": "^5"
  },
  "devDependencies": {
    "nodemon": "^3",
    "typescript": "~5.3",
    "ts-node": "^10",
    "@types/cors": "^2",
    "@types/express": "^4",
    "@types/node": "^20",
    "eslint": "^8",
    "@typescript-eslint/eslint-plugin": "^6",
    "eslint-config-prettier": "^9",
    "eslint-config-standard-with-typescript": "^43",
    "eslint-plugin-import": "^2",
    "eslint-plugin-n": "^16",
    "eslint-plugin-prettier": "^5",
    "eslint-plugin-promise": "^6",
    "prettier": "^3",
    "eslint-plugin-jest": "^27",
    "jest": "^29",
    "ts-jest": "^29",
    "@types/jest": "^29",
    "swagger-autogen": "^2",
    "@types/swagger-ui-express": "^4",
    "tsc-alias": "^1",
    "tsconfig-paths": "^4",
    "typescript-transform-paths": "^3"
  }
]
```

## 📚 License

This project is licensed under the terms of the MIT license.

## 🤝 Contributing

Contributions, issues and feature requests are welcome! Feel free to give your feedback and give me a star if you like this project.
