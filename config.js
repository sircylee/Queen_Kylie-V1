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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUdzY25pMHdqQ1o2dUcyN0Y0cG5wNTFNUk1KV2Nmc0JNbEFQd1NUTjVIST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWTRyRUE5ejZBZXVKS1lvVXRBbEhMTFR2bkNyQ2tPNWZpRmg2dmw4elppbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvRndVNmJTUEppYzhvcUlKQlM0YVY3OFhjUnY2aThqQ0xMb2pnamtmbkYwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI5bU9RcHU2c0x3SS9vUksxZlRXS1h3YTJPaXRwUDQ1TnlVWlZuS0NGRndZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNFN0poK2dMU1laNkNLc3dyN3FoQWNKcDh2UVhUY1E1c2FKS2txNk4vRnM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik56TCs2UnI5WlF1OTRNODhmd3pZNGkzMVpRTHVZS3pjS3ArRkozbzI0eG89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib05mNTVtU1dNWTkrUHRTeXZQakRyLzczR0c5VmQ4eU1CcHcxMFRGdCtXZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZEU2dHFURGoxYTZRRGIxY2lnNDBqcVQ4UGtkUFhSQUdibFBXWEpWUXcyOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlRvRytQSldtUG5Yb1l2SFlwNWJvTzB2V3ZIQVRUejhsMHU0U2tHVnVMKy9TbkFrU0VkM2c5TVZuSUxCaHA2aVVHK0lVTmo2S2pKVVhFUGhHczJ1bkNBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQ1LCJhZHZTZWNyZXRLZXkiOiJtVVVOcDJ1QjlpQmxPQWJLcU80TnIvZlkvYko5WlZPK0k3dE1GaWF0KzNJPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI3NjQzNzc5MDY0QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjI1Qjk0MDE2Q0ExNTk2Njg2QjA4QkE5QTJGRTFBODlEIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NDA4NTA0NjF9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI3NjQzNzc5MDY0QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjYyQTdERjcxOTVDRDhCMDU1NTdDREI4MUIwREVDN0ZDIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NDA4NTA0NjF9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjlPZTlEdk5UU0plT1Y0djdsS2VhYmciLCJwaG9uZUlkIjoiNTYzMWM5MzAtNTc1Mi00ZjdiLWEyYzgtNDQ0MWY0M2VjM2M3IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlWK0NYdGU0d2ltYlo3MTdCYjBkUy9hSXg2Zz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCMEdVanhGak1BTi9aSFNqRkM2L0w2bWNVYkE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTFZKREI1MjQiLCJtZSI6eyJpZCI6IjI3NjQzNzc5MDY0OjdAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiaGVoZSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDUDYvb0tBSEVJMktqYjRHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiaG9DRnBOYkxtZ2ZvRlVjSTFIeFB5ejhpR0FxL1lzc0IxcXRJaHNndjRWTT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiditRc0QrUnVyQmQxUk1iSFlJN3ozTjJ4Z2VFWFlPY0RlajRINFZXRHhTOE0yUnloNjF0R25IS0tOSTlMd2NmQU1EdlY3YnExSHEwRlRzc3NPSlhMQlE9PSIsImRldmljZVNpZ25hdHVyZSI6Imh1UXhTaTZnaDVQdDNsbWZYNkg5bVorY1JZc2xocVJDNVBIVENsbG85T3F4Mjc5eGVaRGlaSDZOTllVNlpGUkp3Y1MyVVB6dnNOQU1EL0FtQjlRdkFRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjc2NDM3NzkwNjQ6N0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJZYUFoYVRXeTVvSDZCVkhDTlI4VDhzL0loZ0t2MkxMQWRhclNJYklMK0ZUIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzQwODUwNDU5LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUdpSiJ9" // session id here
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
