/*
Project Name : MALVIN XMD
Creator      : Malvin King ( Mr Lord Malvin )
Repo         : https//github.com/kingmalvn/MALVIN-XMD
Support      : wa.me/263714757857
*/


 const { cmd, commands } = require('../command');
const yts = require("yt-search");
const axios = require("axios");

// Video Download Command here
cmd({
  pattern: "vidpro",
  alias: ["ytvidpro", "ytvpro", 'ytvideopro'],
  react: '🚀',
  desc: "Download videos from YouTube by searching for keywords.",
  category: "video",
  use: ".vidx <keywords>",
  filename: __filename
}, async (conn, msg, m, { from, args, reply }) => {
  try {
    const query = args.join(" ");
    if (!query) {
      return reply("*Please provide a video title or URL*");
    }

    await reply("> 𝐌𝐚𝐥𝐯𝐢𝐧 𝐗𝐦𝐝 𝐒𝐞𝐚𝐫𝐜𝐡𝐢𝐧𝐠 𝐕𝐢𝐝𝐞𝐨..... 𝑃𝑙𝑒𝑎𝑠𝑒 𝑊𝑎𝑖𝑡.....");
    
    const results = await yts(query);
    if (!results.videos || results.videos.length === 0) {
      return reply(" No results found for \"" + query + "\".");
    }

    const video = results.videos[0];
    const url = video.url;
    const apiURL = "https://api.davidcyriltech.my.id/youtube/mp4?url=" + url;

    await reply("> 𝐌𝐚𝐥𝐯𝐢𝐧 𝐗𝐦𝐝 𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝𝐢𝐧𝐠 𝐕𝐢𝐝𝐞𝐨... 𝑃𝑙𝑒𝑎𝑠𝑒 𝑊𝑎𝑖𝑡....");

    const response = await axios.get(apiURL);
    if (!response.data.success) {
      return reply(" Failed to fetch video for \"" + query + "\".");
    }

    const downloadURL = response.data.result.download_url;
    await reply("> 𝐌𝐚𝐥𝐯𝐢𝐧 𝐗𝐦𝐝 𝐒𝐞𝐧𝐝𝐢𝐧𝐠 𝐕𝐢𝐝𝐞𝐨... 𝑝𝑙𝑒𝑎𝑠𝑒 𝑤𝑎𝑖𝑡...");
    
    await conn.sendMessage(from, { video: { url: downloadURL }, mimetype: "video/mp4" }, { quoted: msg });
    
    await reply(" Video sent successfully!");
  } catch (error) {
    console.error(error);
    reply(" An error occurred while processing your request.");
  }
});


// Audio Download Command here

cmd({
pattern: "playpro",
alias: ["ytapro", "ytplaypro"],
react: '🪄',
desc: "Download audio from YouTube by searching for keywords.",
category: "music",
use: ".playpro <keywords>",
filename: __filename
}, async (conn, msg, m, { from, args, reply }) => {
try {
const query = args.join(" ");
if (!query) {
return reply("_Please provide an audio title or URL_");
}

await reply("> 𝐌𝐚𝐥𝐯𝐢𝐧 𝐗𝐦𝐝 𝐒𝐞𝐚𝐫𝐜𝐡𝐢𝐧𝐠 𝐒𝐨𝐧𝐠... 𝑃𝑙𝑒𝑎𝑠𝑒 𝑤𝑎𝑖𝑡...");

const results = await yts(query);
if (!results.videos || results.videos.length === 0) {
  return reply(" No results found for \"" + query + "\".");
}

const video = results.videos[0];
const url = video.url;
const apiURL = "https://api.davidcyriltech.my.id/youtube/mp3?url=" + url;

await reply("> 𝐌𝐚𝐥𝐯𝐢𝐧 𝐗𝐦𝐝 𝐒𝐞𝐚𝐫𝐜𝐡𝐢𝐧𝐠  𝐅𝐨𝐫 𝐒𝐨𝐧𝐠......");

const response = await axios.get(apiURL);
if (!response.data.success) {
  return reply(" Failed to fetch audio for \"" + query + "\".");
}

const downloadURL = response.data.result.download_url;
await reply("> 𝐌𝐚𝐥𝐯𝐢𝐧 𝐗𝐦𝐝 𝐒𝐞𝐧𝐝𝐢𝐧𝐠 𝐒𝐨𝐧𝐠 ......");

await conn.sendMessage(from, { audio: { url: downloadURL }, mimetype: 'audio/mpeg', ptt: false }, { quoted: msg });

await reply(" Song sent successfully!");

} catch (error) {
console.error(error);
reply(" An error occurred while processing your request.");
}
});
