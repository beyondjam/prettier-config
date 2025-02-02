# @beyondjam/prettier-config

Shared Prettier configuration with organized imports support.

## Installation

Using pnpm (recommended)
```bash
pnpm add -D @beyondjam/prettier-config
```

> **Note for pnpm users**: Create or update `.npmrc` in your project root with:
> ```
> public-hoist-pattern[]=*prettier*
> ```
> This ensures Prettier plugins are properly hoisted and can be found by Prettier.

Using npm

```bash
npm install --save-dev @beyondjam/prettier-config
```

Using yarn
```bash
yarn add -D @beyondjam/prettier-config
```

> **Note**: Prettier and prettier-plugin-organize-imports are included as dependencies and will be installed automatically.

## Usage

Add this to your `package.json`:

```json
{
"prettier": "@beyondjam/prettier-config"
}
```

Or if you need to customize the configuration, create a `.prettierrc.js`:

```js
module.exports = {
...require('@beyondjam/prettier-config'),
// Your overrides here
}
```

## Features

- Automatic import organization via prettier-plugin-organize-imports
- Standard Prettier formatting rules
- TypeScript support
- Zero configuration required

## License

MIT © [Serhii Bondarenko](https://github.com/beyondjam)