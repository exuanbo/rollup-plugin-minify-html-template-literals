const rollup = require('rollup').rollup
const minifyHTML = require('..')
const expect = require('chai').expect
const path = require('path')
const fs = require('fs')

process.chdir(__dirname)

const concat = (name, subdir) => {
  let filePath = path.join(__dirname, subdir, name)
  filePath = filePath.replace(/\\/g, '/')
  if (!path.extname(filePath)) {
    filePath += '.js'
  }
  return filePath
}

const test = async (file, fileExp, pluginOpts = {}) => {
  const filePath = concat(file, 'fixtures')
  const bundle = await rollup({
    input: filePath,
    plugins: [minifyHTML(pluginOpts)]
  })
  const output = await bundle.generate({ format: 'es' })

  const code = output.output[0].code
  const expected = fileExp === null ? null : fs.readFileSync(concat(fileExp || file, 'expected'), 'utf8')
  return expect(code).to.equal(expected)
}

describe('rollup-plugin-minify-html-template-literals', () => {
  it('works for me', () => {
    test('default')
  })
})
