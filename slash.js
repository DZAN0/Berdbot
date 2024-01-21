/* const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, guildId} = require('./config.json');
require('dotenv').config();

const rateCommand = new SlashCommandBuilder()
.setName('rate') 
.setDescription('لتقييم المُصمم') 

.addUserOption(option => option.setName('designer')
.setDescription('منشن المصمم')
.setRequired(true))

.addStringOption(option => option.setName('rating') 
.setDescription('تقييمك للمصمم')
.setRequired(true)
.addChoices(
{ name:'سيئ',value:'سيئ'},
{ name:'متوسط',value:'متوسط'},
{ name:'ممتاز',value:'ممتاز'},
{ name:'رائع',value:'رائع'},
{ name: 'لايوصف', value: 'لايوصف' },
{ name: 'مبدع', value: 'مبدع' },
{ name: 'حلو', value: 'حلو' },
{ name: 'فنان', value: 'فنان' },
))

.addStringOption(option => option.setName('service') 
.setDescription('ما الخدمه الذي قدمه السيرفر لك')
.setRequired(true)
.addChoices(
{ name:'Discord',value:'Discord'},
{ name:'Youtube',value:'Youtube'},
{ name:'Twitter',value:'Twitter'},
{ name:'Logo',value:'Logo'},
{ name:'Twitch',value:'Twitch' }))
    
.addStringOption(option => option.setName('stars') 
.setDescription('تقييم الخدمة')
.addChoices(
{ 
name:'1',
value:'⭐'
},
{ 
name:'2',
value:'⭐⭐'
},
{ 
name:'3',
value:'⭐⭐⭐'
},
{ 
name:'4',
value:'⭐⭐⭐⭐'
},
{ 
name:'5',
value:'⭐⭐⭐⭐⭐' 
},
{
name:'6',
value: '⭐⭐⭐⭐⭐⭐'
},
{ 
name:'7',
value: '⭐⭐⭐⭐⭐⭐⭐' 
},
{
name:'8', 
value:'⭐⭐⭐⭐⭐⭐⭐⭐'
},
{
name:'9',
value:'⭐⭐⭐⭐⭐⭐⭐⭐⭐'
},
{ 
name:'10',
value:'⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐'
}
)

.setRequired(true))
                .addStringOption(option => option.setName('description') 
.setDescription('ل اعطاء وصف دقيق')
.setRequired(false));


const rest = new REST({ version: '9' }).setToken(process.env.TOKEN);

(async () => {
    try {
        await rest.put(
            Routes.applicationGuildCommands(clientId, guildId),
            { body: [rateCommand.toJSON()] },
        );
        console.log('Successfully registered slash command.');
    } catch (error) {
        console.error(error);
    }
})();*/
const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, guildId} = require('./config.json');
require('dotenv').config();
const fs = require('node:fs');

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

const star = { 
one:"<:star1:1182038731188871168>",
two:"<:star1:1182038731188871168><:star1:1182038731188871168>",
three:"<:star1:1182038731188871168><:star1:1182038731188871168><:star1:1182038731188871168>",
four:"<:star1:1182038731188871168><:star1:1182038731188871168><:star1:1182038731188871168><:star1:1182038731188871168>",
five:"<:star1:1182038731188871168><:star1:1182038731188871168><:star1:1182038731188871168><:star1:1182038731188871168><:star1:1182038731188871168>",
six:"<:star1:1182038731188871168><:star1:1182038731188871168><:star1:1182038731188871168><:star1:1182038731188871168><:star1:1182038731188871168><:star1:1182038731188871168>",
seven:"<:star1:1182038731188871168><:star1:1182038731188871168><:star1:1182038731188871168><:star1:1182038731188871168><:star1:1182038731188871168><:star1:1182038731188871168><:star1:1182038731188871168>",
eight:"<:star1:1182038731188871168><:star1:1182038731188871168><:star1:1182038731188871168><:star1:1182038731188871168><:star1:1182038731188871168><:star1:1182038731188871168><:star1:1182038731188871168><:star1:1182038731188871168>",
nine:"<:star1:1182038731188871168><:star1:1182038731188871168><:star1:1182038731188871168><:star1:1182038731188871168><:star1:1182038731188871168><:star1:1182038731188871168><:star1:1182038731188871168><:star1:1182038731188871168><:star1:1182038731188871168>",
ten:"<:star1:1182038731188871168><:star1:1182038731188871168><:star1:1182038731188871168><:star1:1182038731188871168><:star1:1182038731188871168><:star1:1182038731188871168><:star1:1182038731188871168><:star1:1182038731188871168><:star1:1182038731188871168><:star1:1182038731188871168>"};





const commands = [
new SlashCommandBuilder()
.setName('pixel')
.setDescription('لمعرفة تفاصيل البكجات.')
.addStringOption(option => option.setName('name')
.setDescription('اسم البكج ال انت عايز تفاصيله')
.addChoices({
name: "Simple",
value:"Simple Package"
    },
            {
name: "Sweet",
value:"Sweet Package"
    },
            {
name: "Luxury",
value:"Luxury Package"
    })),

new SlashCommandBuilder()
.setName('ping') 
.setDescription("pong"),

new SlashCommandBuilder()
.setName('rate') 
.setDescription('لتقييم المُصمم') 

.addUserOption(option => option.setName('designer')
.setDescription('منشن المصمم')
.setRequired(true))

.addStringOption(option => option.setName('rating') 
.setDescription('تقييمك للمصمم')
.addChoices(
{ name:'سيئ',value:'سيئ'},
{ name:'متوسط',value:'متوسط'},
{ name:'ممتاز',value:'ممتاز'},
{ name:'رائع',value:'رائع'},
{ name: 'لايوصف', value: 'لايوصف' },
{ name: 'مبدع', value: 'مبدع' },
{ name: 'حلو', value: 'حلو' },
{ name: 'فنان', value: 'فنان' })
.setRequired(true))

.addStringOption(option => option.setName('service') 
.setDescription('ما نوع التصاميم التي قام المصمم بصنعها')
.addChoices(
{ name:'Discord',value:'Discord'},
{ name:'Youtube',value:'Youtube'},
{ name:'Twitter',value:'Twitter'},
{ name:'Logo',value:'Logo'},
{ name:'Twitch',value:'Twitch' },
{ name:'Anime',value:'Anime' })
.setRequired(true))
    
.addStringOption(option => option.setName('stars') 
.setDescription('تقييم المصمم بالنجوم')
.addChoices(
{ 
name:'1',
value:'<:star1:1182038731188871168>'
},
{ 
name:'2',
value:'<:star1:1182038731188871168><:star1:1182038731188871168>'
},
{ 
name:'3',
value:'<:star1:1182038731188871168><:star1:1182038731188871168><:star1:1182038731188871168>'
},
{ 
name:'4',
value:'`4`<:star1:1182038731188871168>'
},
{ 
name:'5',
value:'`5`<:star1:1182038731188871168>' 
},
{
name:'6',
value: '`6`<:star1:1182038731188871168>'
},
{ 
name:'7',
value: '`7`<:star1:1182038731188871168>' 
},
{
name:'8', 
value:'`8`<:star1:1182038731188871168>'
},
{
name:'9',
value:'`9`<:star1:1182038731188871168>'
},
{ 
name:'10',
value:'`10`<:star1:1182038731188871168>'
})
.setRequired(true))

.addStringOption(option => option.setName('description') 
.setDescription('ل اعطاء وصف دقيق')
.setRequired(false))

    
].map(command => command.toJSON());




const rest = new REST({ version: '9' }).setToken(process.env.TOKEN);

(async () => { 	
        try { 		
            console.log('Started refreshing application (/) commands.'); 		
             await rest.put( 			Routes.applicationGuildCommands(clientId, guildId), 			{ body: commands }, 		
                           ); 		
            console.log('Successfully reloaded application (/) commands.'); 	
        } catch (error) { 		
            console.error(error); 	
                        } })();