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


        // HIER starten jetzt die commands ! JUHUU ;D
        switch(command) { 
            // **************************************************** 
            // Random number
            // ****************************************************

            case config.prefix + 'random' :

                var randommin = 0;
                var randommax = 50;
                var randomout = (Math.random() * (randommax - randommin)) + randommin;
                let randomoutround = randomout.toFixed(0)
                client.say(channel, "Zufällige Zahl: " + randomoutround);
            break;


        }

    }
}