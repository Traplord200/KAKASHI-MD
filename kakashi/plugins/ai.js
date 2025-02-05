const {
  cmd,
  commands
} = require("../command");
const {
  fetchJson
} = require("../functions");
cmd({
  'pattern': 'ai',
  'alias': ["chatgpt", 'dj'],
  'react': '🤖',
  'desc': "AI chat.",
  'category': 'main',
  'filename': __filename
}, async (_0x5deaf5, _0x13d15e, _0x2e4560, {
  from: _0x2fe5aa,
  quoted: _0x58c5bd,
  body: _0x343c07,
  isCmd: _0x41a015,
  command: _0x279bc7,
  args: _0x442ce1,
  q: _0xdc7637,
  isGroup: _0x1e8755,
  sender: _0x3f64f3,
  senderNumber: _0x39d90d,
  botNumber2: _0x297426,
  botNumber: _0x24128f,
  pushname: _0x382395,
  isMe: _0x3818f4,
  isOwner: _0x2ddf2e,
  groupMetadata: _0x12b366,
  groupName: _0x20fb23,
  participants: _0x5a7a2a,
  groupAdmins: _0x529893,
  isBotAdmins: _0x286c36,
  isAdmins: _0x103a93,
  reply: _0x2a2a5e
}) => {
  try {
    if (!_0xdc7637) {
      return _0x2a2a5e("Please ask Malvin a question or provide input for the AI.");
    }
    const _0xc308df = await fetchJson("https://api.davidcyriltech.my.id/ai/gpt4omini?text=" + _0xdc7637);
    console.log(_0xc308df);
    if (!_0xc308df.message) {
      return _0x2a2a5e("No response from the AI.");
    }
    return _0x2a2a5e('' + _0xc308df.message);
  } catch (_0x199a22) {
    console.error(_0x199a22);
    _0x2a2a5e("An error occurred: " + _0x199a22.message);
  }
});
cmd({
  'pattern': "mistraai",
  'alias': ['mistra', 'zimai'],
  'react': '🪄',
  'desc': "AI chat.",
  'category': "main",
  'filename': __filename
}, async (_0x432d02, _0x52f391, _0x21f332, {
  from: _0x5564cd,
  quoted: _0xe5e3f1,
  body: _0x33d714,
  isCmd: _0x4cc3ef,
  command: _0x2697e6,
  args: _0x4db878,
  q: _0x12c0d9,
  isGroup: _0x249a5e,
  sender: _0x174ba0,
  senderNumber: _0x3436f9,
  botNumber2: _0x4f1223,
  botNumber: _0xf06ba1,
  pushname: _0x14787d,
  isMe: _0x43aee9,
  isOwner: _0x527956,
  groupMetadata: _0x56e5dc,
  groupName: _0x51dcd4,
  participants: _0x21561f,
  groupAdmins: _0x4bb953,
  isBotAdmins: _0x4ab749,
  isAdmins: _0x167d52,
  reply: _0x36d409
}) => {
  try {
    if (!_0x12c0d9) {
      return _0x36d409("Please ask Malvin a question or provide input for the AI.");
    }
    const _0x367956 = await fetchJson("https://pikabotzapi.vercel.app/ai/mistral/?apikey=anya-md&message=" + _0x12c0d9);
    console.log(_0x367956);
    if (!_0x367956.message) {
      return _0x36d409("No response from the AI.");
    }
    return _0x36d409("🤖 *MALVIN MISTRA AI:*\n\n" + _0x367956.message);
  } catch (_0x10e5e0) {
    console.error(_0x10e5e0);
    _0x36d409("An error occurred: " + _0x10e5e0.message);
  }
});
cmd({
  'pattern': 'gpt3',
  'alias': ['gptturbo', "chatgpt3"],
  'react': '😇',
  'desc': "AI chat.",
  'category': "main",
  'filename': __filename
}, async (_0x2248c5, _0x2b3fc9, _0x193d18, {
  from: _0x524d0e,
  quoted: _0x387c83,
  body: _0x47065c,
  isCmd: _0x2a3ef7,
  command: _0x281166,
  args: _0xae1d02,
  q: _0x577d9a,
  isGroup: _0x5ca654,
  sender: _0x10a2c7,
  senderNumber: _0x34adf3,
  botNumber2: _0x483632,
  botNumber: _0xbcb5f,
  pushname: _0x28c252,
  isMe: _0x198a37,
  isOwner: _0x3d8353,
  groupMetadata: _0x321d28,
  groupName: _0x3bdfd7,
  participants: _0x3d94e7,
  groupAdmins: _0xeb924f,
  isBotAdmins: _0xde80c,
  isAdmins: _0x4be436,
  reply: _0x30e11f
}) => {
  try {
    if (!_0x577d9a) {
      return _0x30e11f("Please ask Malvin a question or provide input for the AI.");
    }
    const _0x2d5c9f = await fetchJson("https://api.davidcyriltech.my.id/ai/gpt3?text=" + _0x577d9a);
    console.log(_0x2d5c9f);
    if (!_0x2d5c9f.message) {
      return _0x30e11f("No response from the AI.");
    }
    return _0x30e11f("🤖 *MALVIN CHATGPT 3:*\n\n" + _0x2d5c9f.message);
  } catch (_0x10fce7) {
    console.error(_0x10fce7);
    _0x30e11f("An error occurred: " + _0x10fce7.message);
  }
});
cmd({
  'pattern': "gpt4",
  'alias': ["ai4", "chatgpt4"],
  'react': '🪄',
  'desc': "AI chat.",
  'category': "main",
  'filename': __filename
}, async (_0x35d6c6, _0x2ffb05, _0x1ccc4f, {
  from: _0x2e056d,
  quoted: _0x58e445,
  body: _0x3ed8a2,
  isCmd: _0x200965,
  command: _0x5b06ad,
  args: _0x23ebc8,
  q: _0x45a1c2,
  isGroup: _0x16588b,
  sender: _0x2fed83,
  senderNumber: _0x2ff1c7,
  botNumber2: _0x52f9ce,
  botNumber: _0x29ee4a,
  pushname: _0x3ae3a1,
  isMe: _0x4feed2,
  isOwner: _0x2f2519,
  groupMetadata: _0x4565c1,
  groupName: _0x4bc9f6,
  participants: _0x30cf9a,
  groupAdmins: _0x4c6330,
  isBotAdmins: _0x3f3a76,
  isAdmins: _0x172265,
  reply: _0x3a5766
}) => {
  try {
    if (!_0x45a1c2) {
      return _0x3a5766("Please ask Malvin a question or provide input for the AI.");
    }
    const _0x4e7058 = await fetchJson('https://api.davidcyriltech.my.id/ai/gpt4omini?text=' + _0x45a1c2);
    console.log(_0x4e7058);
    if (!_0x4e7058.message) {
      return _0x3a5766("No response from the AI.");
    }
    return _0x3a5766("🤖 *Malvin CHATGPT 4:*\n\n" + _0x4e7058.message);
  } catch (_0x5b4b01) {
    console.error(_0x5b4b01);
    _0x3a5766("An error occurred: " + _0x5b4b01.message);
  }
});
cmd({
  'pattern': 'llama3',
  'alias': ['llama', 'model3'],
  'react': '✅',
  'desc': "AI chat.",
  'category': "main",
  'filename': __filename
}, async (_0x5ce263, _0x25751d, _0x3bf73a, {
  from: _0xac0fb3,
  quoted: _0xb73895,
  body: _0x21b254,
  isCmd: _0x1df231,
  command: _0xa0f834,
  args: _0x7eabfb,
  q: _0x38e6c7,
  isGroup: _0x509d9d,
  sender: _0x5a9ce6,
  senderNumber: _0x4e231f,
  botNumber2: _0x566c5e,
  botNumber: _0xd85cf0,
  pushname: _0x2d139e,
  isMe: _0x5c8323,
  isOwner: _0x4b9a2d,
  groupMetadata: _0x5e8502,
  groupName: _0x329fea,
  participants: _0xad41,
  groupAdmins: _0x2fd207,
  isBotAdmins: _0x28f239,
  isAdmins: _0x160ac2,
  reply: _0x57b9cd
}) => {
  try {
    if (!_0x38e6c7) {
      return _0x57b9cd("Please ask Malvin a question or provide input for the AI.");
    }
    const _0x29a2d3 = await fetchJson("https://api.davidcyriltech.my.id/ai/llama3?text=" + _0x38e6c7);
    console.log(_0x29a2d3);
    if (!_0x29a2d3.message) {
      return _0x57b9cd("No response from the AI.");
    }
    return _0x57b9cd("🤖 *NEXUS LLAM AI:*\n\n" + _0x29a2d3.message);
  } catch (_0x17e04d) {
    console.error(_0x17e04d);
    _0x57b9cd("An error occurred: " + _0x17e04d.message);
  }
});
cmd({
  'pattern': "malvin",
  'alias': ['meta', "bot", "llama2"],
  'react': '🔄',
  'desc': "AI chat.",
  'category': "main",
  'filename': __filename
}, async (_0x40025f, _0x2aeab5, _0x2ebb58, {
  from: _0x39ce90,
  quoted: _0x5eee30,
  body: _0x3b0cfb,
  isCmd: _0x37c9a1,
  command: _0x3321a2,
  args: _0x53c1b9,
  q: _0x1f9184,
  isGroup: _0x5a5366,
  sender: _0x33fada,
  senderNumber: _0x5f0a87,
  botNumber2: _0x11e74a,
  botNumber: _0xce7b6b,
  pushname: _0x4409cc,
  isMe: _0x52d3f8,
  isOwner: _0x3459ae,
  groupMetadata: _0x370680,
  groupName: _0x5c6755,
  participants: _0x2ce2a5,
  groupAdmins: _0x220b8e,
  isBotAdmins: _0x4ca675,
  isAdmins: _0x42f72d,
  reply: _0x4ee22a
}) => {
  try {
    if (!_0x1f9184) {
      return _0x4ee22a("Please ask Malvin a question or provide input for the AI.");
    }
    const _0xd0e8ec = await fetchJson("https://api.davidcyriltech.my.id/ai/metaai?text=" + _0x1f9184);
    console.log(_0xd0e8ec);
    if (!_0xd0e8ec.message) {
      return _0x4ee22a("No response from the AI.");
    }
    return _0x4ee22a("🤖 * NEXUS META AI:*\n\n" + _0xd0e8ec.message);
  } catch (_0x5d8d3a) {
    console.error(_0x5d8d3a);
    _0x4ee22a("An error occurred: " + _0x5d8d3a.message);
  }
});
cmd({
  'pattern': "gpt4o",
  'alias': ["ai4", "chatgpt4"],
  'react': '🟢',
  'desc': "AI chat.",
  'category': "main",
  'filename': __filename
}, async (_0x47a99d, _0x5eb7a5, _0x2fd141, {
  from: _0x1e436e,
  quoted: _0x38b7f7,
  body: _0x56017e,
  isCmd: _0x2f4392,
  command: _0x5924d6,
  args: _0x16396a,
  q: _0x33edcf,
  isGroup: _0xf9970a,
  sender: _0xdf6c12,
  senderNumber: _0x5420ba,
  botNumber2: _0x1afe89,
  botNumber: _0x55eb59,
  pushname: _0x35eacf,
  isMe: _0x224353,
  isOwner: _0x98ea6c,
  groupMetadata: _0x1c6299,
  groupName: _0x11c771,
  participants: _0x282933,
  groupAdmins: _0x26a0b1,
  isBotAdmins: _0xc407d7,
  isAdmins: _0x725ddb,
  reply: _0x25d133
}) => {
  try {
    if (!_0x33edcf) {
      return _0x25d133("Please ask Malvin a question or provide input for the AI.");
    }
    const _0x304125 = await fetchJson("https://api.davidcyriltech.my.id/ai/gpt4omini?text=" + _0x33edcf);
    console.log(_0x304125);
    if (!_0x304125.message) {
      return _0x25d133("No response from the AI.");
    }
    return _0x25d133("🤖 *NEXUS CHATGPT 4o:*\n\n" + _0x304125.message);
  } catch (_0x16b063) {
    console.error(_0x16b063);
    _0x25d133("An error occurred: " + _0x16b063.message);
  }
});
cmd({
  'pattern': "gemini",
  'alias': ["bard", "bing"],
  'react': '⏳',
  'desc': "AI chat.",
  'category': "main",
  'filename': __filename
}, async (_0x26acef, _0x52a488, _0x4e4144, {
  from: _0x19acbd,
  quoted: _0x19bec0,
  body: _0x22aed9,
  isCmd: _0x4ad258,
  command: _0x2ac15d,
  args: _0x42be60,
  q: _0x2422d7,
  isGroup: _0x51121b,
  sender: _0x49f977,
  senderNumber: _0xfcfec6,
  botNumber2: _0x5de069,
  botNumber: _0x48fd77,
  pushname: _0x2e228c,
  isMe: _0x175f61,
  isOwner: _0x1b7f96,
  groupMetadata: _0x3c7db8,
  groupName: _0x88cfe9,
  participants: _0x48ea28,
  groupAdmins: _0x107a7e,
  isBotAdmins: _0xdb23cb,
  isAdmins: _0x30250d,
  reply: _0x561708
}) => {
  try {
    if (!_0x2422d7) {
      return _0x561708("Please ask Malvin a question or provide input for the AI.");
    }
    const _0x54eb09 = await fetchJson("https://api.davidcyriltech.my.id/ai/gpt4omini?text=" + _0x2422d7);
    console.log(_0x54eb09);
    if (!_0x54eb09.message) {
      return _0x561708("No response from the AI.");
    }
    return _0x561708("🤖 *NEXUS GOOGLE AI:*\n\n" + _0x54eb09.message);
  } catch (_0x5a0201) {
    console.error(_0x5a0201);
    _0x561708("An error occurred: " + _0x5a0201.message);
  }
});