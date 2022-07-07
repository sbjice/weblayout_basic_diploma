export const choices = () => {
    return app.gulp.src(app.path.src.choices)
        .pipe(app.gulp.dest(app.path.build.js))
}