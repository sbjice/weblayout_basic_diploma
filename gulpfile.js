// TODO: 
// 1) dev/prod
// 2) SVG-sprites
// 3) webp optimization
// 4) font-processing


import gulp from 'gulp';
import { path } from './gulp/config/path.js';
import { plugins } from './gulp/config/plugins.js'

global.app = {
    path: path,
    gulp: gulp,
    plugins: plugins,
}

import { copy } from './gulp/tasks/copy.js';
import { reset } from './gulp/tasks/reset.js'
import { html } from './gulp/tasks/html.js'
// import { pugTask } from './gulp/tasks/pug.js'
import { server } from './gulp/tasks/server.js';
import { scss } from './gulp/tasks/scss.js';
import { js } from './gulp/tasks/js.js';
import { images } from './gulp/tasks/images.js';
import { fonts } from './gulp/tasks/fonts.js';
import { vendorsJS } from './gulp/tasks/vendorsJS.js';




const watcher = () => {
    gulp.watch(path.watch.files, copy);
    gulp.watch(path.watch.html, html);
    // gulp.watch(path.watch.pug, pugTask);
    gulp.watch(path.watch.scss, scss);
    gulp.watch(path.watch.js, js);
    gulp.watch(path.watch.images, images);
}

const mainTask = gulp.parallel(copy, scss, js, html, images, fonts, vendorsJS);

const dev = gulp.series(reset, mainTask, gulp.parallel(watcher, server));

gulp.task('default', dev);