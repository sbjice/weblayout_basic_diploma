export const vendorsJS = () => {
    return app.gulp.src(app.path.src.vendorsJS)
        .pipe(app.gulp.dest(app.path.build.js))
}