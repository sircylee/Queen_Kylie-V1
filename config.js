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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0pnRnMwU3lKVHRoRUU0K3JRSmtPL2ZUSWhuN3JwaksvcHkyV1drUW9HRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibWJoeFNEQ0tFbUs5ck1Md3FyOEJGQzlGY1l3SDZubllOZ0lOTkh6RkJTRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvTU9uY3JLZTNoK2d3Z3VDdmVyNG8yTDlVaGJWdzNKdWY4Qk1EQ2dGNW5RPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJRjMxdWJFVlkyMWJmRFI2YVNRcmRsbFZNOUZkbEcrdHZNOXFQTnp4MnlzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtLbjhPRml1di81SVRPdW43clU1YTg5WXl5QUNQMzY3T0l1bTIrRlFEVU09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InE4Y0tzWE1JS1U0Nys3OVl0QVVLTVFBaTJxM2dXMGwwMFJXWXRwdjdIQjQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUdVdy9Yc3RTdi9oVzJJVXBMYlF2bGY0QWR2dXhRRXRyOW9nd2hqZHZFQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR1Qwcko1YXd0QXJkM0xPK1U1UzF2RldIM2RCRk9LM2FNcDZwT09XdzNXaz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJ4N1BUd1VIaDl4allIYytWMTdZUGYzcytqL1dpcjZmSnVIWmlEWlJnY3ZoSWFXVm04ZDgzSHpYeTR0SEZOYzFrKytYNk5GUjVXNml2L0JSWEZJT0FRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODksImFkdlNlY3JldEtleSI6InhjVmxVTDgrZ2ZZVk5yRTgxbFkyVDdVelNuQWV2bVhKTFF1N3JST3RZMTg9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjc3MzAwNzA3NDlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiRDFBNjQ4OTdDQzU4OEQ5QTc4QzdDRUY1MjkxMDBCN0UifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc0NDEyODA2Nn0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjc3MzAwNzA3NDlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNTA3NDU4NkVBNEJDNjE4MjA5M0Q1MjgzNDFCRDg4QzEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc0NDEyODA2N30seyJrZXkiOnsicmVtb3RlSmlkIjoiMjc3MzAwNzA3NDlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMjZGMjUwMDVEODRFRTZGRThEOEYwOTJCRjQ4Mzc0RDIifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc0NDEyODA5Nn0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjc3MzAwNzA3NDlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQkJCMjczNjk2QTlEQkJEQzQyQzJFQjEwOEM4QUUwM0MifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc0NDEyODEyMX1dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiSlIwb1l0dDJTVi1XamFRS0tSckVCdyIsInBob25lSWQiOiIwMDg3NGQ5Mi0zMTJjLTRlMzItYWY0Zi1hODJhODZkZDQ1YjEiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZThRcG92ODB4VHRBMWdZNDFrWUhaUk9oR09FPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRlMHdMQkwvRVRWZWFjUzNWYXJRL053TWxiND0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiJEREg1OFFNQSIsIm1lIjp7ImlkIjoiMjc3MzAwNzA3NDk6MUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJUUyBMYXRpbmEgKOKBoOKXjeKBoOKAouKBoOG0l+KBoOKAouKBoOKXjeKBoCnigaDinaQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0pPOTB2UUdFSytRMWI4R0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkdpMXJUQWh4OTZiUXYzRk9WV1k3Q1NYcnA4Ni9MYTBhS2JoOVZWbURqeFk9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjVkV3VqbW9NaE9ITllHWW9yOWp4MlJSRGdsNFJXRjM2eDluNENWV1Z0aTh6SGxUb0VFbUJOMkFzVmY5T0ZZaG1mcmJOZFhaVzNlMUd0dGxLMmN6TEFRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJlajJaMGVITmpqcG1wanJCN05zVTgxcitMVk5QdXNQNnVOalEvNUFvUUpNclFsTUY1bkd4cklJRkRVNGZZbG5OOE52c0JlVUszTzg0WWJiWlhCcFpDdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI3NzMwMDcwNzQ5OjFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUm90YTB3SWNmZW0wTDl4VGxWbU93a2w2NmZPdnkydEdpbTRmVlZaZzQ4VyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc0NDEyODI0OSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFISFIifQ==" // session id here
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
