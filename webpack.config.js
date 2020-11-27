const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ScriptExtHtmlWebpackPlugin = require("script-ext-html-webpack-plugin");
const version = require("./package.json").dependencies.umschrift.replace(
  "^",
  ""
);

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  mode: "production",
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      filename: "index.html", //relative to root of the application
      template: "./src/index.html",
      title: "Hebräisch Umschrift",
      date: new Date(),
      year: function () {
        return this.date.getFullYear();
      },
      month: function () {
        return this.date.getMonth() + 1;
      },
      day: function () {
        return this.date.getDate();
      },
      version: version,
    }),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: "defer",
    }),
  ],
};
