import gulp from "gulp";
import shell from "gulp-shell";

gulp.task("default", shell.task("parcel index.html"));

gulp.task("test", shell.task("mocha"));

gulp.task("cypress", shell.task("npx cypress run"));
