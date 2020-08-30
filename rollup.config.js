const pkg = require('./package.json')

export default {
  input: 'src/index.js',
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
