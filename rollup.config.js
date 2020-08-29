const pkg = require('./package.json')

export default {
  input: 'index.es.js',
  external: Object.keys(pkg.dependencies),
  output: {
    file: pkg.main,
    format: 'cjs',
    exports: 'auto'
  }
}
