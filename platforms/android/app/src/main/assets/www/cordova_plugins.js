cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-inappbrowser.inappbrowser",
    "file": "plugins/cordova-inappbrowser/www/inappbrowser.js",
    "pluginId": "cordova-inappbrowser",
    "clobbers": [
      "cordova.InAppBrowser.open",
      "window.open"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-inappbrowser": "1.0.6"
};
// BOTTOM OF METADATA
});