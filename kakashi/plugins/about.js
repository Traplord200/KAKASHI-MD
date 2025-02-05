/*
Project Name : KAKASHI XMD
Creator      : PROJECT X & ANDY( BLACK HAWK TEAM )
Repo         : https://github.com/Andyech/KAKASHI-MD
Support      : wa.me/263788521064
*/


const config = require('../../settings');


const {cmd , commands} = require('../command')
cmd({
    pattern: "about",
    alias: ["PROJECT"],
    react: "✡️",
    desc: "get owner dec",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let madeMenu = `╭┄┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅┅

*☯️ ʜᴇʟʟᴏ ᴜsᴇʀ ${pushname}*\n\n *ɪ ᴀᴍ KAKASHI HATAKE xᴍᴅ*\n\n
  ɪ ᴀᴍ  ᴡʜᴀᴛsᴀᴘᴘ ʙᴀsᴇᴅ SHONEN ᴍᴜʟᴛɪ ᴅᴇᴠɪᴄᴇ ʙᴏᴛ ᴄʀᴇᴀᴛᴇᴅ ʙʏ PROJECT-X & ANDY ғʀᴏᴍ ᴢɪᴍʙᴀʙᴡᴇ & UGANDA.\nᴍʏ sᴏʟᴇ ᴘᴜʀᴘᴏsᴇ ɪs ᴛᴏ ʀᴇᴍᴏᴠᴇ ᴛʜᴇ ʙᴜʀᴅᴇɴ ᴏʀ ᴄᴏsᴛ ᴏғ ᴘᴜʀᴄʜᴜsɪɴɢ ᴅᴀᴛᴀ ʙᴜɴᴅʟᴇ ᴛᴏ ᴅᴏᴡɴʟᴏᴀᴅ sᴏɴɢs, ᴀᴘᴘs, ᴠɪᴅᴇᴏs & ᴍᴏᴠɪᴇs ʙʏ  ᴜsɪɴɢ ᴡʜᴀᴛsᴀᴘᴘ  ʙᴜɴᴅʟᴇs.
\n\n *ғᴏʀ ᴍᴏʀᴇ ɪɴғᴏʀ ᴠɪsɪᴛ.....
     ─┄┄┄┅┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┉┄┄─

> *SOURCE CODE* : https://github.com/Andyech/KAKASHI-MD

> *FOLLOW OWNER* :https://github.com/SoloLord201/

> *OWNER'S WHATSAPP* : https://wa.me/263788521064/?text=KAKASHI-xᴍᴅ+Fan+Here

> *maintained by* :
https://wa.me/263788521064/?text=KAKASHI-xᴍᴅ+Fan+Here

> *SUPPORT CHANNEL* : https://whatsapp.com/channel/0029Vb1g3EVLY6d6W3Tq6H0Z

> *FOLLOW INSTAGRAM* :https://instagram.com/malvinking20/

> *FOLLOW OWNER* :https://youtube.com/@malvintech2/

 *RELEASE DATE* - *02 FEBRUARY 2025*
 
> *BLACK HAWK TEAM*

━━━━━━━━━━━━━━━━━━━━━━━━
`

await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/7pg2gp.jpg` },
                caption: madeMenu,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363306168354073@newsletter',
                        newsletterName: '🪀『 𝙼𝙰𝙻𝚅𝙸𝙽-𝚇𝙼𝙳 』🪀 ',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

        // Send audio //https://github.com/SoloLord201//Kakashi-database/raw/refs/heads/main/Media/menu.mp3
        await conn.sendMessage(from, { //https://github.com/sololord201/sololord201-database/raw/refs/heads/main/Media/menu.mp3
            audio: { url: 'https://github.com/sololord201/sololord201-database/raw/refs/heads/main/Media/menu.mp3' },
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });
        
    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

