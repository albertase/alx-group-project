module.exports = {
    siteUrl: 'https://elishatofunmi.com/',
    changefreq: 'monthly',
    priority: 1.0,
    exclude: ['/home', '/about', '/products', 'projects', 'contact'],
    robotsTxtOptions: {
        additionalSitemaps: ['https://elishatofunmi.com/'],
        rules: [
            {
                userAgent: '*',
                allow: '/',
            },
        ],
    },
};