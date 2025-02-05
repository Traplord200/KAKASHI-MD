/*
Project Name : MALVIN XMD
Creator      : Malvin King ( Mr Lord Malvin )
Repo         : https//github.com/kingmalvn/MALVIN-XMD
Support      : wa.me/263714757857
*/

const config = require('../../settings');
const { cmd, commands } = require('../command');
const { fetchBuffer } = require('../functions');

cmd({
  pattern: 'qrcode',
  alias: ['qr'],
  react: '💙',
  desc: 'Generate a QR code.',
  category: 'main',
  filename: __filename
}, async (conn, mek, m, {
  from,
  quoted,
  body,
  isCmd,
  command,
  args,
  q,
  isGroup,
  sender,
  senderNumber,
  botNumber2,
  botNumber,
  pushname,
  isMe,
  isOwner,
  groupMetadata,
  groupName,
  participants,
  groupAdmins,
  isBotAdmins,
  isAdmins,
  reply
}) => {
  try {
    if (!q) return reply('Please provide text to generate QR code.');

    await reply('> *Malvin Xmd Generating QR code...*');

    const response = await fetchBuffer(`https://api.giftedtech.web.id/api/tools/createqr?apikey=gifted&text=${encodeURIComponent(q)}`);

    if (!response) {
      throw new Error('Failed to retrieve QR code image');
    }

    const base64Image = `data:image/png;base64,${response.toString('base64')}`;

    await conn.sendMessage(m.chat, { image: { url: base64Image } }, { quoted: m, caption: 'QR Code' });
  } catch (error) {
    console.error(error);
    reply(`An error occurred: ${error.message}`);
  }
});
