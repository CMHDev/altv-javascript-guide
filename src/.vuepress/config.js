const { description } = require('../../package');

const meta = [
    ['meta', { property: 'og:title', content: `Stuyk's alt:V Guide` }],
    ['meta', { property: 'og:type', content: 'article' }],
    ['meta', { property: 'og:url', content: 'https://stuyk.github.io/altv-javascript-guide/' }],
    ['meta', { property: 'og:description', content: 'An end-to-end guide for using alt:V' }],
    ['meta', { property: 'og:article:author', content: 'stuyk' }]
];

const sidebar = {
    docs: [
        //
        {
            //
            title: 'Guide',
            collapsable: false,
            children: [
                {
                    title: '🚀 Introduction',
                    collapsable: false,
                    children: [
                        '/docs/introduction/',
                        '/docs/introduction/installing_altv',
                        '/docs/introduction/debugging',
                        '/docs/introduction/javascript_primer'
                    ]
                },
                {
                    title: '📄 API Guide',
                    collapsable: false,
                    children: ['/docs/api/', '/docs/api/classes', '/docs/api/arrays', '/docs/api/events']
                },
                {
                    title: '💡 Events',
                    collapsable: false,
                    children: ['/docs/events/', '/docs/events/using_events']
                },
                {
                    title: '📚 Cookbook',
                    collapsable: false,
                    children: ['/docs/cookbook/']
                }
            ]
        }
    ]
};

module.exports = {
    base: '/altv-javascript-guide/',
    title: 'alt:V JavaScript Tutorials',
    description: description,
    head: [
        ['meta', { name: 'theme-color', content: '#3eaf7c' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ...meta
    ],
    themeConfig: {
        repo: 'stuyk/altv-javascript-guide',
        editLinks: false,
        docsDir: '',
        editLinkText: '',
        lastUpdated: false,
        nav: [
            {
                text: 'Start Learning',
                link: '/docs/introduction/'
            },
            {
                text: 'alt:V Website',
                link: 'https://altv.mp'
            },
            {
                text: 'Support Stuyk',
                link: 'https://patreon.com/stuyk'
            }
        ],
        sidebarDepth: 3,
        sidebar: {
            collapsable: false,
            '/docs/': sidebar.docs
        }
    },
    plugins: [
        '@vuepress/plugin-back-to-top',
        '@vuepress/plugin-medium-zoom',
        ['@vuepress/google-analytics', { ga: 'UA-832296585-4' }]
    ],
    configureWebpack: {
        resolve: {
            alias: {
                '@gif': '/gifs/',
                '@img': '/img/'
            }
        }
    }
};
