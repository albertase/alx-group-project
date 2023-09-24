module.exports = {
    siteUrl: 'https://albertikechukwu-portfolio.vercel.app/',
    changefreq: 'monthly',
    priority: 1.0,
    exclude: ['/home', '/about', '/products', 'projects', 'contact'],
    robotsTxtOptions: {
        additionalSitemaps: ['https://albertikechukwu-portfolio.vercel.app/'],
        rules: [
            {
                userAgent: '*',
                allow: '/',
            },
        ],
    },
};

// update