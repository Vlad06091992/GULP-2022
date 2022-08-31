import dartSass from 'sass'
import gulpSass from 'gulp-sass'
import rename from 'gulp-rename'

import CleanCSS from 'gulp-clean-css' //Сжатие css файла
import webpcss from 'gulp-webpcss' //Вывод webp изображений
import autoprefixer from 'gulp-autoprefixer' //Добавление вендорных префиксов(кроссбраузерность)
import groupCssMediaQueries from 'gulp-group-css-media-queries' //Группировка медиа запросов


const sass = gulpSass(dartSass)

export const scss = () => {
    return app.gulp.src(app.path.src.scss, { sourcemaps: app.isDev })
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: 'SCSS',
                message: "Error:<%= error.message %>"
            })
        ))
        .pipe(app.plugins.replace(/@img\//g, '../img/'))
        .pipe(sass({
            outputStyle: 'expanded'
        }))
        .pipe(
            app.plugins.gulpIf(
                app.isBuild,
                groupCssMediaQueries()
            ))

        .pipe(
            app.plugins.gulpIf(
                app.isBuild,
                autoprefixer({
                    grid: true,
                    overrideBrowserslist: ["last 3 versions"],
                    cascade: true
                })))



        .pipe(
            app.plugins.gulpIf(
                app.isBuild,
                webpcss({
                    webpClass: ".webp",
                    noWebpClass: ".no-webp"
                })))





        .pipe(app.gulp.dest(app.path.build.css)) //несжатый дубль файла стилей


        .pipe(
            app.plugins.gulpIf(
                app.isBuild,
                CleanCSS()))



        .pipe(rename({
            extname: '.min.css'
        }))
        .pipe(app.gulp.dest(app.path.build.css))
        .pipe(app.plugins.browserSync.stream())
}


// import dartSass from 'sass'
// import gulpSass from 'gulp-sass'
// import rename from 'gulp-rename'

// import CleanCSS from 'gulp-clean-css' //Сжатие css файла
// import webpcss from 'gulp-webpcss' //Вывод webp изображений
// import autoprefixer from 'gulp-autoprefixer' //Добавление вендорных префиксов(кроссбраузерность)
// import groupCssMediaQueries from 'gulp-group-css-media-queries' //Группировка медиа запросов


// const sass = gulpSass(dartSass)

// export const scss = () =>{
//     return app.gulp.src(app.path.src.scss, {sourcemaps:true})
//     .pipe(app.plugins.plumber(
//         app.plugins.notify.onError({
//             title:'SCSS',
//             message:"Error:<%= error.message %>"
//         })
//     ))
//     .pipe(app.plugins.replace(/@img\//g, '../img/'))
//     .pipe(sass({
//         outputStyle:'expanded'
//     }))
//     .pipe(groupCssMediaQueries())
//     .pipe(webpcss({
//         webpClass:".webp",
//         noWebpClass:".no-webp"
//     }))
//     .pipe(autoprefixer({
//         grid:true,
//         overrideBrowserslist:["last 3 versions"],
//         cascade:true
//     }))
//     .pipe(app.gulp.dest(app.path.build.css)) //несжатый дубль файла стилей
//     .pipe(CleanCSS())
//     .pipe(rename({
//         extname:'.min.css'
//     }))
//     .pipe(app.gulp.dest(app.path.build.css))
//     .pipe(app.plugins.browserSync.stream())
// }