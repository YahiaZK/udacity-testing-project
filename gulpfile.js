import gulp from "gulp";
import shell from "gulp-shell";

gulp.task("default", shell.task("npx parcel index.html --port 2228"));

gulp.task("test", shell.task("mocha"));

gulp.task("cypress", shell.task("cypress open"));
