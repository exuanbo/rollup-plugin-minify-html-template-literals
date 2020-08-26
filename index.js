import { createFilter } from '@rollup/pluginutils'
import minify from 'minify-html-literals'

export default function minifyHTML(pluginOptions = {}) {
  if (!pluginOptions.filter) {
    pluginOptions.filter = createFilter(pluginOptions.include, pluginOptions.exclude)
  }

  const options = pluginOptions.options || {}
  return {
    name: 'minify-html-template-literals',
    transform(code, id) {
      if (!pluginOptions.filter(id)) return null
      return minify.minifyHTMLLiterals(code, { fileName: id, ...options })
    }
  }
}
