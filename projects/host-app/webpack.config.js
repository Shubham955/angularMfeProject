//const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { shareAll, withModuleFederationPlugin } = require("@angular-architects/module-federation/webpack");

module.exports=withModuleFederationPlugin({
  
  remotes: {
    insuranceMfe: 'http://localhost:4201/remoteEntry.js',
    // below premiumMfe corresponds to name as written in module fedration of mfe webpack.config.js, 
    // and in value 4202 is the port on which mfe is running
    premiumMfe: 'http://localhost:4202/remoteEntry.js', 
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: 'auto',
    }),
  },
  
})