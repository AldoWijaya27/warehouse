const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const deps = require("./package.json").dependencies;
module.exports = {
  output: {
    publicPath: "http://localhost:3000/",
  },

  resolve: {
    extensions: [".tsx", ".ts", ".jsx", ".js", ".json"],
  },

  devServer: {
    port: 3000,
    historyApiFallback: true,
    webSocketServer: false,

    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
      "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization",
    },
  },

  module: {
    rules: [
      {
        test: /\.m?js/,
        type: "javascript/auto",
        resolve: {
          fullySpecified: false,
        },
      },
      {
        test: /\.(css|s[ac]ss)$/i,
        use: ["style-loader", "css-loader", "postcss-loader", "sass-loader"],
      },
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "inbound",
      filename: "remoteEntry.js",
      remotes: {
        measurements: "measurements@http://localhost:8080/remoteEntry.js",
      },
      exposes: {
        "./Button": "./src/scripts/view/components/Button.jsx",
        "./HeaderPage": "./src/scripts/view/components/HeaderPage.jsx",
        "./Sidebar": "./src/scripts/view/components/Sidebar.jsx",
        "./InputField": "./src/scripts/view/components/InputField.jsx",
        "./SelectField": "./src/scripts/view/components/SelectField.jsx",
        "./SearchField": "./src/scripts/view/components/SearchField.jsx",
        "./HeaderForm": "./src/scripts/view/components/HeaderForm.jsx",
        "./TrashButton": "./src/scripts/view/components/TrashButton.jsx",
        "./TableHeader": "./src/scripts/view/components/TableHeader.jsx",
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
      },
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],
};
