<div align="center">

# ⚡ scratch-ext

> Scaffolding for Javascript/Typescript Scratch extensions.

[![Visitors](https://hits.dwyl.com/FurryR/scratch-ext.svg?style=flat-square)](http://github.com/FurryR/scratch-ext)

[🇺🇸](./README.md) | [🇨🇳](./README_zh-CN.md)

</div>

## 👾 Features

- 📄 Allows you writing in Typescript with type descriptions.
- 🩷 Supports Turbowarp, Eureka, and Gandi IDE.
- 😎 Out-of-box eslint (`npm run lint`) & prettier (`npm run format`) support.
- 🐱 Auto-format to match Turbowarp's format.
- 💫 Third-party module support & blazing-fast.

## 🧪 Usage

1. 🛠️ Use this template repository.
2. 🔽 Clone and install.

```bash
git clone git@github.com:<Your GitHub Username>/<Your Repository Name>.git <Extension Directory> && cd <Extension Directory>
npm install
```

3. 🎉 Tada!

## ❓ Something you need to change

In `package.json`:

```javascript
{
  "name": "scratch-ext", // Replace this with your extension's name
  "version": "1.0.0", // Replace this with your extension's version (or use `npm version major|minor|patch` to change)
  "description": "Scaffolding for Javascript/Typescript Scratch extensions", // Replace this with your extension's description
  "main": "dist/index.js",
  "scripts": {
    // ...
  },
  "author": "FurryR", // Replace this with your extension's author
  "license": "MIT", // Replace this with your extension's license (MPL-2.0 is recommended)
  "devDependencies": {
    // ...
  }
}
```

In `tsconfig.json`:

```javascript
{
  "compilerOptions": {
    // ...
  },
  "include": [
    "node_modules/@turbowarp/types/types/scratch-vm-extension.d.ts",
    "types/universal.d.ts",
    "types/turbowarp.d.ts", // Add this for better experience on Turbowarp, plz remove it if you only want to write Gandi-only extensions
    "types/gandi.d.ts", // Add this for better experience on Gandi IDE, plz remove it if you want to write Turbowarp-only extensions
    "src/**/*",
    "tsup.config.ts",
    "package.json"
  ]
}
```

In `tsup.config.ts`:

```typescript
import { defineConfig } from 'tsup'

export default defineConfig({
  name: 'scratch-ext', // Replace it with your extension name
  entry: ['src/index.ts', 'src/index.js'],
  target: ['esnext'],
  format: ['iife'],
  outDir: 'dist',
  banner: {
    // Replace it with your extension's metadata (for Turbowarp)
    js: `// Name: FurryR's example Extension
// ID: newExtension
// Description: Scaffolding for Advanced Scratch extensions.
// By: You
// Original: Me
// License: MPL-2.0
`
  },
  platform: 'browser',
  clean: true
})
```

## 🐺 Command shortcuts

### 🤖 Lint & Format

- Check for typing: `npm run lint:type`
- Check for format: `npm run lint:format` (Fix: `npm run format`)
- Check for eslint: `npm run lint` (Fix: `npm run fix`)

### 🛠️ Build

- Build: `npm run build`
- Build for Turbowarp (format to match its prettier): `npm run build:turbowarp`
- Development server: `npm run start` (Extension: `http://localhost:8080/index.global.js`)

---

<div align="center">

_`This project is licensed under the MIT license.`_

[NOTICE](./NOTICE.md)

❤️

</div>
