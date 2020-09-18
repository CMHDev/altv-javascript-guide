const defaultNavbar = [
    {
        text: 'Languages',
        ariaLabel: 'Language Menu',
        items: [
            { text: 'English', link: '/en/introduction/' },
            { text: 'Română', link: '/ro/introduction/' },
            { text: 'Slovenský', link: '/sk/introduction/' },
            { text: 'Türk', link: '/tr/introduction/' }
        ]
    },
    {
        text: 'Unofficial Docs Discord',
        link: 'https://discord.gg/UubceKy'
    },
    {
        text: 'Support',
        link: '/support/'
    }
];

module.exports = {
    defaultNavbar
};