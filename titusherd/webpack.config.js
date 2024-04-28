const path = require('path');

module.exports = {
    // Mode can be 'development' or 'production'
    mode: 'development',
    // Entry point of your application
    entry: './src/index.js',
    output: {
        // Output directory as an absolute path
        path: path.resolve(__dirname, 'dist'),
        // Filename of the bundled output
        filename: 'bundle.js',
    },
};