const HtmlWebpackPlugin = require('html-webpack-plugin');

class HtmlWebpackRemovePlugin {
    apply (compiler) {
        compiler.hooks.compilation.tap('HtmlWebpackRemovePlugin', (compilation) => {
            HtmlWebpackPlugin.getHooks(compilation).afterTemplateExecution.tapAsync(
                'HtmlWebpackRemovePlugin',
                (data, cb) => {
                    data.html = this._removeAssets(
                        data.html.split('\n'),
                        data.plugin.options.remove,
                    );

                    cb(null, data)
                }
            )
        })
    }

    _removeAssets(assets, remove) {
        const arr = assets.filter((a) => {
            if (!RegExp(remove).test(a)) {
                return a;
            }
        });

        return arr.join('\n');
    }
}

module.exports = HtmlWebpackRemovePlugin;