// Script to convert markdown syntax into HTML
import fs from 'fs-extra';
import { markdown } from './utils/markdown.js';

(async function convertMarkdownToHtml() {
  console.log("|> Converting Markdown to HTML..."); //Markdown source

  const content = await fs.readFile("./content/index.md", "utf8"); //Convert into HTML

  const rendered = await markdown.render(content); //Wrapping

  const htmlFile = `<!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8" />
    <title>Convert Markdown to HTML file</title>
    <link rel="stylesheet" href="./default.css">
    </head>
    <body>
    ${rendered}
    </body>
    </html>
    `; //Allocating file

  await fs.mkdirs("./public");
  await fs.writeFile("./public/index.html", htmlFile, "utf8");
  await fs.copy("./node_modules/highlight.js/styles/default.css", "./public/default.css", {
    overwrite: true
  });
  console.log("HTML generated and allocated <|");
})();

export {};
//# sourceMappingURL=index.js.map