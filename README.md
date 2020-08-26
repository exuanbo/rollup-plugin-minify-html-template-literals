# rollup-plugin-minify-html-template-literals

[![npm](https://img.shields.io/npm/v/rollup-plugin-minify-html-template-literals.svg)](https://www.npmjs.com/package/rollup-plugin-minify-html-template-literals)

Uses minify-html-literals to minify HTML and CSS markup inside JavaScript template literal strings.

## Usage

```js
import babel from '@rollup/plugin-babel'
import minifyHTML from 'rollup-plugin-minify-html-template-literals'
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
      options: null,
      // Override rollup-pluginutils filter from include/exclude
      filter: null
    })
  ]
}
```
