import * as nodePath from 'path'

console.log(nodePath.basename)

const rootFolder = nodePath.basename(nodePath.resolve())

const buildFolder = './build'
const srcFolder = './src'

export const path = {
    build: {
        js:`${buildFolder}/js/`,
        css:`${buildFolder}/css/`,
        images:`${buildFolder}/img/`,
        html: `${buildFolder}/`,
        files: `${buildFolder}/files`,
        fonts: `${buildFolder}/fonts`,
    },
    src: {
        js:`${srcFolder}/js/app.js`,
        images:`${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp}`,
        svg:`${srcFolder}/img/**/*.svg`,
        scss:`${srcFolder}/scss/style.scss`,
        html: `${srcFolder}/*.html`,
        files: `${srcFolder}/files/**/*.*`,
        svgicons:`${srcFolder}/svgicons/*.svg`

    },
    watch: {
        js:`${srcFolder}/js/**/*.js`,
        images:`${srcFolder}/img/**/*.{jpg,jpeg,png,gif,webp,svg,gif,ico}`,
        scss:`${srcFolder}/scss/**/*.scss`,
        html: `${srcFolder}/**/*.html`,
        files: `${srcFolder}/files/**/*.*`
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder,
    rootFolder: rootFolder,
    ftp: 'test'
}