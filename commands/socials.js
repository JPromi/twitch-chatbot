const config = require("../config.json")
const cmdconf = require("../cmd-conf.json")

module.exports = {
    run: function(client, channel, user, message, _self) {


        var   msg     = message.split(' '), 
              command = msg[0].toLowerCase(); 
        msg.shift();  
        var args = msg, 
             isMod   = user.mod, 
             isSub   = user.subscriber, 
             isTurbo = user.turbo, 
             userName = user.username;



        switch(command) { 
            // **************************************************** 
            // YouTube
            // ****************************************************

            case config.prefix + 'youtube' :
            case config.prefix + 'yt' :
                client.say(channel, "YouTube: " + cmdconf.YT);
            break;


            // **************************************************** 
            // Twitch
            // ****************************************************

            case config.prefix + 'twitch' :
            case config.prefix + 'tw' :
                client.say(channel, "Twitch: " + cmdconf.TW);
            break;


            // **************************************************** 
            // Instagram
            // ****************************************************

            case config.prefix + 'instagram' :
            case config.prefix + 'ig' :
            case config.prefix + 'insta' :
                client.say(channel, "Instagram: " + cmdconf.IG);
            break;


            // **************************************************** 
            // Github
            // ****************************************************

            case config.prefix + 'github' :
                client.say(channel, "GitHub: " + cmdconf.GH);
            break;


            // **************************************************** 
            // Website
            // ****************************************************

            case config.prefix + 'web' :
            case config.prefix + 'website' :
            case config.prefix + 'www' :
                client.say(channel, "Website: " + cmdconf.WWW);
            break;


            // **************************************************** 
            // Discord
            // ****************************************************

            case config.prefix + 'dc' :
            case config.prefix + 'discord' :
                client.say(channel, "Discord Server: " + cmdconf.DC);
            break;


            // **************************************************** 
            // Donation
            // ****************************************************

            case config.prefix + 'tip' :
            case config.prefix + 'donation' :
                client.say(channel, "Donation: " + cmdconf.TIP);
            break;


            // **************************************************** 
            // Age
            // ****************************************************

            case config.prefix + 'alter' :
            case config.prefix + 'age' :
                client.say(channel, "Alter: " + cmdconf.AGE);
            break;


        }

    }
}