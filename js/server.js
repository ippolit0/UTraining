import { createServer } from 'http';
import { readFile } from 'fs';
import { extname, join, dirname } from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const server = createServer((req, res) => {
   let url = req.url;
   if (url == '/UTraining/html/home') sendRes('home.html', 'text/html', res);
   else if (url == '/UTraining/html/work-out') sendRes('work-out.html', 'text/html', res);
   else if (url == '/UTraining/html/train-page') sendRes('train-page.html', 'text/html', res);
   else if (url == '/UTraining/html/info-page') sendRes('info-page.html', 'text/html', res);
   else if (extname(url)) sendRes(url, getContentType(url), res);
   else sendRes('error404.html', 'text/html', res);
});
server.listen(3000, () => {
   console.log('server has been started...');
});

function getContentType(url) {
   let ext = extname(url);
   switch (ext) {
      case '.html':
         return 'text/html';
      case '.css':
         return 'text/css';
      case '.js':
         return 'text/javascript';
      case '.jpeg':
         return 'image/jpeg';
      case '.png':
         return 'image/png';
      case '.gif':
         return 'image/gif';
      default:
         return 'application/octet-stream';
   }
}

function getFilePath(url) {
   let ext = extname(url);
   switch (ext) {
      case '.html':
         return join(__dirname, '../html/', url);
      default:
         return join(__dirname, '..', url);
   }
}

function sendRes(url, contentType, res) {
   let path = getFilePath(url);
   readFile(path, (err, data) => {
      if (err) {
         res.end('error');
      }
      res.writeHead(200, {
         'Content-Type': contentType,
      });
      res.write(data);
      res.end();
   });
}
