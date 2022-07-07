import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = './dist';
const srcFolder = './src';

export const path = {
    build: {
        js: `${buildFolder}/js/`,
        html: `${buildFolder}/`,
        css: `${buildFolder}/css/`,
        pug: `${buildFolder}/`,
        files: `${buildFolder}/files/`,
        images: `${buildFolder}/img/`,
        fonts: `${buildFolder}/fonts/`,
    },
    src: {
        js: `${srcFolder}/js/app.js`,
        choices: `${srcFolder}/js/choices.min.js`,
        html: `${srcFolder}/*.html`,
        scss: `${srcFolder}/scss/style.scss`,
        pug: `${srcFolder}/*.pug`,
        files: `${srcFolder}/files/**/*.*`,
        images: `${srcFolder}/img/**/*.*`,
        fonts: `${srcFolder}/fonts/*.*`,
    },
    watch: {
        js: `${buildFolder}/js/**/*.js`,
        html: `${srcFolder}/**/*.html`,
        scss: `${srcFolder}/scss/**/*.*`,
        pug: `${srcFolder}/**/*.pug`,
        files: `${srcFolder}/files/**/*.*`,
        images: `${srcFolder}/img/**/*.*`,
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
}
