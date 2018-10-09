# umi-plugin-pnp

Umi plugin to support Plug'n'Play of yarn.

## Usage

Configure in `.umirc.js`,

```js
export default {
  plugins: [
    ['umi-plugin-pnp', { alias: true }],
  ],
}
```

## Options

* `alias` -- default `false`, set webpack alias for `@babel/runtime`, `core-js` and `regenerator-runtime`, or you will need to install these dependencies in your project

## Example

* [Example](./example)

## LICENSE

MIT
