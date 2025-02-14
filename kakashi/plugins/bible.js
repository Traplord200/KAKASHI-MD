/*
Project Name : KAKASHI XMD
Creator      : Project X ( Ashley )
Repo         : https://github.com/techlord01/KAKASHI-MD
Support      : wa.me/263788521064
*/


const axios = require("axios");
const { cmd } = require("../command");

// Command: bible
cmd({
    pattern: "bible",
    desc: "Fetch Bible verses by reference.",
    category: "fun",
    react: "📖",
    filename: __filename
}, async (conn, mek, m, { args, reply }) => {
    try {
        // Vérifiez si une référence est fournie
        if (args.length === 0) {
            return reply(`💠 *Please provide a Bible reference.*\n\n📝 *Example:*\n.bible John 1:1`);
        }

        // Joindre les arguments pour former la référence
        const reference = args.join(" ");

        // Appeler l'API avec la référence
        const apiUrl = `https://bible-api.com/${encodeURIComponent(reference)}`;
        const response = await axios.get(apiUrl);

        // Vérifiez si la réponse contient des données
        if (response.status === 200 && response.data.text) {
            const { reference: ref, text, translation_name } = response.data;

            // Envoyez la réponse formatée avec des emojis
            reply(
                `📄 *𝘽𝙄𝘽𝙇𝙀 𝙑𝙀𝙍𝙎𝙀 𝙁𝙊𝙐𝙉𝘿!*\n\n` +
                `📖 *𝑹𝒆𝒇𝒆𝒓𝒆𝒏𝒄𝒆:* ${ref}\n` +
                `📝 *𝑻𝒆𝒙𝒕:* ${text}\n\n` +
                `🗃️ *𝑻𝒓𝒂𝒏𝒔𝒍𝒂𝒕𝒊𝒐𝒏:* ${translation_name}\n\n> © 𝐌𝐀𝐋𝐕𝐈𝐍 𝐗𝐌𝐃 𝐁𝐈𝐁𝐋𝐄`
            );
        } else {
            reply("💀 *My bad l couldn't find that verse.* Please check the reference and try again.");
        }
    } catch (error) {
        console.error(error);
        reply("⚔️ *I faced An error while fetching the Bible verse.* Please try again.");
    }
});
