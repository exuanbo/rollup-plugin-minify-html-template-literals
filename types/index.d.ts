import { Plugin } from 'rollup'
import { FilterPattern } from '@rollup/pluginutils'
import { DefaultOptions } from 'minify-html-literals'

/**
 * Rollup plugin for minify HTML template literal strings.
 * @param pluginOptions
 * @returns Plugin instance.
 */
export default function minifyHTML (pluginOptions?: {
  /**
   * A picomatch pattern, or array of patterns, which specifies the files in the build the plugin should operate on.
   */
  include?: FilterPattern
  /**
   * A picomatch pattern, or array of patterns, which specifies the files in the build the plugin should ignore.
   */
  exclude?: FilterPattern
  /**
   * Minify options, see https://www.npmjs.com/package/minify-html-literals#options.
   */
  options?: DefaultOptions
}): Plugin
