# rollup-plugin-minify-html-template-literals

[![npm](https://img.shields.io/npm/v/rollup-plugin-minify-html-template-literals.svg?style=flat-square)](https://www.npmjs.com/package/rollup-plugin-minify-html-template-literals)
[![Travis CI](https://img.shields.io/travis/com/exuanbo/rollup-plugin-minify-html-template-literals/master.svg?style=flat-square)](https://travis-ci.com/github/exuanbo/rollup-plugin-minify-html-template-literals)
[![David](https://img.shields.io/david/exuanbo/rollup-plugin-minify-html-template-literals.svg?style=flat-square)](https://david-dm.org/exuanbo/rollup-plugin-minify-html-template-literals)
[![License](https://img.shields.io/github/license/exuanbo/rollup-plugin-minify-html-template-literals.svg?style=flat-square)](https://github.com/exuanbo/rollup-plugin-minify-html-template-literals/blob/master/LICENSE)

Uses minify-html-literals to minify HTML and CSS markup inside JavaScript template literal strings.

This plugin supports Rollup v2.

## Usage

```js
import minifyHTML from 'rollup-plugin-minify-html-template-literals'
import babel from '@rollup/plugin-babel'
import { terser } from "rollup-plugin-terser"

export default {
  input: 'index.js',
  output: { file: 'dist/index.js' },
  plugins: [
    minifyHTML(),
    // Order plugin before transpilers and other minifiers
    babel(),
    terser()
  ]
}
```

By default, this will minify any tagged template literal string whose tag contains "html" or "css" (case insensitive). [Additional options](https://www.npmjs.com/package/minify-html-literals#options) may be specified to control what templates should be minified.

## Options

```js
export default {
  input: 'index.js',
  output: { file: 'dist/index.js' },
  plugins: [
    minifyHTML({
      // minimatch of files to minify
      include: [],
      // minimatch of files not to minify
      exclude: [],
      // minify-html-literals options
      // https://www.npmjs.com/package/minify-html-literals#options
      options: null
    })
  ]
}
```

## License

[MIT](https://github.com/exuanbo/rollup-plugin-minify-html-template-literals/blob/master/LICENSE)

## Donate

<a href="https://www.buymeacoffee.com/exuanbo" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/lato-orange.png" alt="Buy Me A Coffee" height="38.25px" width="162.75px"></a>
