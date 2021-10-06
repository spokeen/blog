const parser = require('html-attribute-parser');
const tag = require('html-tag');
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
            },
            {
                text: '软件工具',
                link: '/tool/'
            }

        ],
        sidebar:{
            '/computer/': [
                {
                    title: '规范',
                    path: '/computer/specifications/BEM',
                    sidebarDepth: 2,
                    children: [
                        '/computer/specifications/BEM'
                    ]
                },
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
            '/openProject/': [

            ],
            '/tool/': [
                {
                    title: 'postman',
                    path: '/tool/postman/Postman',
                    sidebarDepth: 2,
                    children: [
                        '/tool/postman/Postman',
                        '/tool/postman/Script'
                    ]
                }
            ]
        },
        search: true,
        lastUpdated: 'Last Updated',
        smoothScroll: true,
        repo: 'spokeen/blog',
        repoLabel: 'Github',
        editLinks: true,
        docsDir: 'docs',
        editLinkText: '有错误 -> edit',
        nextLinks: false,
        prevLinks: false
    },
    plugins: ['@vuepress/back-to-top','@vuepress/medium-zoom'],
    markdown: {
        extendMarkdown: md =>  {
            md.use(function(md, option) {
                md.core.ruler.after('inline', 'replace-src-link', ({ tokens, env }) => {
                    for (let token of tokens) {
              
                      // markdown img tag
                      if (token.type === 'inline' && token.children.length) {
                        for (let child of token.children) {
                          if (child.tag === 'img') {
                            for (let attr of child.attrs) {
                                if(attr[0] === 'src') {
                                    attr[1] = '/blog' + attr[1]
                                }
                            }
                          }
                        }
              
                      // direct img tag
                      } else if (token.type === 'html_block' && /^<img/.test(token.content)) {
                        const element = parser(token.content);
              
                        for (let attr in element.attributes) {
                          const value = attr === 'src' ? '/blog' + element.attributes[attr] : element.attributes[attr];
                          if (value !== null && value !== undefined) {
                            element.attributes[attr] = value;
                          }
                        }
              
                        token.content = tag(element.tagName, element.attributes);
                      }
                    }
                  });
        
        
            }, {
                prefix: '/blog'
            })
        },
        toc: {
            includeLevel: [2, 3, 4, 5]
        }
    }
  }
//   https://github.com/spokeen/blog/edit/master/docs/tool/README.md
//   https://github.com/spokeen/blog/edit/master/tool/README.md
//   https://github.com/spokeen/blog/blob/master/docs/tool/README.md