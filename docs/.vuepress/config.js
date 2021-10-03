module.exports = {
    title: 'spokeen 的笔记',
    description: 'html,css,javascript',
    base: '/blog/',
    head: [
        ['link', { rel: 'icon', href: '/favicon.ico' }]
    ],
    themeConfig: {
        nav:[
            {
                text: '主页',
                link: '/'
            },
            {
                text: '技术博客',
                items: [
                    {
                        text: 'css',
                        link: '/computer/css/Reference.md'
                    },
                    {
                        text: 'javascript',
                        link: '/computer/javascript/Reference.md'
                    }
                ]
            },
            {
                text: '散文生活',
                link: '/life/'
            }

        ],
        sidebar:{
            '/computer/css/': [
                'Reference',
                'Flex'
            ],
            '/computer/javascript/':[
                'Reference'
            ]
        },
        search: true,
        lastUpdated: 'Last Updated',
        smoothScroll: true,
        repo: 'spokeen/blog',
        repoLabel: 'Github',
    },

  }