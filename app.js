const config = require("./config.json")
const cmdconf = require("./cmd-conf.json")

const figlet = require("figlet")

const tmi = require('tmi.js');


//Login
const client = new tmi.Client({
	options: { debug: true, messagesLogLevel: "info" },
	connection: {
		reconnect: true,
		secure: true
	},
	identity: {
		username: config.UNAME,
		password: config.PASSWD
	},
	channels: [ config.CHANNEL ]
});

//Console
client.connect(

    figlet('JPromi Twitch BOT', function(err, data) {
        if (err) {
            console.log('Something with figlet went wrong...');
            console.dir(err);
            return;
        }
        console.log(data)
    })

).catch(console.error);

console.log(`Bot by JPromi.com`);
console.log(`Twitch: https://twitch.tv/jpromi_`);
console.log(`YouTube: https://www.youtube.com/c/JPromi`);
console.log(`GitHub: https://github.com/JPromi`);




// **************************************************** 
// Commands
// ****************************************************
var cmdsocial = require('./commands/socials.js');
var cmdprobs = require('./commands/probs.js');
var cmdrandom = require('./commands/random.js')
var cmdinter = require('./commands/interaction.js')


client.on('chat', function(channel, user, message, _self) { 
    if(_self) return;

    cmdinter.run(client, channel, user, message, _self);
    cmdprobs.run(client, channel, user, message, _self);
    cmdrandom.run(client, channel, user, message, _self);
    cmdsocial.run(client, channel, user, message, _self);
});