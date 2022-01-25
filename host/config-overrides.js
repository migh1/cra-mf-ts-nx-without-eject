const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;

module.exports = function override (config, env) {
  config.plugins.push(
    new ModuleFederationPlugin({
      name: 'host',
      shared: [
        {
          react: { singleton: true },
          'react-dom': { singleton: true }
        }],
    }),
  );
  return config;
}