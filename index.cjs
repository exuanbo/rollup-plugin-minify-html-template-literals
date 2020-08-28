'use strict';

var pluginutils = require('@rollup/pluginutils');
var minify = require('minify-html-literals');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var minify__default = /*#__PURE__*/_interopDefaultLegacy(minify);

/**
 * https://github.com/exuanbo/rollup-plugin-minify-html-template-literals#options
 * @param {Object} [pluginOptions]
 * @param {string[]} [pluginOptions.include] - minimatch of files to minify
 * @param {string[]} [pluginOptions.exclude] - minimatch of files not to minify
 * @param {Object} [pluginOptions.options] - minify-html-literals options https://www.npmjs.com/package/minify-html-literals#options
 */

function minifyHTML (pluginOptions = {}) {
  const options = pluginOptions.options || {};
  const { include, exclude } = pluginOptions;
  return {
    name: 'minify-html-template-literals',
    transform (code, id) {
      if (include || exclude) {
        pluginOptions.filter = pluginutils.createFilter(include, exclude);
        if (!pluginOptions.filter(id)) return null
      }
      return minify__default['default'].minifyHTMLLiterals(code, { fileName: id, ...options })
    }
  }
}

module.exports = minifyHTML;
