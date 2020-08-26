import { createFilter } from '@rollup/pluginutils'
import minify from 'minify-html-literals'

/**
 * https://github.com/exuanbo/rollup-plugin-minify-html-template-literals#options
 * @param {Object} [pluginOptions]
 * @param {string[]} [pluginOptions.include] - minimatch of files to minify
 * @param {string[]} [pluginOptions.exclude] - minimatch of files not to minify
 * @param {Object} [pluginOptions.options] - minify-html-literals options https://www.npmjs.com/package/minify-html-literals#options
 */
function minifyHTML(pluginOptions = {}) {
  pluginOptions.filter = createFilter(pluginOptions.include, pluginOptions.exclude)
  const options = pluginOptions.options || {}
  return {
    name: 'minify-html-template-literals',
    transform(code, id) {
      if (!pluginOptions.filter(id)) return null
      return minify.minifyHTMLLiterals(code, { fileName: id, ...options })
    }
  }
}

export default minifyHTML
