var browserify = require('gulp-browserify'),
    concat = require('gulp-concat'),
    connect = require('gulp-connect'),
    gulp = require('gulp'),
    open = require('gulp-open'),
    util = require('gulp-util'),
    plumber = require('gulp-plumber'),
    less = require('gulp-less'),
    uglify = require('gulp-uglify'),
    path = require('path'),
    livereload = require('gulp-livereload'),
    LessPluginCleanCSS = require('less-plugin-clean-css'),
    LessPluginAutoPrefix = require('less-plugin-autoprefix'),
    cleancss = new LessPluginCleanCSS({ advanced: true }),
    autoprefix= new LessPluginAutoPrefix({ browsers: ["last 2 versions"] }),
    babelify = require("babelify");
 


gulp.task('prod', ['browserify','less','copy','uglify', 'production']);

gulp
  // performs magic
  .task('browserify', function(){
    gulp.src('src/js/main.js')
      .pipe(plumber())
      .pipe(
        browserify({ 
          transform: [babelify], 
          extensions: ['.jsx'],
          debug: false 
        })
      )
      .pipe(concat('main.js'))
      .pipe(plumber.stop())
      .pipe(gulp.dest('build/js'))
      .pipe(livereload());
  })
  .task('production',function() {
    connect.server({
      root: ['./build'],
      port: process.env.PORT || 5000, // localhost:5000
      livereload: false
    });
  })
  //uglifies the JS for deployment
  .task('uglify',function(){
    gulp.src('build/js/main.js')
      .pipe(uglify())
      .pipe(gulp.dest('build/js'));
  })

  // moves source files to build
  .task('copy', function(){
    gulp
      .src('src/index.html')
      .pipe(gulp.dest('build'));
   
     gulp
      .src('src/assets/**/*.*')
      .pipe(gulp.dest('build/assets'));
   
     gulp
      .src('src/img/**/*.*')
      .pipe(gulp.dest('build/img'));
  })
  
  // local development server
  .task('connect', function(){
    connect.server({
      root: ['build'],
      port: '8085',
      base: 'http://localhost',
      livereload: true
    });
  })
 
  // opens the application in chrome
  .task('open', function(){
    gulp
      .src('build/index.html')
      .pipe(
        open('', {app: 'google chrome',url: 'http://localhost:8085/'})
      );
  })

  //compile css
  .task('less', function() {
    gulp.src('./src/css/app.less')
      .pipe(less({
        plugins: [autoprefix, cleancss]
      }))
      .pipe(gulp.dest('build'));
  })
 
  // build the application
  .task('default', ['browserify', 'less', 'copy', 'connect', 'open'])
  .task('onchange', ['browserify', 'less', 'copy'])

  .task('build',['browserify','less','copy','uglify'])
  // watch for source changes
  .task('watch', ['default'], function(){
    livereload.listen();
    gulp.watch(['src/**/*.*','src/**/**/*.*','src/**/**/**/*.*'], ['onchange']);
  });