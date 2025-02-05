const {
  cmd,
  commands
} = require("../command");
const axios = require('axios');
cmd({
  'pattern': 'githubstalk',
  'alias': ["github"],
  'desc': "Fetch detailed GitHub user profile including profile picture.",
  'category': "other",
  'react': '📚',
  'filename': __filename
}, async (_0x175893, _0x4fc4d2, _0x59eaf1, {
  from: _0x20c5b0,
  quoted: _0x4aa000,
  body: _0x2974b2,
  isCmd: _0x5311a4,
  command: _0x37ead3,
  args: _0x417346,
  q: _0x216fb8,
  isGroup: _0x40cdf8,
  sender: _0x46a36d,
  senderNumber: _0x4d884f,
  botNumber2: _0x54303a,
  botNumber: _0x110c4d,
  pushname: _0x2b7ce4,
  isMe: _0x5d1a90,
  isOwner: _0x1940d4,
  groupMetadata: _0x1325c5,
  groupName: _0x3a3327,
  participants: _0x20888b,
  groupAdmins: _0x43ea32,
  isBotAdmins: _0x2901a2,
  isAdmins: _0x3c3b78,
  reply: _0x13cfda
}) => {
  try {
    const _0x52764b = _0x417346[0x0];
    if (!_0x52764b) {
      return _0x13cfda("Please provide a GitHub username.");
    }
    const _0x15c42b = 'https://api.github.com/users/' + _0x52764b;
    const _0x1fa020 = await axios.get(_0x15c42b);
    const _0x59aceb = _0x1fa020.data;
    let _0x4fce05 = "*👨‍💻 ᴍᴀʟᴠɪɴ-xᴅ GITSTALK 👨‍💻*\n        \n👤 *ᴜꜱᴇʀ ɴᴀᴍᴇ*: " + (_0x59aceb.name || _0x59aceb.login) + "\n\n🔗 *ɢɪᴛʜᴜʙ ᴜʀʟ*:(" + _0x59aceb.html_url + ")\n\n📝 *ʙɪᴏ*: " + (_0x59aceb.bio || "Not available") + "\n\n🏙️ *ʟᴏᴄᴀᴛɪᴏɴ*: " + (_0x59aceb.location || "Unknown") + "\n\n📊 *ᴘᴜʙʟɪᴄ ʀᴇᴘᴏ*: " + _0x59aceb.public_repos + "\n\n👥 *ꜰᴏʟʟᴏᴡᴇʀꜱ*: " + _0x59aceb.followers + " | Following: " + _0x59aceb.following + "\n\n📅 *ᴄʀᴇᴀᴛʀᴅ ᴅᴀᴛᴇ*: " + new Date(_0x59aceb.created_at).toDateString() + "\n\n🔭 *ᴘᴜʙʟɪᴄ ɢɪꜱᴛꜱ*: " + _0x59aceb.public_gists + "\n\n> ᴍᴀʟᴠɪɴ-xᴅ\n";
    await _0x175893.sendMessage(_0x20c5b0, {
      'image': {
        'url': _0x59aceb.avatar_url
      },
      'caption': _0x4fce05,
      'contextInfo': {
        'mentionedJid': ["263714757857@s.whatsapp.net"],
        'groupMentions': [],
        'forwardingScore': 0x1,
        'isForwarded': true,
        'forwardedNewsletterMessageInfo': {
          'newsletterJid': "120363306168354073@newsletter",
          'newsletterName': "ᴍᴀʟᴠɪɴ-xᴅ ✻",
          'serverMessageId': 0x3e7
        },
        'externalAdReply': {
          'title': "MALVIN XD",
          'body': "ᴍᴀʟᴠɪɴ ᴋɪɴɢ",
          'mediaType': 0x1,
          'sourceUrl': "https://files.catbox.moe/7pg2gp.jpg",
          'renderLargerThumbnail': false,
          'showAdAttribution': true
        }
      }
    }, {
      'quoted': _0x4fc4d2
    });
  } catch (_0x2dcd86) {
    console.log(_0x2dcd86);
    _0x13cfda("Error fetching data🤕: " + (_0x2dcd86.response ? _0x2dcd86.response.data.message : _0x2dcd86.message));
  }
});