let less = require("less"),
    fs = require("fs"),
    path = require("path");

let fileName = "sample.less",
    lessCode = fs.readFileSync(fileName).toString(),
    options = {
        sourceMap: {
            sourceMapFileInline: true
        },
        filename: path.join(process.cwd(), fileName)
    };

less.render(lessCode, options, function(err, output) {

    console.log(err || output.css);
});