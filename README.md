# html-webpack-remove-plugin

Enhances [html-webpack-plugin](https://github.com/ampedandwired/html-webpack-plugin)
functionality by adding the `{remove: 'regex'}` option.

## Installation

Use the package manager `npm` to install html-webpack-remove-plugin.

```shell
$ npm install --save-dev html-webpack-remove-plugin
```

## Basic Usage

Require the plugin in your webpack config:

```javascript
var HtmlWebpackRemovePlugin = require('html-webpack-remove-plugin');
```

Add the plugin to your webpack config:

```
plugins: [
  new HtmlWebpackPlugin({
    remove: 'Regex expression'
  }),
  new HtmlWebpackRemovePlugin ()
]  
```

## License
[MIT](https://choosealicense.com/licenses/mit/)