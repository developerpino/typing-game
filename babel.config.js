module.exports = {
  "presets": [
    ['@babel/preset-env', {
      targets: {
        browsers: ['last 2 chrome versions'],
      },
      debug: true,
    }]
  ]
}