var gulp = require('gulp');
var Server = require('karma').Server;

/**
* Test task, run test once and exit
*/
gulp.task('test', function(done) {

  Server.start({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, function() {
        done();
    });
});
