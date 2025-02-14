/*
Project Name : KAKASHI XMD
Creator      : Project x
Repo         : https://github.com/techlord01/KAKASHI-MD
Support      : wa.me/263788521064
*/




const { cmd } = require('../command');
const config = require('../../settings');

cmd({
    pattern: "owner",
    react: "✅", 
    desc: "Get owner number",
    category: "main",
    filename: __filename
}, 
async (conn, mek, m, { from }) => {
    try {
        const ownerNumber = config.OWNER_NUMBER; // Fetch owner number from config
        const ownerName = config.OWNER_NAME;     // Fetch owner name from config

        const vcard = 'BEGIN:VCARD\n' +
                      'VERSION:3.0\n' +
                      `FN:${ownerName}\n` +  
                      `TEL;type=CELL;type=VOICE;waid=${ownerNumber.replace('+', '')}:${ownerNumber}\n` + 
                      'END:VCARD';

        // Send the vCard
        const sentVCard = await conn.sendMessage(from, {
            contacts: {
                displayName: ownerName,
                contacts: [{ vcard }]
            }
        });

        // Send the owner contact message with image and audio
        await conn.sendMessage(from, {
            image: { url: 'https://files.catbox.moe/bddvfr.jpg' }, // Image URL from your request
            caption: `
╭┈┈┈───────┈┈┈┈┈┈┈┈┈
┊• *Here are the owner details*
┊• *𝑁𝑎𝑚𝑒* : ${ownerName}
┊• *𝑁𝑢𝑚𝑏𝑒𝑟*: ${ownerNumber}
┆• *𝑉𝑒𝑟𝑠𝑖𝑜𝑛*: _2.0.4_
╰┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
> © sᴛᴀʏ ᴄᴏɴɴᴇᴄᴛᴇᴅ ғᴏʀ ғᴀɴᴛᴀsᴛɪᴄ ᴜᴘᴅᴀᴛᴇs!`, // Display the owner's details
            contextInfo: {
                mentionedJid: [`${ownerNumber.replace('+', '')}@s.whatsapp.net`], 
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363306168354073@newsletter',
                    newsletterName: 'Kakashi x',
                    serverMessageId: 143
                }            
            }
        }, { quoted: mek });

        // Send audio as per your request
        await conn.sendMessage(from, {
            audio: { url: 'https://github.com/kingmalvn/malvin-database/raw/refs/heads/main/Media/menu.mp3' }, // Audio URL
            mimetype: 'audio/mp4',
            ptt: true
        }, { quoted: mek });

    } catch (error) {
        console.error(error);
        reply(`An error occurred: ${error.message}`);
    }
});
