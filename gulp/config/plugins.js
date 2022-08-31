import replace from 'gulp-replace'
import plumber from 'gulp-plumber' //Обработка ошибок
import notify from 'gulp-notify'   //Сообщения(подсказки)
import browserSync from 'browser-sync'
import newer from 'gulp-newer'
import gulpIf from 'gulp-if'


export const plugins = {
    replace: replace,
    plumber: plumber,
    notify: notify,
    browserSync:browserSync,
    newer:newer,
    gulpIf:gulpIf
}