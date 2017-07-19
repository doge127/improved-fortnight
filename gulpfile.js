var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var cssnano = require('gulp-cssnano');

gulp.task('default', function() {
  // 将你的默认的任务代码放在这
  gulp.src('css_normal/*.html')
  .pipe(gulp.dest('css/'));
    // 写入 'build/somedir/somefile.js'


});

// 动态执行(需要一直开着才有效)
gulp.task('init', function() {
  // 将你的默认的任务代码放在这
		// console.log('sadsad');
  gulp.watch('css_normal/*.html', ['default']);
  gulp.watch('css_normal/*.less', ['less']);


});

gulp.task('less', function () {
  return gulp.src('css_normal/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    // 加密css
    // .pipe(cssnano())
    // dest指定生成路径
    .pipe(gulp.dest('css/'));
});
