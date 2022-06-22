import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = './dist';
const srcFolder = './src';

export const path = {
    build: {
        // html: `${buildFolder}/`,
        css: `${buildFolder}/css/`,
        pug: `${buildFolder}/`,
        files: `${buildFolder}/files/`,
    },
    src: {
        // html: `${srcFolder}/*.html`,
        scss: `${srcFolder}/scss/style.scss`,
        pug: `${srcFolder}/*.pug`,
        files: `${srcFolder}/files/**/*.*`,
    },
    watch: {
        // html: `${srcFolder}/**/*.html`,
        scss: `${srcFolder}/scss/style.scss`,
        pug: `${srcFolder}/**/*.pug`,
        files: `${srcFolder}/files/**/*.*`,
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
}
