const pxToViewport = require('postcss-px-to-viewport-8-plugin')

module.exports = {
    plugins: [
        pxToViewport({
            viewportWidth: 390,      // 设计稿宽度
            unitPrecision: 5,
            viewportUnit: 'vw',
            selectorBlackList: ['.ignore'],
            minPixelValue: 1,
            mediaQuery: false,
        })
    ]
}
