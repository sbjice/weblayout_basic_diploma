import * as nodePath from 'path';
const rootFolder = nodePath.basename(nodePath.resolve());

const buildFolder = './dist';
const srcFolder = './src';

export const path = {
    build: {
        // html: `${buildFolder}/`,
        pug: `${buildFolder}/`,
        files: `${buildFolder}/files/`,
    },
    src: {
        // html: `${srcFolder}/*.html`,
        pug: `${srcFolder}/*.pug`,
        files: `${srcFolder}/files/**/*.*`,
    },
    watch: {
        // html: `${srcFolder}/**/*.html`,
        pug: `${srcFolder}/**/*.pug`,
        files: `${srcFolder}/files/**/*.*`,
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
}
