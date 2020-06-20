const path = require('path');

const mimeTypes = {
    'css': 'text/css',
    'gif': 'image/gif',
    'html': 'text/html',
    'ico': 'image/x-icon',
    'jpeg': 'image/jpeg',
    'jpg': 'image/jpg',
    'json': 'application/json',
    'pdf': 'application/pdf',
    'png': 'image/png',
    'svg': 'image/svg+html',
    'swf': 'application/x-shockwave-flash',
    'tiff': 'image/tiff',
    'txt': 'test/plain',
    'wav': 'audio/x-wav',
    'wma': 'audio/x-ms-wma',
    'wmv': 'video/x-ms-wmv',
    'xml': 'text/html',
    'js': 'text/javascript'
 };

 module.exports = (filePath) => {
     let ext = path.extname(filePath)
                   .split('.')
                   .pop()
                   .toLowerCase();
     if (!ext) {
         ext = filePath;
     }

     return mimeTypes[ext] || mimeTypes['txt'];

 }