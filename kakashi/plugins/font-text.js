const {
  cmd
} = require("../command");
const axios = require("axios");
cmd({
  'pattern': "font-txt",
  'alias': ["font", 'fancy'],
  'react': '✍️',
  'desc': "Convert text into various fonts.",
  'category': 'tools',
  'filename': __filename
}, async (_0x42ff8e, _0xccd949, _0x27bc9f, {
  from: _0x5ab667,
  quoted: _0x2aebd3,
  body: _0x3617d8,
  args: _0x1b9649,
  q: _0x688615,
  reply: _0x3e4b22
}) => {
  try {
    if (!_0x688615) {
      return _0x3e4b22("Please provide text to convert into fonts.");
    }
    let _0x3fc797 = await axios.get("https://www.dark-yasiya-api.site/other/font?text=" + encodeURIComponent(_0x688615));
    let _0x1b3397 = _0x3fc797.data;
    if (!_0x1b3397.status) {
      return _0x3e4b22("Error fetching fonts. Please try again later.");
    }
    let _0x144999 = _0x1b3397.result.map(_0x536f9e => '*' + _0x536f9e.name + ":*\n" + _0x536f9e.result).join("\n\n");
    _0x3e4b22("*ᴍᴀʟᴠɪɴ-xᴍᴅ ғᴀɴᴄʏ ғᴏɴᴛs*:\n\n" + _0x144999 + "\n\n> *ʙʏ ᴍᴀʟᴠɪɴ ᴋɪɴɢ*");
  } catch (_0x439230) {
    console.error(_0x439230);
    _0x3e4b22("An error occurred while fetching fonts.");
  }
});