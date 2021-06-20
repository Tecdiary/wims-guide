const through2 = require("through2"),
  markdownpdf = require("markdown-pdf");

function preProcessMd() {
  return through2((data, enc, cb) => {
    let pageBreak = "\n\n<div style='page-break-before: always;'></div>\n\n";
    let nd = data
      .toString()
      .replace(/::: tip/gs, "")
      .replace(/::: warning/gs, "")
      .replace(/:::/gs, "")
      .replace(/## Screenshots/, pageBreak + "## Screenshots")
      .replace(/..\/assets\/img/gs, "assets/img")
      .replace(/`composer install`/gs, "<code>composer install</code>")
      .replace(/(?<=---)(.*)(?=---)/gs, "")
      .replace(/------/gs, "")
      .replace(/\[\[toc\]\]/, "");
    cb(null, new Buffer.from(nd + pageBreak));
  });
}

var mdDocs = [
    "cover.md",
    "install/index.md",
    "install/service.md",
    "update/index.md",
    "faqs/index.md",
    "guide/index.md",
    "guide/items.md",
    "guide/orders.md",
    "guide/reports.md",
    "guide/users.md",
  ],
  bookPath = "documentation.pdf";

var options = {
  preProcessMd,
  runningsPath: "./run.js",
  remarkable: {
    html: true,
    breaks: true,
    syntax: ["header", "footer"],
  },
  cssPath: "assets/style.css",
  paperBorder: { top: "1cm", left: "2cm", bottom: "1cm", right: "2cm" },
};
markdownpdf(options)
  .concat.from(mdDocs)
  .to(bookPath, function () {
    console.log("Created", bookPath);
  });
