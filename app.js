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

    figlet('JPromi BOT', function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        console.log(data)
    })

).catch(console.error);

//Commands
client.on('message', (channel, tags, message, self) => {
	if(self) return;

    //hey command
	if(message.toLowerCase() === config.prefix + 'hey') {
		client.say(channel, `Hey @${tags.username}, schön das du im Stream bist!`);
	}

    // bot command
    if(message.toLowerCase() === config.prefix + 'bot') {
		client.say(channel, `Discord bot basiert auf javascript und wurde von JPromi programmiert. https://github.com/JPromi`);
	}

    //youtube command
    if(message.toLowerCase() === config.prefix + 'youtube') {
		client.say(channel, `YouTube: ` + cmdconf.YT);
	}
    if(message.toLowerCase() === config.prefix + 'yt') {
		client.say(channel, `YouTube: ` + cmdconf.YT);
	}

    //Twitch command
    if(message.toLowerCase() === config.prefix + 'twitch') {
        client.say(channel, `Twitch: ` + cmdconf.TW);
    }

    //Instagram command
    if(message.toLowerCase() === config.prefix + 'instagram') {
        client.say(channel, `Instagram: ` + cmdconf.IG);
    }
    if(message.toLowerCase() === config.prefix + 'ig') {
        client.say(channel, `Instagram: ` + cmdconf.IG);
    }
    if(message.toLowerCase() === config.prefix + 'insta') {
        client.say(channel, `Instagram: ` + cmdconf.IG);
    }

    //Discord Server link
    if(message.toLowerCase() === config.prefix + 'dc') {
        client.say(channel, `Discord Server: ` + cmdconf.DC);
    }
    if(message.toLowerCase() === config.prefix + 'discord') {
        client.say(channel, `Discord Server: ` + cmdconf.DC);
    }

    //Website command
    if(message.toLowerCase() === config.prefix + 'web') {
        client.say(channel, `Website: ` + cmdconf.WWW);
    }
    if(message.toLowerCase() === config.prefix + 'website') {
        client.say(channel, `Website: ` + cmdconf.WWW);
    }
    if(message.toLowerCase() === config.prefix + 'www') {
        client.say(channel, `Website: ` + cmdconf.WWW);
    }

    //Donation link
    if(message.toLowerCase() === config.prefix + 'tip') {
        client.say(channel, `Donation Link: ` + cmdconf.TIP);
    }
    if(message.toLowerCase() === config.prefix + 'donation') {
        client.say(channel, `Donation Link: ` + cmdconf.TIP);
    }
});