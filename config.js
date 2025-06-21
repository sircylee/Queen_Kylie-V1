//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "cadillaccylee111@gmail.com";
global.location = "Johannesburg, South Africa";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Johannesburg";
global.github = process.env.GITHUB || "https://github.com/sircylee/Queen_Kylie-V1";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VavkrOID38CSgcyfbM07";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VavkrOID38CSgcyfbM07";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/purbus.jpg";
global.devs = "27615045572";
global.sudo = process.env.SUDO || "27751014718";
global.owner = process.env.OWNER_NUMBER || "27855039725";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://files.catbox.moe/lt92j5.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "27615045572";
global.auto_bio = process.env.AUTO_BIO || "true";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://kylie-session-ll.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUMzazFUekt5UHl1OXZEMXgzQkE2SGNBVTE0L3lZVmpDZFJ1NmhMd1dWbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia3M0ckxsMGFwNHFGZHpsZEt4SXY2UExGcnB6ZUJzRDVXYzhmN1dNaHJFOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJQWo4bmg0amxnM29vVktjUUw5dHRGZUR4UGFmUFZsTjk5Z1JVR0NjOUc0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDamk3UkdhTjZ5V202eVdvZkptNnhTd253MVZYY0pJVzJid2tuTjBxbEhjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1OVmN1ZFp0dHZ4UWZDeFFxNHB1T2o3ODR1V2lHUWFnR2k3TDBmT1BWMHc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRDVjdtZy9aSWRRQ3RPUWxiSVM3bVpObnR5d1UxcE1vQ2diYkVIWm9NMXM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0EwZWhyV25iaWo2bkZiNldISlp4UmpWNUVjakMxYjRGNWZjV2tpc21GMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTEJzRG9aYTM3cFhYN0h0ZkczSXVkWTB1OWJ6N0ZOMkRFd2U3bGFxUmhGbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjI1MHFGc3VvMmlzd3IzU2VGWFUrQ1hBRmd4VnVTclZVSHBLV0tDOUxadkV3VEFWTDZTd2hoREM0am1yZXFDbjFWSm9FcjJtR3NWYUtDUVVFUWFsUENBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTUsImFkdlNlY3JldEtleSI6ImEyODNIYml0ZloxWWFKMUpId3hrOFNtdGxhTXBZalV3MjdjNyszWUE3Z0E9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjc2NDM3NzkwNjRAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNDRFOTFEQjVCRTM5NkQ3QjJEQjk2MTVDNTY2REU1RDAifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1MDUxMjA2Mn0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjc2NDM3NzkwNjRAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNTFDQTJCNUM1M0RGNjk3MzM4Q0UxMzJCRjE1OTVDQTMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1MDUxMjA2Mn0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjc2NDM3NzkwNjRAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiM0RDNEY1MTRGNjY0NEJERjFEQjc2QzMwRjg1MUIwRUUifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1MDUxMjA2NH1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sInJlZ2lzdGVyZWQiOmZhbHNlLCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSURhN0p3R0VLL2oyc0lHR0FNZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiblBldE1DaGYrSEdhalRqdjAzSU44elpRVmtsNVdadFIrRFp6eDhOSVlCUT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiVkR5dXhEcmVlSmJUKyszZzVaclRMbHBOQTg1bWwraDRWSzVLT1Nwc2hXQ2VEK1BtZDJmTnFTWDFBYzlrWVB1QlhvdjAxdmRJQkJWZ3lud0xSSXBlQlE9PSIsImRldmljZVNpZ25hdHVyZSI6IkF5ZlZBOHp5TlNzNkJEeTdpVHRKbmgwd0UwU0UxOHB5TWJqd2htbVNrVkduellFa2ZtLzVObE10VTFaVkMwN3FOYXJVay9wSTgxYnlvTDZVaHpVWEJBPT0ifSwibWUiOnsiaWQiOiIyNzY0Mzc3OTA2NDozQHMud2hhdHNhcHAubmV0IiwibmFtZSI6Ikt5bGllIGFzc2lzdGFudCDmnIAiLCJsaWQiOiIyMjk0MDAwNzU0MjgyMDozQGxpZCJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNzY0Mzc3OTA2NDozQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlp6M3JUQW9YL2h4bW8wNDc5TnlEZk0yVUZaSmVWbWJVZmcyYzhmRFNHQVUifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBMElDQT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc1MDUxMjA2MCwibGFzdFByb3BIYXNoIjoiMlY3N3FVIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFOVC8ifQ==" // session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_KYLIE-V1👸❤️🧸™`",
  author: process.env.PACK_AUTHER || "Kylie",
  packname: process.env.PACK_NAME || "Sir Cylee",
  botname: process.env.BOT_NAME || "QUEEN_KYLIE",
  ownername: process.env.OWNER_NAME || "sircylee ❤️🧸",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "true",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "k y l i e").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
}); 
