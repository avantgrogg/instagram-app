var koa = require("koa");
var handlebars = require("koa-handlebars");
var app = koa();
app.use(require('koa-static')('public'));

app.use(handlebars({
  defaultLayout: "main"
}));

app.use(function *() {
  yield this.render("index", {
    title: "Test Page",
    name: "World"
  });
});

app.listen(3000);