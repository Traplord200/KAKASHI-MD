const fetch = require("node-fetch");
const {
  cmd
} = require("../command");
cmd({
  'pattern': "tiktok2",
  'alias': ["tt2", "tiktokdl2", "ttdown2", "tiktokvid2", "ttdl"],
  'desc': "Download videos or images from TikTok.",
  'react': '✅',
  'category': 'tools',
  'filename': __filename
}, async (_0x5361f3, _0x2bb796, _0x4262dc, {
  from: _0xd8ba49,
  args: _0x5a77fe,
  reply: _0x2303a0
}) => {
  try {
    const _0x432f6b = _0x5a77fe[0x0];
    if (!_0x432f6b || !_0x432f6b.startsWith("http")) {
      return _0x2303a0("Please provide a valid TikTok link.\n\n*Usage Example:*\n\n.tt2 <TikTok video URL>");
    }
    const _0x4eed81 = await fetch('https://api.yanzbotz.live/api/downloader/tiktok?url=' + encodeURIComponent(_0x432f6b) + '&apiKey=yanzdev');
    const _0x233679 = await _0x4eed81.json();
    if (!_0x233679 || !_0x233679.result) {
      return _0x2303a0("Sorry, I couldn't fetch the TikTok content. Please check the link and try again.");
    }
    const _0x5796a2 = _0x233679.result;
    const _0x48590b = "*✦MALVIN XᎠ✦* ⊷\n┃๏ *ᎢᏆᏦᎢᝪᏦ ᗞし*\n···๏\n⊷\n*ᴘᴏsᴛ ᴅᴇᴛᴀɪʟs* ⊷\n*Type:* " + (_0x5796a2.type || "N/A") + "\n*ɴᴀᴍᴇ:* " + (_0x5796a2.name || "N/A") + "\n*ᴜsᴇʀɴᴀᴍᴇ:* " + (_0x5796a2.username || 'N/A') + "\n*ᴠɪᴇᴡs:* " + (_0x5796a2.views || 0x0) + "\n*ʟɪᴋᴇs:* " + (_0x5796a2.likes || 0x0) + "\n*ᴄᴏᴍᴍᴇɴᴛs:* " + (_0x5796a2.comments || 0x0) + "\n*ғᴀᴠᴏᴜʀɪᴛᴇs:* " + (_0x5796a2.favorite || 0x0) + "\n┇๏ *sʜᴀʀᴇs:* " + (_0x5796a2.shares || 0x0) + "    \n┇๏ *Description:* " + (_0x5796a2.description || "N/A") + "    \n╰━━━━━━━━━━━━──┈⊷\n> ©✦ɴᴇxᴜs ᴍᴅ✦";
    if (_0x5796a2.type === 'video') {
      await _0x5361f3.sendMessage(_0xd8ba49, {
        'video': {
          'url': _0x5796a2.video["no-watermark"]
        },
        'caption': _0x48590b
      }, {
        'quoted': _0x4262dc
      });
    } else {
      if (_0x5796a2.type === "image") {
        for (const [_0xdd53f2, _0x2eb0c5] of (_0x5796a2.image || []).entries()) {
          await _0x5361f3.sendMessage(_0xd8ba49, {
            'image': {
              'url': _0x2eb0c5
            },
            'caption': "*💜 Image:* " + (_0xdd53f2 + 0x1) + "\n\n" + _0x48590b
          }, {
            'quoted': _0x4262dc
          });
        }
      } else {
        return _0x2303a0("Sorry, I couldn't process this type of TikTok content.");
      }
    }
  } catch (_0x56bda5) {
    console.error("✦ᴍᴀʟᴠɪɴ xᴅ✦ Error in TikTok command:", _0x56bda5);
    _0x2303a0("✦ᴍᴀʟᴠɪɴ xᴅ✦ An error occurred while processing your request. Please try again later.");
  }
});
