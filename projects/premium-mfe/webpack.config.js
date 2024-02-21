//const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { shareAll, withModuleFederationPlugin } = require("@angular-architects/module-federation/webpack");

module.exports=withModuleFederationPlugin({
  // this name has to be used in remotes section of host webpack.config.js
  name: 'premiumMfe',
  exposes: {
    // below key means that we are exposing a module and value corresponds to
    // relative path of premium-deposit.module.ts
    './Module': './projects/premium-mfe/src/app/premium-deposit/premium-deposit.module.ts',
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: 'auto',
    }),
  },
  
})