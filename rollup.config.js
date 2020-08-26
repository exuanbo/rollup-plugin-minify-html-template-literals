const pkg = require('./package.json')

export default {
  input: 'index.js',
  plugins: [],
  external: Object.keys(pkg.dependencies),
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'auto'
    },
    {
      file: pkg.module,
      format: 'es'
    }
  ]
}
