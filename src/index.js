import { createFilter } from '@rollup/pluginutils'
import minify from 'minify-html-literals'

const { minifyHTMLLiterals } = minify

function minifyHTML (pluginOptions = {}) {
  const { include, exclude, options } = pluginOptions
  return {
    name: 'minify-html-template-literals',
    transform (code, id) {
      if (include || exclude) {
        const filter = createFilter(include, exclude)
        if (!filter(id)) return null
      }
      return minifyHTMLLiterals(code, { fileName: id, ...options })
    }
  }
}

export default minifyHTML
