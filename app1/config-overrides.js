const ModuleFederationPlugin = require('webpack').container.ModuleFederationPlugin;

module.exports = function override (config, env) {
  config.output.publicPath = 'auto';
  config.plugins.push(
    new ModuleFederationPlugin({
      name: 'app1',
      filename: 'remoteEntry.js',
      exposes: {
        "./App": "./src/App",
        "./Widget": "./src/Widget"
      },
      shared: [
        {
          react: { singleton: true },
          'react-dom': { singleton: true }
        }],
    }),
  );
  return config;
}