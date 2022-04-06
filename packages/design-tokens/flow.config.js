const vars = require('./utils/vars')

module.exports = {
  parsers: vars.parsers,
  source: [
    'tokens/base/*.yaml',
    'tokens/public/flow/color.yaml',
    'tokens/public/flow/lightColors.yaml',
  ],
  platforms: {
    js: {
      ...vars.es6,
      buildPath: 'build/flow/',
    },
    common: {
      ...vars.commonjs,
      buildPath: 'build/flow/common/',
    },
    ts: {
      ...vars.ts,
      buildPath: 'build/flow/',
    },
    css: {
      ...vars.css,
      buildPath: 'build/flow/css/',
    },
    scss: {
      ...vars.scss,
      buildPath: 'build/flow/scss/',
    },
  },
}
