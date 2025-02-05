/*
Project Name : MALVIN XMD
Creator      : Malvin King ( Mr Lord Malvin )
Repo         : https//github.com/kingmalvn/MALVIN-XMD
Support      : wa.me/263714757857
*/

function hi() {
  console.log("Hello World!");
}
hi();
const {
  cmd,
  commands
} = require('../command');
const axios = require("axios");
cmd({
  'pattern': "img",
  'alias': ["image", "pinterest", "pinimg"],
  'react': "🖼️",
  'desc': "Search and download images from Pinterest using keywords.",
  'category': "image",
  'use': ".img <keywords>",
  'filename': __filename
}, async (_0x2e2074, _0x2ab1e2, _0x1a7c4d, {
  from: _0x5bc900,
  args: _0x14015c,
  reply: _0x446460
}) => {
  try {
    const _0x4fbc0c = _0x14015c.join(" ");
    if (!_0x4fbc0c) {
      return _0x446460("*Please provide search keywords for the image. Eg Subzero*");
    }
    _0x446460("*🔍 Showing Results For - " + _0x4fbc0c + "...*");
    const _0xd9f91 = "https://apitest1-f7dcf17bd59b.herokuapp.com/download/piniimg?text=" + encodeURIComponent(_0x4fbc0c);
    const _0x22f8e9 = await axios.get(_0xd9f91);
    if (!_0x22f8e9.data || !_0x22f8e9.data.result || _0x22f8e9.data.result.length === 0x0) {
      return _0x446460("❌ No images found for \"" + _0x4fbc0c + "\".");
    }
    const _0x5d4e19 = _0x22f8e9.data.result;
    for (let _0x23faa0 = 0x0; _0x23faa0 < Math.min(_0x5d4e19.length, 0x5); _0x23faa0++) {
      const _0x5e0876 = _0x5d4e19[_0x23faa0];
      if (_0x5e0876.images_url) {
        await _0x2e2074.sendMessage(_0x5bc900, {
          'image': {
            'url': _0x5e0876.images_url
          },
          'caption': "```© Gᴇɴᴇʀᴀᴛᴇᴅ ʙʏ ᴍᴀʟᴠɪɴ xᴍᴅ🚀```"
        }, {
          'quoted': _0x2ab1e2
        });
      }
    }
    if (_0x5d4e19.every(_0x54fc16 => !_0x54fc16.images_url)) {
      _0x446460("❌ No valid image URLs found in the results.");
    }
  } catch (_0x5c9ebc) {
    console.error(_0x5c9ebc);
    _0x446460("❌ An error occurred while processing your request.");
  }
});

/*const { cmd } = require('../command');
const axios = require('axios');
const { Buffer } = require('buffer');

const GOOGLE_API_KEY = 'AIzaSyDMbI3nvmQUrfjoCJYLS69Lej1hSXQjnWI'; // Replace with your Google API key
const GOOGLE_CX = 'baf9bdb0c631236e5'; // Replace with your Google Custom Search Engine ID
//const apiKey = "AIzaSyDMbI3nvmQUrfjoCJYLS69Lej1hSXQjnWI"; // Votre clé API Google
// const cx = "baf9bdb0c631236e5"; /
cmd({
    pattern: "img",
    desc: "Search and send images from Google.",
    react: "🖼️",
    category: "media",
    filename: __filename
},
async (conn, mek, m, { from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply }) => {
    try {
        if (!q) return reply("Please provide a search query for the image.");

        // Fetch image URLs from Google Custom Search API
        const searchQuery = encodeURIComponent(q);
        const url = `https://www.googleapis.com/customsearch/v1?q=${searchQuery}&cx=${GOOGLE_CX}&key=${GOOGLE_API_KEY}&searchType=image&num=5`;
        
        const response = await axios.get(url);
        const data = response.data;

        if (!data.items || data.items.length === 0) {
            return reply("No images found for your query.");
        }

        // Send images
        for (let i = 0; i < data.items.length; i++) {
            const imageUrl = data.items[i].link;

            // Download the image
            const imageResponse = await axios.get(imageUrl, { responseType: 'arraybuffer' });
            const buffer = Buffer.from(imageResponse.data, 'binary');

            // Send the image with a footer
            await conn.sendMessage(from, {
                image: buffer,
                caption: `
*💗 Image ${i + 1} from your search! 💗*

 *©  ɢᴇɴᴇʀᴀᴛᴇᴅ ʙʏ ᴍᴀʟᴠɪɴ xᴍ! 👾*

> 🚀 ᴍᴀʟᴠɪɴ xᴅ ɴᴇxᴜs 🚀`
}, { quoted: mek });
}

    } catch (e) {
        console.error(e);
        reply(`Error: ${e.message}`);
    }
});
*/