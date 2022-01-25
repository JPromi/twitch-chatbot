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
            // Bot Info
            // ****************************************************

            case config.prefix + 'bot' :
                client.say(channel, "Der Twitch Chat Bot bassiert auf JavaScript und wurde von Jonas gecodet. https://github.com/JPromi/twitch-chatbot");
            break;

            case config.prefix + 'sorcecode' :
                client.say(channel, "Hier findest du den Sorce Code zu dem Bot: https://github.com/JPromi/twitch-chatbot");
            break;


        }

    }
}