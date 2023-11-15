const { EmbedBuilder } = require("discord.js");

module.exports = {
    name: "çeviri",
    description: "Çeviri kullanırsınız.",
    type: 1,
    options: [
        {
            name: "kelime",
            description: "Kelime giriniz.",
            type: 3,
            required: true
        },
        {
            name: "dil",
            description: "Dil seçiniz.",
            type: 3,
            required: true,
            choices: [
                { name: "Türkçeden İngilizce", value: "tr_eng" },
                { name: "İngilizceden Türkçe", value: "eng_tr" },
            ]
        }
    ],
    run:async(client,interaction) => {
        const words = interaction.options.getString("kelime");
        const language = interaction.options.getString("dil");
        if(language === "tr_eng") {
            let datas = await fetch(`https://slenzy.metehanstudio.xyz/api/ceviri?yazi=${words || "Merhaba"}&dil=en&api_key=freekey`);
            let data = await datas.json();
            let ceviri = data.ceviri;
            const embed = new EmbedBuilder()
            .setColor("Green")
            .setTitle("Çeviri")
            .setDescription(`Girdiğiniz kelime: **${words}**\nÇevirilen kelime: **${ceviri}**`)
            interaction.reply({
                embeds: [embed]
            });
        } else if(language === "eng_tr") {
            let datas = await fetch(`https://slenzy.metehanstudio.xyz/api/ceviri?yazi=${words || "Merhaba"}&dil=tr&api_key=freekey`);
            let data = await datas.json();
            let ceviri = data.ceviri;
            const embed = new EmbedBuilder()
            .setColor("Green")
            .setTitle("Çeviri")
            .setDescription(`Girdiğiniz kelime: **${words}**\nÇevirilen kelime: **${ceviri}**`)
            interaction.reply({
                embeds: [embed]
            });
        }
    }
}