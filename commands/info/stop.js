const { Client, CommandInteraction, DiscordAPIError , MessageEmbed} = require("discord.js");
var ms = require(`ms`)
module.exports = {
    name: "stop",
    description: "Add a specfied role to a user",
    aliases: ["st"],
    inVoiceChannel: true,
    category : "Music",

    run: async (client, message, args) => {
       
        const queue = client.player.getQueue(message)
        var e = new MessageEmbed()
        .setTitle(`Can't get queue`)
        .setColor(`RED`)
        .setDescription(`❌ | There is nothing in the queue to stop.`)
        if (!queue) return message.channel.send({embeds : [e]})
        if(message.member.voice?.channel.id !== message.guild.members.me.voice?.channel.id) return message.channel.send({content : `❌ | You must be in the same voice channel as me to play music.`})

        queue.stop()
        var ee = new MessageEmbed()
        .setTitle(`Stopped the music`)
        .setColor(`GREEN`)
        .setDescription(`✅ | Stopped the music and cleared the queue.`)
        message.channel.send({embeds : [ee]})
        
    }
}