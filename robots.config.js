export default [
        /* module options */
        { UserAgent: '*' },
        { Disallow: '' },
        { Disallow: '/cgi-bin/' },
        { BlankLine: true },
        { Comment: 'Comment here' },
        {Sitemap: ()=> process.env.NUXT_DOMAIN + '/sitemap.xml'}
]