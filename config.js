const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="frediezra60@gmail.com"
global.location="Nairobi,Kenya."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Kenya";
global.github=process.env.GITHUB|| "https://github.com/Fred1e/FREDI_MD-plugin/tree/main";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VaihcQv84Om8LP59fO3f";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VaihcQv84Om8LP59fO3f" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1174570d0e65be3c5e4bc.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "255714595078" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "255714595078";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/1174570d0e65be3c5e4bc.jpg" // FREDI Theme Images
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://wa.me/255714595078";


global.SESSION_ID = process.env.SESSION_ID ||  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0dBWGZSL1dtWkRWK2U3Yzl4RmZEYWQrN0ZiS0ViM05uSStYdVBwRmdrRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidjNTbmc5dDR4SFg0NXNpVDhVTW5sNkVFQkJkSWVmbERsSExJTjF5MlFtND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNRmNpK3d4dDVpb3NzaG1BNzAzRjhwcjJiekgvNmgrWnpJVVBxcGltU2tJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtNlp0bEZlKzdVRlQybjRoajM3QlJ1QkdlYWhEYi9saWV4c1ZZaEVSS240PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFPMTl2dkRVRTZ1WXRaL1ByUnREa2lkZzRHMDUrRDEzMktaQWdYS1E4RVE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImMvUWNram5oSDFLVGRoeklMMGpoZEhOUFFDWmdKOFkxN2oyQWptRDZ2M009In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU0tlc1p5TkZoQXl6ekpST0dSeWtTblhDZDd4ZUZRVWxGRVRZS3pmUWJWUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUNNdllPaWVxMWZYWmNHK2tsZlowQ0U1M2JZWHkzRHJGdDdiaXljN0hBWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNzcjRna0hJYjFpQ3cwL0VPK1dBYTEyZ242L0JkUG9INkFaRVB6SDVHMEovY3Q1NUhHOUpyRHdKMWZ3YkpBYUlhQmhNbnV6R3lMSjVYN0Nxc1JPNGpnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTY2LCJhZHZTZWNyZXRLZXkiOiJVL0RYRW54ek50RURPYlR5cHhvODR6aUFoK253bWFRcS90eHJqMjlsVklRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJrT3RXZnNKVlN4R0FmMmt5UlVPMUt3IiwicGhvbmVJZCI6IjE4ZmFiNWRiLTg5MDktNDVjYi1iNzE0LTBjZmNhMWI4ZWE5NCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkaXlZVE5IcXkzbGlDSVREZWxwSDV4RVIwUWs9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoickEyeURZc3BGeG43YUpEZXg5c2RkWjQ2KzVBPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkcyRUVFV0RRIiwibWUiOnsiaWQiOiIyNTU3MTQ1OTUwNzg6NUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZm58J2amPCdmo7wnZqVIPCdmbDwnZqVIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNQT3BxdzBRb1lPQ3RnWVlBaUFBS0FBPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJyTVNqbm1IVmVhVis4U0ZwRmhta3dqSmdKNEpzN09lVGl1MzFJWTh3ZjJNPSIsImFjY291bnRTaWduYXR1cmUiOiJlaTVJb3IxRkJsMUUyeEM2TnBBRk05SUVLVW9ya3E3ZkVLaGI4UXVHa1lPa3FZZmJnNnlYMWdReFRoM3dCODk1VkZKVzVpMGNrckpmNW44Y3Z0QVFBUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiUTRIbndTVmN0OW5HRjdJSVZiVWVYVFJBSHluVm9iaVpYYmtJWXRtWklTZ3NFbmZVTGFwd1ByYnZUMTRLNGVqaHJncG5XT01BZGw0OFdycmd5KzZwaEE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNTU3MTQ1OTUwNzg6NUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJhekVvNTVoMVhtbGZ2RWhhUllacE1JeVlDZUNiT3puazRydDlTR1BNSDlqIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIzODkyMTQyLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUpsTSJ9" ;


module.exports = {

  menu: process.env.MENU || "Aztec_Md", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "Q",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.1",
  caption : process.env.CAPTION || "by joel kang'oma" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "joel",
  packname: process.env.PACK_NAME || "🐯",
  botname : process.env.BOT_NAME  || "JOEL MD",
  ownername:process.env.OWNER_NAME|| "joel",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "joel it"  ).toUpperCase(),



};

























global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
