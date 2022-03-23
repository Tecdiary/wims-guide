const through2 = require("through2"),
  markdownpdf = require("markdown-pdf");

function preProcessMd() {
  return through2((data, enc, cb) => {
    let pageBreak = "\n\n<div style='page-break-before: always;'></div>\n\n";
    let nd = data
      .toString()
      .replace(
        /Standard License\?/gs,
        '<h3 class="h3">Standard License?</h3>'
      )
      .replace(
        /Server Requirements/gs,
        '<h3 class="h3">Requirements</h3>'
      )
      .replace(
        /Installing locally\?/gs,
        '<h3 class="h3">Installing locally?</h3>'
      )
      .replace(
        /Installing on cPanel\?/gs,
        '<h3 class="h3">Installing on cPanel?</h3>'
      )
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
