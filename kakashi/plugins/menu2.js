const config = require('../../settings');
const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../functions');
const axios = require('axios');

cmd({
    pattern: "menu2",
    desc: "menu the bot",
    category: "menu",
    react: "🗡️",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `╭┉┉┉〔 *${config.BOT_NAME}* 〕┉┉┉┈⊷
┋✮╭──────────────
┋✮│ Owner : *${config.OWNER_NAME}*
┋★│ Baileys : *⌨︎Multi Device*
┋✮│ Type : *🍃NodeJs*
┋✮│ Platform : *[${os.hostname()}]*
┋★│ Mode : *[${config.MODE}]*
┋✮│ Prifix : *[${config.PREFIX}]*
┋✮│ Version : *3.0.0 Bᴇᴛᴀ☯*
┋✮╰──────────────
╰━━━━━━━━━━━━━━━┈⊷
      〔 *☟︎Tool Kit 🗡️𝗟𝗶𝘀𝘁☟︎* 〕
 ╭─────────────·๏
 ┊• 🗡️aimenu
 ┊• 🗡️toolsmenu
 ┊• 🗡️convertmenu
 ┊• 🗡️funmenu
 ┊• 🗡️dlmenu
 ┊• 🗡️listcmd
 ┊• 🗡️mainmenu
 ┊• 🗡️groupmenu
 ┊• 🗡️ownermenu
 ┊• 🗡️othermenu
 ┊• 🗡️logo <text>
 ┊• 🗡️repo
 ╰──────────────┈⊷

> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/2fkqyz.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363306168354073@newsletter',
                        newsletterName: 'BLACK HAWKS tech',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

        // Send audio
        await conn.sendMessage(from, {
            audio: { url: 'https://github.com/SoloLord201/Kakashi-database/raw/refs/heads/main/Media/menu2.mp3' },
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });
        
    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});


// dlmenu

cmd({
    pattern: "dlmenu",
    desc: "menu the bot",
    category: "menu",
    react: "🌐",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = ` *𝗗𝗼𝘄𝗻𝗹𝗼𝗮𝗱 Tool Kit 🗡️ 𝗠𝗲𝗻𝘂* 〕
        
╭─────────────⪼
┋ ☻ 🗡️*ᴀᴘᴋ* 
┋ ☻ 🗡️*ᴛᴡɪᴛᴛᴇʀ* 
┋ ☻ 🗡️*ɢᴅʀɪᴠᴇ* 
┋ ☻ 🗡️*ᴍᴇᴅɪᴀғɪʀᴇ* 
┋ ☻ 🗡️*ᴍᴇᴅɪᴀғɪʀᴇᴘʀᴏ*
┋ ☻ 🗡️*sᴘᴏᴛɪғʏ*
┋ ☻ 🗡️*ғʙ*
┋ ☻ 🗡️*ɪɢ* 
┋ ☻ 🗡️*ᴍᴏᴠɪᴇ*
┋ ☻ 🗡️*sᴏɴɢ* 
┋ ☻ 🗡️*ᴠɪᴅᴇᴏ* 
┋ ☻ 🗡️*ᴠɪᴅᴇᴏ2*
┋ ☻ 🗡️*ᴠɪᴅᴇᴏᴛ*
┋ ☻ 🗡️*ᴠɪᴅᴘʀᴏ*
┋ ☻ 🗡️*ᴘʟᴀʏ*
┋ ☻ 🗡️*ᴘʟᴀʏ2*
┋ ☻ 🗡️*ᴘʟᴀʏ3*
┋ ☻ 🗡️*ᴘʟᴀʏᴛ*
┋ ☻ 🗡️*ᴘʟᴀʏᴘʀᴏ*
┋ ☻ 🗡️*ᴘʟᴀʏᴜʟᴛʀᴀ*
┋ ☻ 🗡️*ʏᴛ*
┋ ☻ 🗡️*ʏᴛᴍᴘ3*
┋ ☻ 🗡️*ʏᴛᴍᴘ4*
┋ ☻ 🗡️*ᴛɪᴋᴛᴏᴋ* 
┋ ☻ 🗡️*ᴛɪᴋᴛᴏᴋ2*
┋ ☻ 🗡️*ɪᴍɢ* 
┋ ☻ 🗡️*ʙᴀɪsᴄᴏᴘᴇ*
┋ ☻ 🗡️*sɪɴʜᴀʟᴀsᴜʙ*
┋ ☻ 🗡️*ɢᴇɴɪsɪsɪʟᴀ*
┋ ☻ 🗡️*xɴxxᴅᴏᴡɴ*
┋ ☻ 🌐*xᴠᴅʟ*
╰━━━━∙⋆⋅⋆∙━ ─┉─ • ─┉─⊷

> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/2fkqyz.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363306168354073@newsletter',
                        newsletterName: 'BLACK HAWKS tech',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// group menu

cmd({
    pattern: "groupmenu",
    desc: "menu the bot",
    category: "menu",
    react: "⤵️",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try
       {
        let dec = `〘 𝗚𝗥𝗢𝗨𝗣 𝗠𝗘𝗡𝗨〙

╭────────────⪼
┋ ☛ 🗡️*ᴘʀᴏᴍᴏᴛᴇ* 
┋ ☛ 🗡️*ᴅᴇᴍᴏᴛᴇ* 
┋ ☛ 🗡️*ᴅᴇʟᴇᴛᴇ*
┋ ☛ 🗡️*ᴋɪᴄᴋ* 
┋ ☛ 🗡️*ᴋɪᴄᴋᴀʟʟ*
┋ ☛ 🗡️*ᴀᴅᴅ* 
┋ ☛ 🗡️*ᴀᴅᴍɪɴs* 
┋ ☛ 🗡️*ɢᴇᴛᴘɪᴄ* 
┋ ☛ 🗡️*sᴇᴛᴡᴇʟᴄᴏᴍᴇ* 
┋ ☛ 🗡️*sᴇᴛɢᴏᴏᴅʙʏᴇ* 
┋ ☛ 🗡️*ᴘᴏʟʟ*
┋ ☛ 🗡️*ɢɴᴀᴍᴇ* 
┋ ☛ 🗡️*ᴛᴀɢᴀʟʟ* 
┋ ☛ 🗡️*ᴛᴀɢᴀᴅᴍɪɴ* 
┋ ☛ 🗡️*ᴏᴘᴇɴᴛɪᴍᴇ/ᴄʟᴏsᴇᴛɪᴍᴇ* 
┋ ☛ 🗡️*ɢɪɴғᴏ* 
┋ ☛ 🗡️*ɢʟɪɴᴋ*
┋ ☛ 🗡️*ᴜɴʟᴏᴄᴋ*
┋ ☛ 🗡️*ʟᴏᴄᴋ*
┋ ☛ 🗡️*ᴍᴜᴛᴇ*
┋ ☛ 🗡️*ᴜɴᴍᴜᴛᴇ*
┋ ☛ 🗡️*ɢᴅᴇsᴄ*
┋ ☛ 🗡️*sᴇᴛsᴜʙᴊᴇᴄᴛ*
┋ ☛ 🗡️*ɪɴᴠɪᴛᴇ*
┋ ☛ 🗡️*ᴊᴏɪɴ*
┋ ☛ 🗡️*ʀᴇᴠᴏᴋᴇ*
┋ ☛ 🗡️*ᴜᴘᴅᴀᴛᴇɢᴅsᴇᴄ*
┋ ☛ 🗡️*ᴜᴘᴅᴀᴛᴇɢɴᴀᴍᴇ*
┋ ☛ 🗡️*ᴅᴊ*
┋ ☛ 🗡️*ᴜɴʟᴏᴄᴋɢs*
┋ ☛ 🗡️*ʟᴏᴄᴋɢs*
┋ ☛ 🗡️*sᴇɴᴅᴅᴍ*
┋ ☛ 🗡️*ᴅɪsᴀᴘᴘᴇᴀʀ*
┋ ☛ 🗡️*ᴀʟʟʀᴇϙ*
┋ ☛ 🗡️*ᴊᴏɪɴʀᴇϙᴜᴇsᴛs*
┋ ☛ 🗡️*ʜɪᴅᴇᴛᴀɢ*
╰━━━━∙⋆⋅⋆∙━ ─┉─ • ─┉─⊷

> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/2fkqyz.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363306168354073@newsletter',
                        newsletterName: 'BLACK HAWKS tech',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// fun menu

cmd({
    pattern: "funmenu",
    desc: "menu the bot",
    category: "menu",
    react: "🗞️",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {

        let dec = `〘 𝗙𝗨𝗡 TOOL KIT 🗡️ 𝗠𝗘𝗡𝗨 〙

╭────────────⪼
┋ ◉ 🏂*ғᴀᴄᴛ* 
┋ ◉ 🏂*ʜᴀᴄᴋ*  
┋ ◉ 🏂*ʟᴏʟɪ* 
┋ ◉ 🏂*ᴡᴀɪғᴜ*
┋ ◉ 🏂*ɴᴇᴋᴏ*
┋ ◉ 🏂*ᴍᴇɢᴜᴍɪɴ*
┋ ◉ 🏂*ᴀᴡᴏᴏ*
┋ ◉ 🏂*ᴅᴏɢ*
┋ ◉ 🏂*ʀᴡ/ᴡᴀʟʟᴘᴀᴘᴇʀ*
┋ ◉ 🏂*ʙɪʙʟᴇ*
┋ ◉ 🏂*sʜɪᴘ*
┋ ◉ 🏂*ɪɴsᴜʟᴛ*
┋ ◉ 🏂*ғᴀɴᴄʏ*
┋ ◉ 🏂*ᴘɪᴄᴋᴜᴘʟɪɴᴇ*
┋ ◉ 🏂*ᴄʜᴀʀᴀᴄᴛᴇʀ*
┋ ◉ 🏂*ʀɪɴɢᴛᴏɴᴇ*
┋ ◉ 🏂*ʀɪɴɢᴛᴏɴᴇs*
┋ ◉ 🏂*ʀᴄᴏʟᴏʀ*
┋ ◉ 🏂*ʀᴏʟʟ*
┋ ◉ 🏂*ᴘɪᴄᴋ*
┋ ◉ 🏂*ᴄᴏɪɴғʟɪᴘ*
┋ ◉ 🏂*ғʟɪᴘ*
┋ ◉ 🏂*ᴅᴀᴛᴇ*
┋ ◉ 🏂*ᴛɪᴍᴇɴᴏᴡ*
┋ ◉ 🏂*ᴄᴏᴜɴᴛ*
┋ ◉ 🏂*ᴄᴏᴜɴᴛx*
┋ ◉ 🏂*sʜᴀᴘᴀʀ*
┋ ◉ 🏂*ᴄᴀʟᴄᴜʟᴀᴛᴇ*
┋ ◉ 🏂*ʀᴀᴛᴇ*
╰━━━━∙⋆⋅⋆∙━ ─┉─• ─⊷

> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/2fkqyz.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363306168354073@newsletter',
                        newsletterName: 'BLACK HAWKS tech',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// other menu

cmd({
    pattern: "othermenu",
    desc: "menu the bot",
    category: "menu",
    react: "🤖",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `〘 𝗢𝗧𝗛𝗘𝗥 KIT 🗡️ 𝗠𝗘𝗡𝗨 〙

╭┈┈┈┈┈┉┉┉┈┈┈┈┈┈┈⪼
┋ ☻ 🌀*.ᴍᴏᴠɪᴇ*
┋ ☻ 🌀*.ɢꜱᴛᴀʟᴋ*
┋ ☻ 🌀*.ɢᴘᴀꜱꜱ*
┋ ☻ 🌀*.ɢɪᴛᴄʟᴏɴᴇ*
┋ ☻ 🌀*.ʀᴇᴘᴏ*
┋ ☻ 🌀*.ᴅᴇғɪɴᴇ*
┋ ☻ 🌀*.ᴜʀʟ*
┋ ☻ 🌀*.sᴀᴠᴇ*
┋ ☻ 🌀*.ϙᴜᴏᴛᴇ*
┋ ☻ 🌀*.sᴛᴀᴛᴜs*
┋ ☻ 🌀*.sʀᴇᴘᴏ*
┋ ☻ 🌀*.ɴᴘᴍ*
╰━━━━∙⋆⋅⋆∙━ ─┉┉─⊷

> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/2fkqyz.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363306168354073@newsletter',
                        newsletterName: 'BLACK HAWKS tech',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// main menu

cmd({
    pattern: "mainmenu",
    desc: "menu the bot",
    category: "menu",
    react: "🗿",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `〘 𝗠𝗔𝗜𝗡 KIT 🗡️ 𝗠𝗘𝗡𝗨 〙

╭─────────────
┋ ◕ 🌐*ᴀʟɪᴠᴇ* 
┋ ◕ 🌐*ʙᴏᴛ*
┋ ◕ 🌐*ᴍᴇɴᴜ* 
┋ ◕ 🌐*ᴀʟʟᴍᴇɴᴜ* 
┋ ◉ 🌐*ʟɪsᴛ*
┋ ◕ 🌐*sᴜᴘᴘᴏʀᴛ* 
┋ ◕ 🌐*sʏsᴛᴇᴍ* 
┋ ◕ 🌐*ᴘɪɴɢ* 
┋ ◕ 🌐*ʀᴜɴᴛɪᴍᴇ* 
┋ ◕ 🌐*ᴜᴘᴅᴀᴛᴇ*
┋ ◕ 🌐*ɪɴғᴏ*
┋ ◕ 🌐*ᴀʙᴏᴜᴛ*
┋ ◕ 🌐*ᴛɪɴʏᴜʀʟ*
┋ ◕ 🌐*ᴏʙғ/ᴏʙғᴜsᴄᴀᴛᴇ*
┋ ◉ 🌐*ϙʀᴄᴏᴅᴇ*
┋ ◕ 🌐*ʙᴀsᴇ64*
┋ ◕ 🌐*ᴅᴇʙᴀsᴇ64*
┋ ◕ 🌐*ғᴇᴛᴄʜ / ᴀᴘɪ*
╰━━━━∙⋆⋅⋆∙━ ─┉─ • ─┉─⊷

> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/2fkqyz.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363306168354073@newsletter',
                        newsletterName: 'BLACK HAWKS tech',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// owner menu

cmd({
    pattern: "ownermenu",
    desc: "menu the bot",
    category: "menu",
    react: "👑",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `〘 HOKAGE ⛩️ 𝗠𝗘𝗡𝗨 〙

╭───────────────⪼
┋⚉ ⚙️*.ᴏᴡɴᴇʀ*
┋⚉ ⚙️*.ʀᴇᴘᴏ*
┋⚉ ⚙️*ʙᴏᴛ*
┋⚉ ⚙️*.ꜱʏꜱᴛᴇᴍ*
┋⚉ ⚙️*.ᴠᴇrsɪᴏɴ*
┋⚉ ⚙️*.ʙʟᴏᴄᴋ*
┋⚉ ⚙️*.ᴜɴʙʟᴏᴄᴋ*
┋⚉ ⚙️*.ᴄʟᴇᴀʀᴄʜᴀᴛs*
┋⚉ ⚙️*.sᴇᴛᴘᴘ*
┋⚉ ⚙️*.ʙʀᴏᴀᴅᴄᴀsᴛ*
┋⚉ ⚙️*.ᴘɪɴɢ*
┋⚉ ⚙️*.ᴘɪɴɢ2*
┋⚉ ⚙️*.ᴊɪᴅ*
┋⚉ ⚙️*.ɢᴊɪᴅ*
┋⚉ ⚙️*.ᴊɪᴅ1*
┋⚉ ⚙️*.ᴊɪᴅ2*
┋⚉ ⚙️*.ʀᴇꜱᴛᴀʀᴛ*
┋⚉ ⚙️*.ᴘᴀɪʀ 263xxx*
┋⚉ ⚙️*.ᴘᴀɪʀ2 263xxx*
╰━━━━∙⋆⋅⋆∙━ ─┉─ • ─┉─⊷

> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/2fkqyz.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363306168354073@newsletter',
                        newsletterName: 'BLACK HAWKS tech',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

// convert menu

cmd({
    pattern: "convertmenu",
    desc: "menu the bot",
    category: "menu",
    react: "☯️",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `𝗖𝗢𝗡𝗩𝗘𝗥𝗧 KIT 🗡️ 𝗠𝗘𝗡𝗨

╭─────────────⪼
┋ ☻ 🍃*ᴄᴏɴᴠᴇʀᴛ* 
┋ ☻ 🍃*ss* 
┋ ☻ 🍃*ᴛʀᴛ*
┋ ☻ 🍃*ᴛᴛs*
┋ ☻ 🍃*ᴠᴠ*
┋ ☻ 🍃*ғᴀɴᴄʏ*
┋ ☻ 🍃*sᴛɪᴄᴋᴇʀ*
┋ ☻ 🍃*ʟᴏɢᴏ*
┋ ☻ 🍃*ʙɪɴᴀʀʏ*
┋ ☻ 🍃*ᴅᴇʙɪɴᴀʀʏ*
┋ ☻ 🍃*ᴇɴᴄᴏᴅᴇ*
┋ ☻ 🍃*ᴅᴇᴄᴏᴅᴇ*
┋ ☻ 🍃*ᴜʀʟᴇɴᴄᴏᴅᴇ*
┋ ☻ 🍃*ᴜʀʟᴅᴇᴄᴏᴅᴇ*
┋ ☻ 🍃*ᴛɪɴʏᴜʀʟ*
┋ ☻ 🍃*ᴜʀʟ / ᴛᴏᴜʀʟ*
╰━━━━∙⋆⋅⋆∙━ ─┉─ •┉─⊷

> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/2fkqyz.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363306168354073@newsletter',
                        newsletterName: 'BLACK HAWKS tech',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});


// anmie menu 

cmd({
    pattern: "toolsmenu",
    desc: "menu the bot",
    category: "menu",
    react: "🍷",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
          let dec = `〘 𝗧𝗢𝗢𝗟𝗦 𝗠𝗘𝗡𝗨 〙

╭────────────⪼
┋ ☻ 🍷*.ᴋɪss*
┋ ☻ 🍷*.ʜᴀɴᴅ*
┋ ☻ 🍷*.ʜᴀᴘᴘʏ*
┋ ☻ 🍷*.ʜᴇᴀʀᴛ*
┋ ☻ 🍷*.ᴀɴɢᴇʀ*
┋ ☻ 🍷*.sᴀᴅ*
┋ ☻ 🍷*.sʜʏ*
┋ ☻ 🍷*.ᴍᴏᴏɴ*
┋ ☻ 🍷*.ᴄᴏɴғᴜsᴇᴅ*
┋ ☻ 🍷*.ɴɪᴋᴀʟ*
╰━━━━∙⋆⋅⋆∙━ ─ • ─┉─⊷

> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/2fkqyz.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363306168354073@newsletter',
                        newsletterName: 'BLACK HAWKS tech',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});


// ai menu 

cmd({
    pattern: "aimenu",
    desc: "menu the bot",
    category: "menu",
    react: "🌀",
    filename: __filename
}, 
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        let dec = `〘 𝗔𝗜 TOOL KIT 🗡️ 𝗠𝗘𝗡𝗨 〙

╭─────────────⪼
┋ ☻ 🗡️*ᴀɪ* 
┋ ☻ 🗡️*ɢᴘᴛ*
┋ ☻ 🗡️*KAKASHI*
┋ ☻ 🗡️*ɢᴇᴍɪɴɪ*
┋ ☻ 🗡️*ɢᴘᴛ3*
┋ ☻ 🗡️*ᴍɪsᴛʀᴀᴀɪ*
┋ ☻ 🗡️*ʟʟᴀᴍᴀ3*
┋ ☻ 🗡️*ɢᴘᴛ4o
╰━━━━∙⋆⋅⋆∙━ ─ • ─┉─⊷

> ${config.DESCRIPTION}`;

        await conn.sendMessage(
            from,
            {
                image: { url: `https://files.catbox.moe/2fkqyz.jpg` },
                caption: dec,
                contextInfo: {
                    mentionedJid: [m.sender],
                    forwardingScore: 999,
                    isForwarded: true,
                    forwardedNewsletterMessageInfo: {
                        newsletterJid: '120363306168354073@newsletter',
                        newsletterName: 'BLACK HAWKS tech',
                        serverMessageId: 143
                    }
                }
            },
            { quoted: mek }
        );

    } catch (e) {
        console.log(e);
        reply(`${e}`);
    }
});

