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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUUwrY0p5VFhOVFlxRFdTb05kKy9nSnlNYjlzeVYyaUFteXBBbmtCYktYST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaCtFWmV5cTNXb25FdmlYckQxNUZjTHJoSVlwa3l6S2JJaFN6WGJaak8xST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnSisxNUhpL3UyQ29GdDhMUDZ3TFJpZTNFcENLcjFOTjFmVHE1eklINlUwPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnRkhOeWZJQm9Fc3RxdW9FMDZQdkZmdVFSWXEwYTVWaE81dHFzc2g0cFV3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjJFMDlTaXI2Yk9paGhaM3B0ZHdESGdCb3VlMWNmZDJId1BQcENRb2tXMlU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImU5V0xtNC80YzR5SmN2YjFQT2dWQmFiUmFZcUZLSUs3L1BJcmdMRDMrUkE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV0FKUXFQRk9nK3Y4Rk9neEJocHhQS3dCZkZubUlmenlzWGQrVEhqQm1rMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUFrSEVRck9vdG9WZ1dyanRGRUJwQXZKSTFGTktTQ3V5Y1B0UExEMWFoUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImxlVFFEbU1sdHNQQkpjVTRBU0pNVDJFR05NclBlYnBlNnJZNVVhN2VacnV4WDNrVWFMVmVwQXZLdVJvQ1RjU0JqbmlYZGhxQVlYZElnUjEvaFNIeml3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTg1LCJhZHZTZWNyZXRLZXkiOiIrT3FBVVFRaEt3UklKVHZqOEduMWlWRHBEU0V3bnc2MXV2aVpRc2gvSkxrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI3NzE4MDg4ODU0QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkI5ODMwNjZCMkM4MkYyQTE0OEM0RkMzNTZCMkE3NzY4In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NDcyNDk1NjZ9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI3NzE4MDg4ODU0QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjM4RUJCRTE1ODE2MkVBNzNBMkU0QzY4OEIyMUI4RTk1In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NDcyNDk1NjZ9XSwibmV4dFByZUtleUlkIjo2MSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjYxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjFpQkF3XzljU3ctMlZ0TFEySjQydEEiLCJwaG9uZUlkIjoiYjIzYTRlM2MtMjcyNy00OGFhLTlmMjItYTBlZjUxNjU4NWU4IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlFMmhaWEd3V1c5V1pUVDNGcHdBd3JSZ0lTVT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRQ1JrWjVBdzZsVXJobHpadzA2RDZuU29pVGs9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiMTZMQkc5NDEiLCJtZSI6eyJpZCI6IjI3NzE4MDg4ODU0OjNAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiY2FkaWxsYWNjeWxlZTExMSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTnpKbGJZREVJN1RrOEVHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiOVlYUytmeTJZS0pZaWJGRzdYNnJGQUJTb2o0eER5UldKSmNDcmFnRWRROD0iLCJhY2NvdW50U2lnbmF0dXJlIjoiUll3d3o4bHh4ZlNJWkVZQWM3TUorR2JOZ1BjVkVaak5IOVU0dVBoVVBCSHI2RXZiQ1dRTEFHbGlPdXZCUkJEM0pBVU5FMXFVdzcxL0VrZXNxQURWQmc9PSIsImRldmljZVNpZ25hdHVyZSI6IjBGQ2I3OHpNL2hZV2FseFlDZTBTKzh4azFXT2t4STFpTkVRN21CL2poNmJ0Mzc5N3dUcWZwQ0Vrcy9qVm5EY1podjNJZlZ4aFM5aWczZ0doVHgwK2d3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjc3MTgwODg4NTQ6M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJmV0Ywdm44dG1DaVdJbXhSdTErcXhRQVVxSStNUThrVmlTWEFxMm9CSFVQIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzQ3MjQ5NTY0LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUpOQSJ9" // session id here
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
