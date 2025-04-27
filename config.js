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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNks1OWJjK2tqc2h5YzZjcGt6Y3J3WmthSmRUWUF0b0FXN2xlTjRLZGltdz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOUV0bEVvcDhyV3BiakhSQnRNdHlkNm03Z1BzZE90YTY2Ym5HZXpVUDN6UT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJvQ0g4ZmV1eE9CWTl6MWpNaWhhYitzaSszeGdqRjd3Tk9OeWhDNzAwYzBRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJiZzBDWERhOHRRSzZtaERBd0VoUUFYdmNBUDR2THpKQ3cwM21rdkw2K3lRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlIM2VEd2plUHdFY28rcHh1Q1FkV3ZEeXBhdktZY0JmVXBWVkZmV3Vya0E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5hSjVmNUUzSDFKNVlXU3FienRtdUZrU3JRTTY0UjY5Yzd3V3FoOXlYZ3c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEZ6MTVzZFc1NE9DR25VTktUUTU1cndBTStPRjhjK0lLdll2VU1LblMxaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQURsSkNDWGlteklJemxmd25FNzVUdnkzQldyYzNYR1cxWmZ1QWtiU3FWND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVUQ2JOUkpta3pCRGh5QXI5VHoxamNjL2V1NHNqcFppRTZQL2dSSGhvZ3JpNzhIcjFqcGMxZnNGbDh2RVBkbzFWK0MvU0ZpTlY4QW82K1JDK2MrMURRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjIyLCJhZHZTZWNyZXRLZXkiOiI3Rlh1VWhIeG9rR3Z1RWRPcFc0QWowUGJRUFcrV0xNV1hRaDV1djR6QWcwPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiItak1jQTFJV1NzYWVKbURkNWh0amJBIiwicGhvbmVJZCI6ImY2NTAwZDAxLWM1OWQtNDEwYi05YTI3LTY2ZDFhNzZlOGJhNSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkM211S2JFUjNRTloxRjVwY0JsNUxsWmg1TTg9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoialZpTElLamV2NktqaUNFOWVVRGhKbk1SMGFBPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlAzMUxHUkNMIiwibWUiOnsiaWQiOiIyNzc1MTAxNDcxODozQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNLWEJsUGdFRU1DYnQ4QUdHQU1nQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ6KzdINTBlTFJHNGs0c0daN1R1YVdudlpDZnU0QWRjN0NwM25iYXZjTXo4PSIsImFjY291bnRTaWduYXR1cmUiOiJXU3owT3BJUGlNUGRIU2NCbmNIQi9pbVY4TXVYTTRTQmxCZTlwUko0L092M1VydkNMYWZIN2RGSDFmT3dQSmthTUZjcjI1SzdONjdhZTRzWW1xTi9Edz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiTkZ2dms5R3d2SitLUlVydFhBNE1qVU44ZTFPeVdVNWtNZ3YyOTYzalNaeUVpazRSVkVBMWNVVU1IZnRUTHVXZkNYSGtiai9lTDI4WlpLWmpkbHNrQ1E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNzc1MTAxNDcxODozQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmMvdXgrZEhpMFJ1Sk9MQm1lMDdtbHA3MlFuN3VBSFhPd3FkNTIycjNETS8ifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NDU3MzUxMTgsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBQTliIn0=" // session id here
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
