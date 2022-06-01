const postcssJitProps = require("postcss-jit-props");
const OpenProps = require("open-props");
const postcssNesting = require("postcss-nesting");
const postcssImport = require("postcss-import");
const combineSelectors = require("postcss-combine-duplicated-selectors");
const postcssSorting = require("postcss-sorting");
const customMedia = require("postcss-custom-media");
const cssNano = require('cssnano')

module.exports = {
  plugins: [
    postcssImport(),
    postcssJitProps(OpenProps),
    customMedia(),
    postcssNesting(),
    combineSelectors(),
    postcssSorting(),
    // cssNano()
  ],
};
