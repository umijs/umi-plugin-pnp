const PnpWebapckPlugin = require('pnp-webpack-plugin');
const { dirname } = require('path');

module.exports = function(api, options = {}) {
  const { alias } = options;

  api.modifyWebpackConfig(config => {
    // pnp resolver for loader
    config.resolveLoader.plugins = [
      ...(config.resolveLoader.plugins || []),
      PnpWebapckPlugin.moduleLoader(module),
    ];

    // pnp resolver for dependency
    config.resolve.plugins = [
      ...(config.resolve.plugins || []),
      PnpWebapckPlugin,
    ];

    // alias
    if (alias) {
      const pkgs = [
        '@babel/runtime',
        'core-js',
        'regenerator-runtime',
      ];
      pkgs.forEach(pkg => {
        if (!config.resolve.alias[pkg]) {
          config.resolve.alias[pkg] = dirname(require.resolve(`${pkg}/package`));
        }
      });
    }

    return config;
  });
}
