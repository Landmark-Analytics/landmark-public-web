const sass = require('sass');
const path = require('node:path');
const htmlMin = require('html-minifier');

module.exports = function (eleventyConfig) {
  const isBuildMode = process.env.ELEVENTY_RUN_MODE === 'build';

  eleventyConfig.addPassthroughCopy('src/img');
  eleventyConfig.addPassthroughCopy('src/js');

  eleventyConfig.addTemplateFormats('scss');
  eleventyConfig.addExtension('scss', {
    outputFileExtension: 'css',
    compile: async (inputContent, inputPath) => {
      const parsedPath = path.parse(inputPath);

      //Skip include SCSS files that have a leading underscore
      if (parsedPath.name.startsWith('_')) return;

      const result = sass.compileString(inputContent, {
        loadPaths: [parsedPath.dir || '.', eleventyConfig.dir.includes],
        style: isBuildMode ? 'compressed' : 'expanded',
      });

      return async () => result.css;
    },
  });

  eleventyConfig.addTransform('htmlMin', async (content, outputPath) => {
    if (isBuildMode && (outputPath.endsWith('.html') || outputPath.endsWith('.liquid'))) {
      return htmlMin.minify(content, {
        collapseWhitespace: true,
        removeComments: true,
        useShortDoctype: true,
        minifyJS: true,
      });
    }

    return content;
  });

  return {
    dir: { input: 'src' },
  };
};
