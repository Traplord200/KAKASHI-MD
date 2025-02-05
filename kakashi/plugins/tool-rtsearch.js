const { cmd, commands } = require('../command');
const os = require("os");
const { runtime } = require('../functions');

cmd({
    pattern: "ringtones",
    alias: ["tones", "phonetones",],
    desc: "Check uptime and system status",
    category: "main",
    react:"🎶",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        // Generate system status message
        const status = `*🎺 𝐑𝐈𝐍𝐆𝐓𝐎𝐍𝐄𝐒 𝐋𝐈𝐒𝐓🎺*

────────────
1. Querky
2. QUERER QUEREMOS
3. HK47 - Query
4. Query-sms-tone
5. Querida
6. Querido
7. Querer
8. Querersin
9. 8bit Art Of Thedress
10. 8bitartofthedress2
11. Lunas Future
12. Equestria Girls Tone
13. Pony Swag
14. Milkshake Race
15. Evil Enchantress
16. Yay
17. Hush Now Metal Now
18. Mlp Yay
19. BIBIDDY-BOOPY
20. Adventure
21. Sandviches
22. Friendship
23. Redheart - Shh
24. Flutterbeep
25. Nurse Redheart
─────────────

  \`\`\` USAGE EXAMPLE\`\`\`
      \`.ringtone\` Querky


> ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴍᴀʟᴠɪɴ xᴍᴅ`;

        // Send the status message with an image
        await conn.sendMessage(from, { 
            image: { url: `https://files.catbox.moe/bddvfr.jpg` },  // Image URL
            caption: status,
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363306168354073@newsletter',
                    newsletterName: 'ɱαℓѵเɳ אɱ∂ ɾเɳɠƭσɳεร',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (e) {
        console.error("Error :", e);
        reply(`An error occurred: ${e.message}`);
    }
});
