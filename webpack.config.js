const path = require('path');

module.exports = {
  entry: './app.js',  // Your main script
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'), // Output directory
  },
  target: 'node',  // Important for Node.js applications
  externalsPresets: { node: true }, // to ignore built-in modules like fs, path
};
