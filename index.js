const { 
    Client, 
    MessageEmbed,
    Permissions,
    MessageAttachment,
    MessageActionRow,
    MessageSelectMenu,
    Collection,    
    MessageButton,
    WebhookClient,
} = require('discord.js');
require('./slash.js');
require('dotenv').config();
const chalk = require("chalk");
const {prefix,auto,status,port,Timer,LOGRATING,guildId,clientId,feedback} = require ('./config.json');
const express = require('express');
const app = express();
const { startUptime } = require("repl.uptime");


app.get('/', (req, res) => {
  res.send('Simple World')
});
app.listen(port, () => {
console.log(chalk.blue.bgCyanBright.bold('Express is ready'));
});
app.post("/uptime_devtools", (req, res) => {
log.blue('Uptime work')
  res.send({
    msg: "done uptime",
    access: "by_devtools",
  })
})

startUptime();

const client = new Client({
    intents: 32767,
});



client.on('ready', () => {
 
console.log(chalk.green.bold(`✅${client.user.tag} is Online `))

  
setInterval(() => {
const activity = status[Math.floor(Math.random() * status.length)];
    client.user.setActivity(activity,'PLAYING',);
  }, Timer);
});


  


 













client.on('interactionCreate', async interaction => {
    
if (interaction.isCommand()) {
        
if (interaction.commandName === 'rate') {
            

const designer = interaction.options.getUser('designer'); 
const rating = interaction.options.getString('rating'); 
const service = interaction.options.getString('service'); 
const description = interaction.options.getString('description'); 
const stars = interaction.options.getString('stars');
const user = client.users.cache.get(designer.id)    
const Logchannel = client.channels.cache.get(LOGRATING)
const customer = client.users.cache.get(interaction.user.id)

if (feedback !== interaction.channel.id) {
await interaction.reply({content:"لايمكنك استخدام هذا الامر هنا",ephemeral:true}); 
    return;
}
if (designer.bot) {
//لو حد حاول يقييم بوت
await interaction.reply({ content: '**لا يمكنك تقييم بوت.**',
ephemeral: true 
                        }); 
  return;
}
if (interaction.user.id === designer.id) {
//لو حد حاول يقييم نفسه  
await interaction.reply({ content: '**لا يمكنك تقييم نفسك.**',
ephemeral: true 
                        }); 

  return;
}

//designer embed 
const serembed = new MessageEmbed()
.setTitle('**مبروك تم تقييمك🥳**')
.addFields([         
            {
name:`**تم تقييمك بـعدد من النجوم قدره:**`,
value:`** **${stars} & تقييمك بالنسبة للعميل: ${rating}`,
inline: true
            },//rate 
            {
name:`**رأي العميل عنك:**`,
value: description || '**لم يضف العميل اي رأي**'                 

                  
            },    
            {
name: `**تم تقييمك بواسطة:**`,
value:`**<@${interaction.user.id}>**`
            }
])
.setFooter(`${interaction.guild.name}`)
.setTimestamp();
//log embed
const logembed = new MessageEmbed()
.setDescription(`
تم تقييم المُصمم ${designer}
تم تقييم بواسطة <@${interaction.user.id}> 
وحصل علي تقييم${stars}`)
.setThumbnail(designer.displayAvatarURL())
.setTimestamp();
//public embed         
const embed = new MessageEmbed()
.setTitle('تقييم المُصمم') 
.setColor('RANDOM')
.setThumbnail(designer.displayAvatarURL()) //هيعرض صورة الشخص ال تم تقييمه
.addFields([
            {
name: `**المُصمم هو:**`,
value:`**${designer}**`,
inline: true
            },//designer
            {
name:`**تقييم المُصمم:**`,
value:`**${rating}**`,
inline: true
            },//rate
            {
name:`**نوع الخدمه:**`,
value:`- **${service}**`,
inline: true    
            },//service 
            {
name:`**وصف العميل:**`,
value: description || '**لم يضف العميل اي وصف.**'                 
            },   
            {
name: `**تم التقييم بواسطة:**`,
value:`**<@${interaction.user.id}>**`
            }
])
.setTimestamp()
.setFooter(`${interaction.guild.name}`, interaction.guild.iconURL()); 
await interaction.reply({ embeds: [embed] });
await Logchannel.send({embeds:[logembed]});


await user.send({embeds:[serembed]});

await customer.send(`شكرا علي تقييم** المُصمم ونشكرك علي شراء من سيرفرنا المتواضع** __${interaction.guild.name}__`);

        }
    }
}); 

client.on('interactionCreate', async int => {
    
if (int.isCommand()) {
const name = int.options.getString('name');        
//simple Package 
const simple = new MessageEmbed()

.setTitle(`${name}`)
.setDescription(`**Pic Server** \`،\` **Banner** \`،\` **Line** \`،\` **Info** 3 \`،\` **Bot** 2 \`،\` **Emoji** 3`)           
.addFields([
      {
name: `**Price**`,
value:`**Probot Credits : 300K&Tax** 
**Vodafone Cash : 10$ EG**  `
}
          ])
.setColor("2B2D31")
.setFooter(`Requested by ${int.user.tag}`)
.setTimestamp()
//sweet Package 
const sweet = new MessageEmbed()

.setTitle(`${name}`)
.setDescription(`\`،\` **Pic Server** \`،\` **Banner** \`،\` **Line** \`،\` **Welcome** \`،\` **Info** 6 \`،\` **Bot** 4  \`،\` **Emoji** 5`)   
.addFields([
            {
      name: `**Price**`,
      value:`**Probot Credits : 500K&Tax** 
      **Vodafone Cash : 20$ EG**  `
      }
                ])
.setColor("2B2D31")
.setFooter(`Requested by ${int.user.tag}`)
.setTimestamp()
//Luxury Package 
const luxury = new MessageEmbed()
.setTitle(`${name}`)          
.setDescription(`**Pic Server** \`،\` **Banner** \`،\` **Line** \`،\` **Welcome** \`،\` **Pic invite** \`،\` **Info** 9 \`،\` **Bot** 6 \`،\` **Emoji** 7`)    
.addFields([
  {
  name: `**Price**`,
  value:`
  **Probot Credits : 700K&Tax** 
  **Vodafone Cash : 30$ EG** 
  Paypal : 1 Dolar
  `
  }
            ])
.setColor("2B2D31")
.setFooter(`Requested by ${int.user.tag}`)
.setTimestamp()

if (int.commandName === 'pixel') {

if (name === 'Sweet Package') {
int.reply({embeds:[sweet],ephemeral:true})   
return;
} 
if (name === 'Simple Package') {
int.reply({embeds:[simple],ephemeral:true}) 
return;
}            
if (name === 'Luxury Package') {
int.reply({embeds:[luxury],ephemeral:true})    
return;
} 

            



         }
    }
});

client.on('interactionCreate', async int => {
if (int.isCommand()) {
if (int.commandName === 'ping'){
int.reply({content:`Pong ${client.ws.ping}`,ephemeral:true})

     }           
  }   
});







































//Bot event
client.login(process.env.TOKEN);