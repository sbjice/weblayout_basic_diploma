import gulp from 'gulp';

import {path} from './gulp/config/path.js';
import {plugins} from './gulp/config/plugins.js'

global.app = {
    path: path,
    gulp: gulp,
    plugins: plugins,
}

import {copy} from './gulp/tasks/copy.js';
import {reset} from './gulp/tasks/reset.js'
// import {html} from './gulp/tasks/html.js'
import {pugTask} from './gulp/tasks/pug.js'
import { server } from './gulp/tasks/server.js';



const watcher = () => {
    gulp.watch(path.watch.files, copy);
    // gulp.watch(path.watch.html, html);
    gulp.watch(path.watch.pug, pugTask);
}

const mainTask = gulp.parallel(copy, pugTask);

const dev = gulp.series(reset, mainTask, gulp.parallel(watcher, server));

gulp.task('default', dev);