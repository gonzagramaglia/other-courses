const { SlashCommandBuilder, EmbedBuilder } = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('embed')
        .setDescription('Returns an embed'),
    async execute(interaction, client){
        const embed = new EmbedBuilder()
            .setTitle(`Very cool title!`)
            .setDescription(`This is a very cool description!`)
            .setColor(0xffee11)
            .setImage(client.user.displayAvatarURL())
            .setThumbnail(client.user.displayAvatarURL())
            .setTimestamp(Date.now())
            .setAuthor({
                url: `https://en.wikipedia.org/wiki/Warren_Buffett`,
                iconURL: interaction.user.displayAvatarURL(),
                name: interaction.user.tag
            })
            .setFooter({
                iconURL: client.user.displayAvatarURL(),
                text: client.user.tag
            })
            .setURL(`https://en.wikipedia.org/wiki/Berkshire_Hathaway`)
            .addFields([
                {
                    name: `Field 1`,
                    value: `Field value 1`,
                    inline: true
                },
                {
                    name: `Field 2`,
                    value: `Field value 2`,
                    inline: true
                }
            ])

            await interaction.reply({
                embeds: [embed]
            })
    }
}