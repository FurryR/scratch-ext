<div align="center">

# ⚡ scratch-ext

> 适用于 Javascript/Typescript Scratch 扩展的脚手架。

[![Visitors](https://hits.dwyl.com/FurryR/scratch-ext.svg?style=flat-square)](http://github.com/FurryR/scratch-ext)

[🇺🇸](./README.md) | [🇨🇳](./README_zh-CN.md)

</div>

## 👾 功能

- 📄 允许你使用 Typescript 写扩展，并附有类型注释。
- 🩷 支持 Turbowarp, Eureka 和 Gandi IDE。
- 😎 开箱即用的 eslint (`npm run lint`) 和 prettier (`npm run format`) 支持。
- 🐱 自动将扩展格式化到 Turbowarp 格式。
- 💫 第三方模块支持 & 超高速打包。

## 🧪 使用

1. 🛠️ 使用此仓库作为模板。
2. 🔽 克隆你的仓库，并安装依赖。

```bash
git clone git@github.com:<你的 GitHub 名称>/<你的 GitHub 仓库>.git <扩展目录> && cd <扩展目录>
npm install
```

3. 🎉 好耶！

## ❓ 你需要变更的一些东西

在 `package.json` 中:

```javascript
{
  "name": "scratch-ext", // 把这个改成你扩展的名字
  "version": "1.0.0", // 把这个改成你扩展的版本 (你也可以使用 `npm version major|minor|patch` 来更改版本)
  "description": "Scaffolding for Javascript/Typescript Scratch extensions", // 把这个改成你的扩展的说明
  "main": "dist/index.js",
  "scripts": {
    // ...
  },
  "author": "FurryR", // 把这个改成你的扩展的作者
  "license": "MIT", // 把这个改成你的扩展的开源协议 (推荐 MPL-2.0)
  "devDependencies": {
    // ...
  }
}
```

在 `tsconfig.json` 中:

```javascript
{
  "compilerOptions": {
    // ...
  },
  "include": [
    "node_modules/@turbowarp/types/types/scratch-vm-extension.d.ts",
    "types/universal.d.ts",
    "types/turbowarp.d.ts", // 若需要 Turbowarp 上更好的体验，请保留这一行。如果你希望写仅适配 Gandi IDE 的扩展，请删除这一行。
    "types/gandi.d.ts", // 若需要 Gandi IDE 上更好的体验，请保留这一行。如果你希望写仅适配 Turbowarp 的扩展，请删除这一行。
    "src/**/*",
    "tsup.config.ts",
    "package.json"
  ]
}
```

在 `tsup.config.ts` 中:

```typescript
import { defineConfig } from 'tsup'

export default defineConfig({
  name: 'scratch-ext', // 把这个改成你扩展的名字
  entry: ['src/index.ts', 'src/index.js'],
  target: ['esnext'],
  format: ['iife'],
  outDir: 'dist',
  banner: {
    // 把这个改成你扩展的元数据 (仅适用于 Turbowarp)
    js: `// Name: FurryR 的测试扩展
// ID: newExtension
// Description: 为了高级 Scratch 扩展的脚手架。
// By: 你
// Original: 我
// License: MPL-2.0
`
  },
  platform: 'browser',
  clean: true
})
```

## 🐺 快捷命令

### 🤖 代码问题检查 & 格式化

- 检查类型错误: `npm run lint:type`
- 检查格式化问题: `npm run lint:format` (快捷修复: `npm run format`)
- 检查代码风格（eslint）问题: `npm run lint` (快捷修复: `npm run fix`)

### 🛠️ 构建

- 构建: `npm run build`
- 为 Turbowarp 构建 (自动格式化到匹配它的 prettier): `npm run build:turbowarp`
- 开发服务器: `npm run start` (扩展位置: `http://localhost:8080/index.global.js`)

---

<div align="center">

_`此项目以 MIT 协议发行。`_

[查看 NOTICE](./NOTICE_zh-CN.md)

❤️

</div>
