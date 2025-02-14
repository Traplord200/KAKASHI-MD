/*
Project Name : KAKASHI XMD
Creator      : PROJECT X
Repo         : https://github.com/techlord01/KAKASHI-MD
Support      : wa.me/263788521064
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
    desc: "kakashi menu",
    category: "menu",
    react: "☪️",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

let dec = `    
╭──────────────≫
┋*ᴄʀᴇᴀᴛᴏʀ* : *SIR PROJECT x (🇿🇼)*
┋*ᴍᴏᴅᴇ* : *${config.MODE}*
┋*ᴘʀᴇғɪx* : *${config.PREFIX}*
┋*ʀᴀᴍ* : ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
┋*ᴠᴇʀsɪᴏɴ* : *2.0.4* 
┋*ᴜᴘᴛɪᴍᴇ* : ${runtime(process.uptime())}
┋
╰──────────────≫
   
   Kakashi ХᎠ ՏႮᏢᏢϴᎡͲ ↷


${readMore}
\`CHANNEL🩵\`
https://whatsapp.com/channel/0029VazncnIBPzjOc2r0Ed3S

\`GROUP💙\` 👥
https://chat.whatsapp.com/DYTEBefKExOAm7lzIDUTQc
\`YT CHANNEL\`🚀
https://youtube.com/@malvintech2 

\`Sir Project x\` *Developer🧑‍💻*
wa.me/263788521064?text=Support!


> ⚔️ᴊᴏɪɴ ᴍᴀʟᴠɪɴ xᴅ ɴᴇxᴜs ᴄʜᴀɴɴᴇʟ ⚔️

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




//  KAKASHI-XMD SC BY SIR PROJECT X
