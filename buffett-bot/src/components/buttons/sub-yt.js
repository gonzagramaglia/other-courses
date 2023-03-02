module.exports = {
    data: {
        name: 'sub-yt'
    },
    async execute(interaction, client) {
        await interaction.reply({
            content: `https://www.youtube.com/watch?v=2MHIcabnjrA&t=3268s`
        })
    }
}