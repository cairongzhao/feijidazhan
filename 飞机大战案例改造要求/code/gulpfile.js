//var gulp =require("gulp");
//gulp.src("js/bullet.js")
//.pipe(gulp.dext("dest/js"));




//var gulp=require("gulp");
//gulp.task("default",function(){
//	console.log(11)
//})
//gulp.task("aa",function(){
//	console.log(22)
//})
var obj = {
removeComments: true, //清除 HTML 注释
collapseWhitespace: true, //压缩 HTML
collapseBooleanAttributes: true,//省略布尔属性的值<input checked="true"/> ==><input checked/>
removeEmptyAttributes: true, //删除所有空格作属性值 <input id="" /> ==> <input />
removeScriptTypeAttributes: true, //删除<script>的 type="text/javascript"
removeStyleLinkTypeAttributes: true, //删除<style>和<link>的 type="text/css"
minifyJS: true, //压缩页面 JS
minifyCSS: true //压缩页面 CSS
}

var gulp=require("gulp");
var jsmin=require("gulp-uglify");
gulp.task("htmlTask",function(){
	gulp.src("js/*.js")
	.pipe(jsmin())
	.pipe(gulp.dest("dest/js"));
});

gulp.task("default",["htmlTask"]);
