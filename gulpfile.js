var gulp 			= require('gulp'),
	less 			= require('gulp-less'),
	browserSync 	= require('browser-sync'),
	uglify 			= require('gulp-uglify'),
	csso 			= require('gulp-csso'),
	imagemin 		= require('gulp-imagemin'),
	pngquant 		= require('imagemin-pngquant'),
	sourcemaps 		= require('gulp-sourcemaps'),
	htmlmin 		= require('gulp-htmlmin'),
	nunjucks 		= require('gulp-nunjucks-html'),
	autoprefixer 	= require('gulp-autoprefixer');

var path = {
	src: {
		templates: 'src/blocks'
	}
};

gulp.task('less', function() {
	return gulp.src('src/style/main.less')
	.pipe(sourcemaps.init())
	.pipe(less())
	.pipe(autoprefixer(['last 4 versions', '> 1%', 'ie 8', 'ie 7'], {cascade: true}))
	.pipe(csso())
	.pipe(sourcemaps.write())
	.pipe(gulp.dest('./style'))
	.pipe(browserSync.reload({stream: true}))
});

gulp.task('scripts', function() {
	return gulp.src('src/js/*.js')
	.pipe(sourcemaps.init())
	.pipe(uglify())
	.pipe(sourcemaps.write())
	.pipe(gulp.dest('js'));
});

gulp.task('html', function() {
    return gulp.src('src/pages/*.html')
    .pipe(nunjucks({
            searchPaths: [path.src.templates]
        }))
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./'))
});

gulp.task('img', function() {
	return gulp.src('./images/*.png')
	.pipe(imagemin({
		interlaced: true,
		progressive: true,
		optimizationLevel: 7}))
		use: [pngquant()]
	.pipe(gulp.dest('./images'))
});

gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: './'
		},
		notify:true,
		// tunnel: true,
    	host: 'localhost',
	    port: 9000,
	    logPrefix: "Shmevil"
	});
});

gulp.task('watch', ['browser-sync', 'less', 'scripts', 'img', 'html'], function() {
	gulp.watch('src/**/*.less', ['less']);
	gulp.watch('./*.html', browserSync.reload);
	gulp.watch('src/js/*.js', function(event, cb) {
        gulp.start('scripts', browserSync.reload);
    });
    gulp.watch('src/blocks/**/*.njk', function(event, cb) {
    	gulp.start('html', browserSync.reload);
    })
});