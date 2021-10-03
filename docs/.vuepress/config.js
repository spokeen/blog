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
                link: '/computer/'
            },
            {
                text: '开源项目',
                link: '/openProject/'
            }

        ],
        sidebar:{
            '/computer/': [
                {
                    title: 'html',
                    path: '/computer/html/Html',
                    sidebarDepth: 2,
                    children: [
                        '/computer/html/Html'
                    ]
                },
                {
                    title: 'css',
                    path: '/computer/css/Css',
                    sidebarDepth: 2,
                    children: [
                        '/computer/css/Css',
                        '/computer/css/Flex'
                    ]
                },
                {
                    title: 'javascript',
                    path: '/computer/javascript/Javascript',
                    sidebarDepth: 2,
                    children: [
                        '/computer/javascript/Javascript',
                        '/computer/javascript/Canvas2d',
                        '/computer/javascript/Webgl'
                    ]
                },
                {
                    title: 'node',
                    path: '/computer/node/Node',
                    sidebarDepth: 2,
                    children: [
                        '/computer/node/Node'
                    ]
                }
            ],
        },
        search: true,
        lastUpdated: 'Last Updated',
        smoothScroll: true,
        repo: 'spokeen/blog',
        repoLabel: 'Github',
    },

  }