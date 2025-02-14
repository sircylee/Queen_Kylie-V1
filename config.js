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
global.sudo = process.env.SUDO || "27615045572";
global.owner = process.env.OWNER_NUMBER || "27615045572";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUltQUlub0xKOVZyY1BUV0RFcVFnQlZ1Vm1OQ2ZnbEE1MjcvaUtUYVUxaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTTFRalowTGhWK1JWMFVkOURRR0E5SHZ0dEJoekUycW5zNUxCWmVYL28wWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4TjFad3lxWkZUUXVoVGJXUkxjSkE3OHhTVGZSTDZadmFrbTgza2czdTJZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJueE9UeGpZMndkaWZVajRWbGlxSVZRTGFoUkVLbXB6ekljdEY2cFprOERjPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVHeC9rdjhxQ3NnbnJRcHM5Nno5dUlxNWF6RFBXYy9hSWJjVm1iaEZoR2s9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Inp6WlFEQitJWE8xUFNsN0ROWW02VmM1TTZGQUM2YmhpREdjL3VDTzJBVWM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0pXcWdBWkZHZkZuQkZ4UWFnQ21xOFNXV1FFczhDVjRmUVgveDBjK3FtMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYWdpWXVoTkJldHBTR3NHaW1BZUNraGcxOXJHQkNEL3lsQ2dMNFI2OGdnOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjlCNkZkeWJCK1lvZEtnTlI3UkFXcnQ3clI0TmJnOHVIUXE4NHB1MFdRVkdpRm9ZVW45bUZ6dEtaYUlsRG5FaS9SVnlLOGt1R0Z2aUVHdGNSdlNQNmhnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTksImFkdlNlY3JldEtleSI6ImF5N0dqUWhLaFBIMGZJYUtWVXVkQTFUNVZ6bXRWYW1LQ0ZqcXAzaW1SWk09IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkNmRkpaY05mUWhxaURZXzM5SmY5Z2ciLCJwaG9uZUlkIjoiYzE0NTIzZWUtYmJlYS00YWFjLWFiYjctNTcxZWE1MTZlMmY3IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InliQjlYaWRrVVhUaVdKczVUUWpiZUpnaGgrOD0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5UUJWa1NGRFFLUDRPZ0FMOXFDbzhNV0Fobnc9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiOVBRQ01ITjUiLCJtZSI6eyJpZCI6IjI3NjE1MDQ1NTcyOjE2QHMud2hhdHNhcHAubmV0IiwibmFtZSI6ImNhZGlsbGFjY3lsZWUgKCBzaXJjeWxlZSApIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJZURnTWtERUl5QXZiMEdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJzMGl4YkpTT3RUS3ZKbE1JMm9FNzFhUnlvRjJZWXF3L29jYTh4cmRLTFJjPSIsImFjY291bnRTaWduYXR1cmUiOiJaYWY4QmR1cFNLRm5Dem94ZkRSWit2dXV2VkZjOEVKSVh3U1dFc1pVTVYycnN6dDgzaGFXeUcyYXJpQTYvRm03REJaTlRvUDdZdXpMbEtLalVxY3ZBUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiaVQ4cE1ERHRTbHBGU2ZqN0dYY1RxdlliQXgrWm5vb0NMZnUvbDl5MW9lTGZPQWp2T2w3WW9lZGFNL1lpY3hoNlBBOU9HTFlGZll3QVlLZTNQVkFVZ1E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNzYxNTA0NTU3MjoxNkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJiTklzV3lVanJVeXJ5WlRDTnFCTzlXa2NxQmRtR0tzUDZIR3ZNYTNTaTBYIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM5NTM4NDU3LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUcwNiJ9" // session id here
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
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
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
