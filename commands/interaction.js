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
            // Hey
            // ****************************************************

            case config.prefix + 'hey' :
                client.say(channel, "@" + user.username + " begrüßt @" + msg + " im Chat. HeyGuys");
            break;


            // **************************************************** 
            // Hearth
            // ****************************************************

            case config.prefix + 'love' :
                client.say(channel, "@" + user.username + " <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3 <3");
            break;


        }

    }
}