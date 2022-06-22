export const server = (done) => {
    app.plugins.browserSync.init({
        server: {
            baseDir: `${app.path.build.pug}`
        },
        notify: false,
        port: 3000,
    });
}