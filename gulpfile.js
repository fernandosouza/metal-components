'use strict';

var karma = require('karma');
var gulp = require('liferay-gulp-tasks')(require('gulp'));
var metal = require('gulp-metal');
var runSequence = require('run-sequence');
var utils = require('./utils');

metal.registerTasks({
	buildSrc: utils.getComponentPaths('src'),
	bundleFileName: 'metal.js',
	cssSrc: 'node_modules/metal-*/src/**/*.css',
	karma: karma,
	scssSrc: 'node_modules/metal-*/src/**/*.scss',
	testSaucelabsBrowsers: {
		sl_chrome: {
			base: 'SauceLabs',
			browserName: 'chrome'
		},
		sl_safari: {
			base: 'SauceLabs',
			browserName: 'safari'
		},
		sl_firefox: {
			base: 'SauceLabs',
			browserName: 'firefox'
		},
		sl_ie_9: {
			base: 'SauceLabs',
			browserName: 'internet explorer',
			platform: 'Windows 7',
			version: '9'
		},
		sl_ie_10: {
			base: 'SauceLabs',
			browserName: 'internet explorer',
			platform: 'Windows 7',
			version: '10'
		},
		sl_ie_11: {
			base: 'SauceLabs',
			browserName: 'internet explorer',
			platform: 'Windows 8.1',
			version: '11'
		},
		sl_edge_13: {
			base: 'SauceLabs',
			browserName: 'microsoftedge',
			platform: 'Windows 10',
			version: '13'
		},
		sl_iphone: {
			appiumVersion: '1.6.0',
			base: 'SauceLabs',
			browserName: 'Safari',
			deviceName: "iPhone 6 Simulator",
			deviceOrientation: "portrait",
			platformName: 'iOS',
			platformVersion: '9.3'
		},
		sl_android_4: {
			base: 'SauceLabs',
			browserName: 'android',
			platform: 'Linux',
			version: '4.4'
		},
		sl_android_5: {
			base: 'SauceLabs',
			browserName: 'android',
			platform: 'Linux',
			version: '5.0'
		}
	}
});

gulp.task('soy:copy', function() {
	return gulp.src('node_modules/metal-*/src/**/*.soy')
		.pipe(gulp.dest('build/soy'));
});

gulp.task('default', function(done) {
	runSequence(
		'clean',
		['css', 'build:globals', 'build:amd', 'build:amd:jquery', 'soy:copy'],
		'uglify',
		done
	);
});
