const {
  cmd
} = require('../command');
const config = require('../../settings');
cmd({
  'on': "body"
}, async (_0x970702, _0x24465d, _0xaaa5, {
  from: _0x9c89df,
  body: _0x10b7e8,
  isGroup: _0x1cdddd,
  isAdmins: _0x1fba1f,
  isBotAdmins: _0x5b2f1a,
  reply: _0x194363,
  sender: _0x3b237f
}) => {
  try {
    const _0x1941d2 = ["wtf", 'mia', 'xxx', "fuck", "sex", "huththa", "pakaya", 'ponnaya', "hutto"];
    if (!_0x1cdddd || _0x1fba1f || !_0x5b2f1a) {
      return;
    }
    const _0x437b0f = _0x10b7e8.toLowerCase();
    const _0x25ec40 = _0x1941d2.some(_0x5df938 => _0x437b0f.includes(_0x5df938));
    if (_0x25ec40 & config.ANTI_BAD_WORD === 'true') {
      await _0x970702.sendMessage(_0x9c89df, {
        'delete': _0x24465d.key
      }, {
        'quoted': _0x24465d
      });
      await _0x970702.sendMessage(_0x9c89df, {
        'text': "🚫 ⚠️✦ᴍᴀʟᴠɪɴ xᴅ✦ BAD WORDS NOT ALLOWED⚠️ 🚫"
      }, {
        'quoted': _0x24465d
      });
    }
  } catch (_0x9accfa) {
    console.error(_0x9accfa);
    _0x194363("An error occurred while processing the message.");
  }
});
const linkPatterns = [/https?:\/\/(?:chat\.whatsapp\.com|wa\.me)\/\S+/gi, /^https?:\/\/(www\.)?whatsapp\.com\/channel\/([a-zA-Z0-9_-]+)$/, /wa\.me\/\S+/gi, /https?:\/\/(?:t\.me|telegram\.me)\/\S+/gi, /https?:\/\/(?:www\.)?youtube\.com\/\S+/gi, /https?:\/\/youtu\.be\/\S+/gi, /https?:\/\/(?:www\.)?facebook\.com\/\S+/gi, /https?:\/\/fb\.me\/\S+/gi, /https?:\/\/(?:www\.)?instagram\.com\/\S+/gi, /https?:\/\/(?:www\.)?twitter\.com\/\S+/gi, /https?:\/\/(?:www\.)?tiktok\.com\/\S+/gi, /https?:\/\/(?:www\.)?linkedin\.com\/\S+/gi, /https?:\/\/(?:www\.)?snapchat\.com\/\S+/gi, /https?:\/\/(?:www\.)?pinterest\.com\/\S+/gi, /https?:\/\/(?:www\.)?reddit\.com\/\S+/gi, /https?:\/\/ngl\/\S+/gi, /https?:\/\/(?:www\.)?discord\.com\/\S+/gi, /https?:\/\/(?:www\.)?twitch\.tv\/\S+/gi, /https?:\/\/(?:www\.)?vimeo\.com\/\S+/gi, /https?:\/\/(?:www\.)?dailymotion\.com\/\S+/gi, /https?:\/\/(?:www\.)?medium\.com\/\S+/gi];
cmd({
  'on': "body"
}, async (_0x1b2472, _0x19a450, _0x34bb89, {
  from: _0x150463,
  body: _0x2c2738,
  sender: _0x25352b,
  isGroup: _0x113367,
  isAdmins: _0x49eb19,
  isBotAdmins: _0x48e7a1,
  reply: _0x23871c
}) => {
  try {
    if (!_0x113367 || _0x49eb19 || !_0x48e7a1) {
      return;
    }
    const _0x287b4f = linkPatterns.some(_0x8ab2a => _0x8ab2a.test(_0x2c2738));
    if (_0x287b4f && config.ANTI_LINK === "true") {
      await _0x1b2472.sendMessage(_0x150463, {
        'delete': _0x19a450.key
      }, {
        'quoted': _0x19a450
      });
      await _0x1b2472.sendMessage(_0x150463, {
        'text': "Links are not allowed in this group by Malvin Tech.\n@" + _0x25352b.split('@')[0x0] + " has been removed. 🚫",
        'mentions': [_0x25352b]
      }, {
        'quoted': _0x19a450
      });
      await _0x1b2472.groupParticipantsUpdate(_0x150463, [_0x25352b], 'remove');
    }
  } catch (_0xb3fe71) {
    console.error(_0xb3fe71);
    _0x23871c("An error occurred while processing the message.");
  }
});