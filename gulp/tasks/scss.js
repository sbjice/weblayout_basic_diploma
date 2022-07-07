import dartSass from 'sass';
import gulpSass from 'gulp-sass';
import rename from 'gulp-rename';

import cleanCss from 'gulp-clean-css';
import webpcss from 'gulp-webp-css';
import autoPrefixer from 'gulp-autoprefixer';
import groupCssMediaQueries from 'gulp-group-css-media-queries';


const sass = gulpSass(dartSass);

export const scss = () => {
    return app.gulp.src(app.path.src.scss)
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: 'SCSS',
                message: 'Error: <%= error.message %>',
            })
        ))
        .pipe(app.plugins.replace(/@img\//g, './img/'))
        .pipe(sass({
            outputStyle: 'expanded',
        }))
        .pipe(groupCssMediaQueries())
        .pipe(webpcss({
            webpClass: '.webp',
            noWebpClass: '.no-webp',
        }))
        .pipe(autoPrefixer({
            grid: true,
            overrideBrowsersList: ['last 4 versions'],
            cascade: true,
        }))
        .pipe(cleanCss())
        .pipe(rename({
            extname: '.min.css',
        }))
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(app.plugins.browserSync.stream());
}