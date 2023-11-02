

module.exports = {
    async rewrites() {
        return [
            {
                source: '/contact',
                destination: '/src/app/Contact.js',
            },
        ]
    },
}