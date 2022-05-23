var differ = require('differ-cli');
differ('demo/js.js', 'demo/js-error.js', function(err, result) {
  !err && console.log(result);
});

differ('demo/less.less', 'demo/less-error.less', function(err, result) {
  !err && console.log(result);
});

differ('demo/ts.ts', 'demo/ts-error.ts', function(err, result) {
  !err && console.log(result);
});

differ('demo/vue.vue', 'demo/vue-error.vue', function(err, result) {
  !err && console.log(result);
});

differ('demo/scss.scss', 'demo/scss-error.scss', function(err, result) {
  !err && console.log(result);
});

differ('demo/html.html', 'demo/html-error.html', function(err, result) {
  !err && console.log(result);
});
