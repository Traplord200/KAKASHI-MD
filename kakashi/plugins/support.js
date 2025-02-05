/*
Project Name : MALVIN XMD
Creator      : Malvin King ( Mr Lord Malvin )
Repo         : https//github.com/kingmalvn/MALVIN-XMD
Support      : wa.me/263714757857
*/


const config = require('../../settings');
const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../functions');
const axios = require('axios');
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

cmd({
    pattern: "support",
    alias : "base",
    desc: "malvin menu",
    category: "menu",
    react: "📡",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

let dec = `    
╭──────────────≫
┋*ᴄʀᴇᴀᴛᴏʀ* : *ᴍʀ ᴍᴀʟᴠɪɴ (🇿🇼)*
┋*ᴍᴏᴅᴇ* : *${config.MODE}*
┋*ᴘʀᴇғɪx* : *${config.PREFIX}*
┋*ʀᴀᴍ* : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
┋*ᴠᴇʀsɪᴏɴ* : *2.0.4* 
┋*ᴜᴘᴛɪᴍᴇ* : ${runtime(process.uptime())}
┋
╰──────────────≫
   
   ᎷᎪᏞᏙᏆΝ ХᎠ ՏႮᏢᏢϴᎡͲ ↷


${readMore}
\`CHANNEL🩵\`
https://whatsapp.com/channel/0029Vac8SosLY6d7CAFndv3Z

\`GROUP💙\` 👥
https://chat.whatsapp.com/IVVhfV9ULdW250HRqKpiNe

\`YT CHANNEL\`🚀
https://youtube.com/@malvintech2 

\`Mr Ꮇalvin Ꮶing\` *Developer🧑‍💻*
wa.me/263714757857?text=Support!


> 🚀ᴊᴏɪɴ ᴍᴀʟᴠɪɴ xᴅ ɴᴇxᴜs ᴄʜᴀɴɴᴇʟ 🚀

`;

await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/bddvfr.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363306168354073@newsletter',
                        newsletterName: '🪀『 𝙼𝙰𝙻𝚅𝙸𝙽-𝚇𝙳 』🪀 ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek });
        
    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});




//  MALVIN-XMD SC BY MR MALVIN K
