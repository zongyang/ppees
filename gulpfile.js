var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var runSequence = require('run-sequence').use(gulp);
var del = require('del');
var bourbon = require('node-bourbon');
var colors = require('colors')

//html
gulp.task('html', function() {
	return gulp.src(['views/src/**/*.html'])
		.pipe(gulp.dest('views/dest'))
});

//sass
gulp.task('sass', function() {
	return gulp.src(['views/src/**/*.sass'])
		.pipe(plugins.plumber())
		.pipe(plugins.sass({
			includePaths: bourbon.includePaths
		}))
		.pipe(plugins.concat('app.css'))
		.pipe(plugins.autoprefixer({
			browsers: ['last 2 versions']
		}))
		.pipe(gulp.dest('views/dest'))
});

//js
gulp.task('js', function() {
	return gulp
		.src('views/src/**/*.js')
		.pipe(plugins.plumber())
		.pipe(plugins.concat('app.js', {
			newLine: ';'
		}))
		.pipe(plugins.jsbeautifier())
		.pipe(gulp.dest('views/dest'))
});

//server
gulp.task('server', function() {
	return plugins.nodemon({
		watch: ['app.js', 'server/**/*.js'],
		script: 'app.js',
		env: {
			"NODE_ENV": "development"
		}
	}).on('start', function() {
		console.log('server start!')
	})
})

//clean
gulp.task('clean', function(cb) {
	del([
		'views/dest/**',
		'!views/dest',
		'!views/dest/bower/**'
	]).then(function() {
		cb()
	});
})

//watch
gulp.task('watch', function() {
	//start all tasks
	runSequence('clean', ['html', 'js', 'sass'], 'server');
	//watch client side
	gulp.watch('views/src/**', ['html', 'js', 'sass']).on('change', change);
	//watch server side
	gulp.watch(['app.js', 'server/**']).on('change', change);
})

function change(event) {
	console.log(colors.green(event.path + ' was ' + event.type));
}