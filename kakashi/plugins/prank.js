const { cmd } = require('../command');

cmd({
    pattern: "hack",
    desc: "Displays a dynamic and playful 'Hacking' simulation message.",
    category: "fun",
    react: "💻",
    filename: __filename
},
async (conn, mek, m, { from, quoted, reply }) => {
    try {
        const steps = [
            '💻 *HACKING SEQUENCE INITIATED...* 💻',
            '',
            '*Loading encryption bypass modules...* 🔐',
            '*Establishing secure connection to mainframe...* 🌐',
            '*Deploying rootkits...* 🛠️',
            '',
            '```[▓▓                    ] 10%``` 👨‍💻',
            '```[▓▓▓▓▓                ] 30%``` 👨‍💻',
            '```[▓▓▓▓▓▓▓▓▓           ] 50%``` 👨‍💻',
            '```[▓▓▓▓▓▓▓▓▓▓▓▓▓       ] 70%``` 👨‍💻',
            '```[▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓   ] 90%``` 👨‍💻',
            '```[▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓] 100%``` 🗃️',
            '',
            '🔒 *System Breach Successful!* 🔓',
            '*Gaining access to server logs...* 🖥️',
            '*Extracting sensitive data...* 📂',
            '',
            '```[DATA CAPTURED: 3.2GB]``` 📡',
            '```[TRANSMISSION SECURED]``` 🔒',
            '',
            '👨‍💻 *Operation Complete sent hacked users info to bots owners dm!*',
            '',
            '⚠️ _This is a simulated hacking activity for entertainment purposes._',
            '⚠️ _Remember: Ethical hacking ensures safety._',
            '',
            '> *KAKASHI MD: HACKING SIMULATION COMPLETE* ☣'
        ];

        for (const step of steps) {
            await conn.sendMessage(from, { text: step }, { quoted: mek });
            await new Promise(resolve => setTimeout(resolve, 1200)); // Adjust delay for realism
        }
    } catch (error) {
        console.error(error);
        reply(`❌ *Error:* ${error.message}`);
    }
});
