// Reference: https://www.mrozilla.cz/blog/gatsby-eslint-vscode-import-alias/

const path = require('path');
const sass = require('node-sass');
const css = require('css');

const themeLocation = 'USE_BRAND_THEME' in process.env
  ? path.resolve(__dirname, '../scss/edx')
  : path.resolve(__dirname, 'src/scss/stub-theme');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '~paragon-react': path.resolve(__dirname, '../src'),
        '~paragon-style': path.resolve(__dirname, '../scss'),
        '~paragon-theme': themeLocation,
        // Prevent multiple copies of react getting loaded
        // paragon react components would naturally import
        // react and react-dom from the node_modules folder
        // one level above if it is present. This approach forces
        // all uses of react and react-dom to resolve to those
        // in ./node_modules
        'react': path.resolve(__dirname, 'node_modules/react/'),
        'react-dom': path.resolve(__dirname, 'node_modules/react-dom/'),
      },
    },
  });
};

function createCssUtilityClassNodes({ actions, createNodeId, createContentDigest }) {
  const { createNode } = actions;

  // We convert to CSS first since we prefer the real values over tokens.
  const compiledCSS = sass
      .renderSync({
        file: path.resolve(__dirname, '../scss/core/utilities-only.scss'),
        // Resolve tildes the way webpack would in our base npm project
        importer: function(url, prev, done) {
          if (url[0] === '~') {
            url = path.resolve(__dirname, '../node_modules', url.substr(1));
          }
          return { file: url };
        },
      }).css.toString();

  const sheet = css.parse(compiledCSS).stylesheet;

  sheet.rules.forEach(({
    selectors, position, declarations,
  }) => {
    if (!selectors) return;

    selectors.forEach((selector) => {
      if (selector[0] !== '.') return; // classes only

      selector = selector.substr(1);

      const nodeData = {
        selector,
        declarations: declarations.map(({ property, value }) => `${property}: ${value};`),
        isUtility: declarations.length === 1 && declarations[0].value.includes('!important'),
      };

      const nodeMeta = {
        id: createNodeId(`rule-${selector}-${position.start.line}-${position.end.line}`),
        parent: null,
        children: [],
        internal: {
          type: `CssUtilityClasses`,
          contentDigest: createContentDigest(nodeData),
        }
      };

      const node = Object.assign({}, nodeData, nodeMeta)
      createNode(node);
    })
  });
}

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  createCssUtilityClassNodes({ actions, createNodeId, createContentDigest });
};
