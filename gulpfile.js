var gulp = require('gulp');
var sass = require('gulp-sass');
var cssnano = require('gulp-cssnano');
var autoprefixer = require('gulp-autoprefixer');


gulp.task('scss', function(){ 
	return gulp.src('src/scss/**/*.scss') 
		.pipe(sass()) 
		.pipe(cssnano())
		.pipe(autoprefixer({
            cascade: false
        }))
		.pipe(gulp.dest('dist/css')) 
});

gulp.task('watch', () => {
	gulp.watch('./src/scss/**/*.scss', gulp.series('scss'));
});