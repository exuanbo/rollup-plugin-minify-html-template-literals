const rollup  = require('rollup').rollup
const minifyHTML = require('..')
const expect = require('chai').expect
const path = require('path')
const fs = require('fs')

process.chdir(__dirname)

const concat = (name, subdir) => {
  let file = path.join(__dirname, subdir || 'expected', name)

  file = file.replace(/\\/g, '/')
  if (!path.extname(file)) {
    file += '.js'
  }

  return file
}

const testFile = (file, opts, fileExp, save) => {
  const fname = concat(file, 'fixtures')
  const expected = fileExp === null ? null : fs.readFileSync(concat(fileExp || file), 'utf8')
  const code = fs.readFileSync(fname, 'utf8')
  const promise = minifyHTML(opts).transform(code, fname)

  if (fileExp === null) {
    return expect(promise).to.be.a(null)
  }

  expect(promise).to.be.a(Promise)
  return promise.then((result) => {
    if (save && result) {
      fs.writeFileSync(concat(file + '_out'), result.code, 'utf8')
    }
    expect(result && result.code).to.equal(expected)
  })
}

describe('rollup-plugin-minify-html-template-literals', () => {
  it('works for me', async () => {
    const bundle = await rollup({
      input: './fixtures/default.js',
      plugins: [minifyHTML()]
    })
    const output = await bundle.generate({ format: 'es' })

    const code = output.output[0].code
    const expected = fs.readFileSync('expected/default.js', 'utf8')
    expect(code).to.equal(expected)
  })
})
