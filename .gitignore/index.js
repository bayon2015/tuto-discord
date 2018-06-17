const Discord = require("discord.js");

const client = new Discord.Client();

var prefix = "*";

client.login("NDU3NjQ5ODUxMDEwNzc3MTA5.DgcPpA.lN7V01Yq3qXJhXRWN_HfjViBG9A");

client.on("ready", () => {
    console.log("Je suis pret")
    client.user.setGame("Tuturuuu, I'm here for you :)")
});

client.on('message', message => {

    if(message.content.toLowerCase().startsWith("bonjour") || message.content.toLowerCase().startsWith("salut") || message.content.toLowerCase().startsWith("bonne") || message.content.toLowerCase().startsWith("bye") || message.content.toLowerCase().startsWith("merci") || message.content.toLowerCase().startsWith("coucou") || message.content.toLowerCase().startsWith("a plus") || message.content.toLowerCase().startsWith("a+")){
        message.reply("Tuturuuu :)");
        console.log('Le bot dit bonjour')
    }

    if(message.content === prefix + "aide"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#40A497")
        .setTitle("Voici mes commandes d'aide :D")
        .setThumbnail(message.author.avatarURL)
        .setDescription("Je suis Kawaiiiiibot, voici mes commandes disponibles:")
        .addField("*aide", "Affiche les commandes du bot !")
        .addField("Bonjour, Salut", "Le bot vous salut !")
        .addField("*statistiques", "Le bot vous envoit des informations sur votre profil")
        .addField("*info", "Le bot donne les infos sur le serveur !")
        /*.addField("*kick", "kick l'utilisateur !")*/
        .setFooter("Menu d'aide - Kawaiiiiibot")
        message.channel.sendMessage(help_embed);
        console.log("Un utilisateur a effectué la commande d'aide !")
    }

    if(message.content === prefix + "info") {

        var info_embed = new Discord.RichEmbed()
        .setColor ("#40A497")
        .setTitle("Voici les informations sur moi et le serveur !")
        .addField(" :robot: Nom :", `${client.user.tag}`, true)
        .addField("Descrimininateur du bot :hash:", `#${client.user.discriminator}`)
        .addField("ID :id: ", `${client.user.id}`)
        .addField("Nombre de membres", message.guild.members.size)
        .addField("Nombre de catégories et de salons", message.guild.channels.size)
        .setFooter("Info - bot & serveur")
        message.channel.sendMessage(info_embed)
        console.log("Un utilisateur a effectué la commande info")


    }

/*    if(message.content.startsWith(prefix + "kick")){
        if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.channel.send("vous n'avez pas la permission !");

        if(message.mentions.users.size === 0) {
            return message.channel.send("Vous devez mentionner un utilisateur")
        }

        var kick = message.guild.member(message.mentions.users.first());
        if(!kick) {
            return message.channel.send("Je ne sais pas si l'utilisateur existe  :/")
        }

        if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) {
            return message.channel.send(`${member.user.username} est kick par ${message.author.username}`)
        }

        kick.kick().then(memeber => {
            message.channel.send(`${member.user.username} est kick par ${message.author.username}`)
        });

    } */

    if(!message.content.startsWith(prefix)) return;

    var args = message.content.substring(prefix.length).split(" ");

    switch (args[0].toLowerCase()){
        case "statistiques":

        var userCreateDate = message.author.createdAt.toString().split(" ");
        var msgauthor = message.author.id;

        var stats_embed = new Discord.RichEmbed()

        .setColor("#FCDC12")
        .setTitle(`Statistiques de l'utilisateur : ${message.author.username}`)
        .addField (`ID de l'utilisateur :id:`, msgauthor, true)
        .addField("Date de creation de l'utilisateur :", userCreateDate[1] + ' ' + userCreateDate[2] + ' ' + userCreateDate[3])
        .setThumbnail(message.author.avatarURL)
        message.reply("Tu peux regarder tes messages privés : Tu viens de recevoir tes statistiques !")
        message.author.send({embed: stats_embed});
        console.log("Un utilisateur a effectué la commande de statistiques !")
        break;

    }


});
