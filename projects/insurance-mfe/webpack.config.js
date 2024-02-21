//const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { shareAll, withModuleFederationPlugin } = require("@angular-architects/module-federation/webpack");

module.exports=withModuleFederationPlugin({
  name: 'insuranceMfe',
  exposes: {
    './Module': './projects/insurance-mfe/src/app/insurance-display/insurance-display.module.ts',
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: 'auto',
    }),
  },
  
})