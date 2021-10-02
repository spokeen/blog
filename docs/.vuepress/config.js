module.exports = {
    title: 'Hello VuePres2s',
    description: 'Just playing around',

    themeConfig: {
        nav:[
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
        smoothScroll: true
    },

  }