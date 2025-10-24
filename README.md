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

`gen-express-cli` is a powerful and modern alternative to the default `express-generator`, designed to help you build structured, scalable, and production-ready Express applications—fast.

With just a single command, it scaffolds a clean, opinionated project layout powered by TypeScript, ESM, testing, validation, environment configs, and more. Whether you're building a quick prototype or a maintainable backend for a real-world product, gen-express-cli provides everything you need to get started—without the boilerplate.

Forget the chaos of manually setting up tools and project structure. This CLI gives you best practices out of the box, while keeping the flexibility and simplicity of Express.

## ✨ Features

- 📦 Full ESM Support (TypeScript module: NodeNext)
- 📂 Organized Folder Structure (controllers, services, routes, middlewares, etc.)
- 🧠 TypeScript with ready‑to‑use build scripts
- 🧰 ESLint v9 (Flat Config) & Prettier preconfigured
- 🧪 Unit Testing with Jest (ESM‑ready setup)
- 🛣️ Path Aliases (`#src/`) with runtime resolution
- 🐳 Dockerfile for production builds
- ⚙️ Environment Config Setup
- ✅ Request Validation (with zod)
- 🧾 Logger (with winston) & Error Handling

## 📂 Quick Start

```bash
# Default (TypeScript)
npx gen-express-cli@latest <project-name>

# For JavaScript
npx gen-express-cli@latest <project-name> --javascript
```

```bash
npm run dev           # for development
npm run start         # for production
npm run build         # for typescript build
npm run lint          # for eslint
npm run lint:fix      # for eslint fix
npm run format        # for prettier
npm run format:check  # for prettier check
npm run type-check    # for typescript type check
npm run test          # for unit test
npm run test:cov      # for test coverage
```

```bash
docker build -t <image-name>:<image-tag> .
docker run -p 8000:8000 <image-name>:<image-tag>
```

## 📂 Folder Structure

```bash

```

## 📚 License

This project is licensed under the terms of the MIT license.

## 🤝 Contributing

Contributions, issues and feature requests are welcome! Feel free to give your feedback and give me a star if you like this project.
