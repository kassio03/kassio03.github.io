const { v4: uuidv4 } = require('uuid');

module.exports = {
  svgoConfig: {
    plugins: [
      {
        name: 'preset-default',
        params: {
          overrides: {
            moveElemsAttrsToGroup: false,
            moveGroupAttrsToElems: false,
            removeViewBox: false,
          },
        },
      },
      {
        name: 'prefixIds',
        params: {
          delim: '__',
          prefix: () => uuidv4(),
          prefixIds: true,
          prefixClassNames: true
        },
      }
    ],
  }
}
