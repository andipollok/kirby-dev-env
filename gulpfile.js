const gulp        = require('gulp');
const php         = require('gulp-connect-php');
const browsersync = require("browser-sync");

const ftp = require('vinyl-ftp');
const log = require('fancy-log');

require('dotenv').config();

var localFiles = [
	'index.php',
  '.htaccess',
  './assets/**/*',
  './content/**/*',
  './site/**/*',
  './site/**/.htaccess'
];


// PHP Server + BrowserSync
function server(done) {
  php.server({
    base: './',
    port: process.env.DEV_phpServerPort,
    router: 'kirby/router.php'
  }, function (){
    browsersync({
      injectChanges: true,
      port: process.env.DEV_browserSyncPort,
      proxy: process.env.DEV_phpProxy + ':' + process.env.DEV_phpServerPort
    });
  });
  done();
}

// BrowserSync Reload
function reload(done) {
  browsersync.reload();
  done();
}

// Watch files
function watch() {
  gulp.watch(
    [
      "./assets/**/*",
      "./content/**/*",
      "./site/**/*",
    ],
    reload
  );
}

function connect(){
     return ftp.create({
            host: process.env.FTP_HOST,
            port: 21,
            user: process.env.FTP_USER,
            password: process.env.FTP_PASS,
            log: log
      });
}

function publish() {
     var conn = connect();
     return gulp.src(localFiles, {base: '.', buffer: false})
                .pipe(conn.newer(process.env.FTP_DIRECTORY))
                .pipe(conn.dest(process.env.FTP_DIRECTORY))
}

// define complex tasks
const dev = gulp.parallel(server, watch);

// export tasks
exports.publish = publish;
exports.dev = dev;
exports.default = dev;