export const server = (done) =>{
    app.plugins.browserSync.init({
        server:{
            baseDir:`${app.path.build.html}`
        },
        notify:false,
        port:3000
    })
}

// export function server(){
//     console.log(1)
// }