module.exports = (ctx) => ({
    map: ctx.env === 'production' ? { inline: false } : true,
    plugins: {
        'postcss-import': {},
        stylelint: {},
        'postcss-wcag-contrast': {},
        mdcss: {},
        'postcss-cssnext': {},
        'postcss-url': { url: 'rebase' },
        'postcss-calc': {},
        'postcss-reporter': { clearAllMessages: true },
        'postcss-critical-css': ctx.env === 'production' ? { outputPath: 'dist'} : false,
        cssnano: ctx.env === 'production' ? { autoprefixer: false } : false,
    },
});
