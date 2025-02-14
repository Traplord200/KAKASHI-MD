const config = require('../../settings')
const { cmd, commands } = require('../command')
cmd({
    pattern: "block",
    desc: "Block a user.",
    category: "owner",
    react: "🚷",
    filename: __filename
},
async (conn, mek, m, { from, isOwner, quoted, reply }) => {
    if (!isOwner) return reply("🚷Sorry little man but your not owner!");
    if (!quoted) return reply("🏧 Please reply to the niggas message you want to block.");

    const user = quoted.sender;
    try {
        await conn.updateBlockStatus(user, 'block');
        reply('🚫✦KAKASHI MD✦ User ' + user + ' blocked successfully.');
    } catch (error) {
        reply('💀 fuck an error occurred while blocking user: ' + error.message);
    }
});
