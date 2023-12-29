const sass = require('sass');
const path = require('node:path');

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('src/img');
  eleventyConfig.addPassthroughCopy('src/js');

  eleventyConfig.addTemplateFormats('scss');
  eleventyConfig.addExtension('scss', {
    outputFileExtension: 'css',
    compile: async function (inputContent, inputPath) {
      let parsedPath = path.parse(inputPath);

      //Skip include SCSS files that have a leading underscore
      if (parsedPath.name.startsWith('_')) return;

      let result = sass.compileString(inputContent, {
        loadPaths: [parsedPath.dir || '.', this.config.dir.includes],
      });

      return async () => result.css;
    },
  });

  return {
    dir: { input: 'src' },
  };
};
