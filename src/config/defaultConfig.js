module.exports = {
    root: process.cwd(),
    hostnmae: '127.0.0.1',
    port: 9527,
    compress: /\.(html|js|css|md)/,
    cache: {
        maxAge: 600,
        expores: true,
        cacheControl: true,
        lastModified: true,
        etag: true
    }
}