const { src, dest,watch } = require("gulp");
const less = require("gulp-less");
const LessAutoprefix = require("less-plugin-autoprefix");
const autoprefix = new LessAutoprefix({ browsers: ["last 2 versions"] });
const path = require("path");

const basePath = path.resolve("./src/admin/views/")
const adminLessPath = basePath + "/less/**/*.less"
function compileLess(cb) {
  return src(adminLessPath)
    .pipe(
      less({
        plugins: [autoprefix],
      })
    )
    .pipe(dest(path.join(basePath,"css")));
}
watch([adminLessPath], function(cb) {
  return compileLess()
});

exports.default = compileLess;

