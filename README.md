<h1 align="center">server-toolkit</h1>
<p align="center"><strong>🔧🖥️ Modern, composable tools for writing servers in Node, Deno and Bun</strong></p>

<p align="center">
  <a href="https://www.npmjs.com/package/@peerigon/server-toolkit"><img src="https://img.shields.io/npm/v/@peerigon/server-toolkit?style=for-the-badge" alt="Version on NPM" /></a>
  <a href="https://jsr.io/@peerigon/server-toolkit"><img src="https://img.shields.io/jsr/v/@peerigon/server-toolkit?style=for-the-badge" alt="Version on JSR" /></a>
  <a href="https://github.com/semantic-release/semantic-release"><img src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=for-the-badge" alt="Semantically released" /></a>
  <a href="https://www.npmjs.com/package/@peerigon/server-toolkit"><img src="https://img.shields.io/npm/dm/@peerigon/server-toolkit?style=for-the-badge" alt="Monthly downloads on NPM" /></a>
  <a href="./LICENSE"><img src="https://img.shields.io/npm/l/@peerigon/server-toolkit?style=for-the-badge" alt="License" /></a>
</p>

<p align="center">
  Small, focused server-side utilities you import one at a time.
</p>

## Features

- 🎯 High-quality module design, focused on modern server code
- 🌐 Node-first, with Deno and Bun compatibility in mind
- ⚡ Lightweight sub-package exports
- 📦 Tree-shakeable ES modules
- 🧩 Modular and composable
- ✅ Zero dependencies

## Installation

```sh
npm install @peerigon/server-toolkit --save
```

Also available on [JSR](https://jsr.io/@peerigon/server-toolkit).

## Usage

Import only the utilities you need. Each one is exposed as its own subpath:

```ts
import { parsePort } from "@peerigon/server-toolkit/parse-port";
```

## Utilities

| Module                                     | Description                                           | Docs                            |
| ------------------------------------------ | ----------------------------------------------------- | ------------------------------- |
| [`parse-port`](./src/parse-port/README.md) | Parse and validate a TCP port from a string or number | [→](./src/parse-port/README.md) |

## License

[MIT](./LICENSE)

## Sponsors

<p align="center">
  <a href="https://peerigon.com">
    <img src="https://assets.peerigon.com/peerigon/logo/peerigon-logo-flat-spinat.png" width="150" alt="Peerigon" />
  </a>
</p>
