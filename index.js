var concat = require('concatenate-files');

module.exports = function (options) {
    options = options || {
        srcFolder: __dirname + 'webroot',
        outputCSS: 'style.css'
    };

    return function posthtmlModularCss(tree){

        var cssFile = [];

        tree.match({ tag: 'css' }, function(node) {
            cssFile.push(options.srcFolder + node.attrs.src);
            return '';
        });

        concat(cssFile, options.outputCSS, function (error) {
            console.log('CSS file created');
        });

    };
};
