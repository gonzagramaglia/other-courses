module.exports = {
    data: {
        name: `fav-color` // Al principio habia puesto el nombre entre '' y me dio error.
    },
    async execute(interaction, client){
        await interaction.reply({
            content: `You said your favorite color is: ${interaction.fields.getTextInputValue('favColorInput')}`
        })
    }
}