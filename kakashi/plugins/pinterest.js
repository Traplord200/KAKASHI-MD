const axios = require('axios');
const {
  BufferJSON,
  WA_DEFAULT_EPHEMERAL,
  generateWAMessageFromContent,
  proto,
  generateWAMessageContent,
  generateWAMessage,
  prepareWAMessageMedia,
  downloadContentFromMessage,
  areJidsSameUser,
  getContentType
} = require("@whiskeysockets/baileys");
const {
  cmd,
  commands
} = require("../command");
cmd({
  'pattern': "pinterest",
  'react': '🧚🏻‍♀️',
  'desc': "downlod images",
  'category': "downlod",
  'filename': __filename
}, async (_0xa1f57d, _0x1a71cf, _0x56f5c6, {
  from: _0x289080,
  quoted: _0x3ef4cf,
  body: _0x1b04e4,
  isCmd: _0x1eed9f,
  command: _0x14aa3d,
  args: _0x104c1c,
  q: _0x4905ab,
  isGroup: _0x5313d0,
  sender: _0x4796d0,
  senderNumber: _0x3a68fa,
  botNumber2: _0x1bd49a,
  botNumber: _0x330cd0,
  pushname: _0x1279c5,
  isMe: _0x423bc8,
  isOwner: _0x54cd43,
  groupMetadata: _0x11fa6a,
  groupName: _0x4304e7,
  participants: _0x4f890a,
  groupAdmins: _0x5bf152,
  isBotAdmins: _0x3a5162,
  isAdmins: _0x23cbab,
  reply: _0x10d146
}) => {
  try {
    if (!_0x4905ab) {
      return _0x10d146("Please give me song name ?");
    }
    async function _0x2ee468(_0x25f7e5) {
      const {
        imageMessage: _0x18b46f
      } = await generateWAMessageContent({
        'image': {
          'url': _0x25f7e5
        }
      }, {
        'upload': _0xa1f57d.waUploadToServer
      });
      return _0x18b46f;
    }
    function _0x53f43a(_0xb07df0) {
      for (let _0x297852 = _0xb07df0.length - 0x1; _0x297852 > 0x0; _0x297852--) {
        const _0x1f342c = Math.floor(Math.random() * (_0x297852 + 0x1));
        [_0xb07df0[_0x297852], _0xb07df0[_0x1f342c]] = [_0xb07df0[_0x1f342c], _0xb07df0[_0x297852]];
      }
    }
    let _0x1489aa = [];
    let {
      data: _0xff0f43
    } = await axios.get("https://allstars-apis.vercel.app/pinterest?search=" + _0x4905ab);
    let _0x2c57d9 = _0xff0f43.data.map(_0x3f770d => _0x3f770d);
    _0x53f43a(_0x2c57d9);
    let _0x7dd0d7 = _0x2c57d9.splice(0x0, 0xa);
    let _0xfee502 = 0x1;
    for (let _0x2f4579 of _0x7dd0d7) {
      _0x1489aa.push({
        'body': proto.Message.InteractiveMessage.Body.fromObject({
          'text': "Images - " + _0xfee502++
        }),
        'footer': proto.Message.InteractiveMessage.Footer.fromObject({
          'text': "© ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍᴀʟᴠɪɴ ᴋɪɴɢ · · ·"
        }),
        'header': proto.Message.InteractiveMessage.Header.fromObject({
          'title': "Hello " + _0x1279c5,
          'hasMediaAttachment': true,
          'imageMessage': await _0x2ee468(_0x2f4579)
        }),
        'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
          'buttons': []
        })
      });
    }
    const _0x2d9e6f = generateWAMessageFromContent(_0x56f5c6.chat, {
      'viewOnceMessage': {
        'message': {
          'messageContextInfo': {
            'deviceListMetadata': {},
            'deviceListMetadataVersion': 0x2
          },
          'interactiveMessage': proto.Message.InteractiveMessage.fromObject({
            'body': proto.Message.InteractiveMessage.Body.create({
              'text': "Hellow how are you baby !"
            }),
            'footer': proto.Message.InteractiveMessage.Footer.create({
              'text': "© ᴄʀᴇᴀᴛᴇᴅ ʙʏ ᴍᴀʟᴠɪɴ ᴋɪɴɢ · · ·"
            }),
            'header': proto.Message.InteractiveMessage.Header.create({
              'hasMediaAttachment': false
            }),
            'carouselMessage': proto.Message.InteractiveMessage.CarouselMessage.fromObject({
              'cards': [..._0x1489aa]
            })
          })
        }
      }
    }, {});
    await _0xa1f57d.relayMessage(_0x56f5c6.chat, _0x2d9e6f.message, {
      'messageId': _0x2d9e6f.key.id
    });
  } catch (_0x4b4f16) {
    console.log(_0x4b4f16);
    _0x10d146('' + _0x4b4f16);
  }
});