const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://Suhail:suhail@cluster0.rzhkoqf.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "fm" 


global.devs = "255757917366" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '255757917366') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '255757917366') : "255757917366";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_51_07_27_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTI3LFxuICAgICAgICA2NSxcbiAgICAgICAgMSxcbiAgICAgICAgMjMyLFxuICAgICAgICA0OSxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMzksXG4gICAgICAgIDgsXG4gICAgICAgIDE3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDUzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDU3LFxuICAgICAgICA5MixcbiAgICAgICAgMzgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE4MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDcsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDQyLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDI1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDcxLFxuICAgICAgICA0NixcbiAgICAgICAgMTUzLFxuICAgICAgICA5MyxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTMsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAzNSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNjQsXG4gICAgICAgIDgzLFxuICAgICAgICA3OSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDkzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMyxcbiAgICAgICAgMTUzLFxuICAgICAgICA1NixcbiAgICAgICAgNDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTYwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNTYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNjcsXG4gICAgICAgIDQxLFxuICAgICAgICAzOSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgODYsXG4gICAgICAgIDcwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNzEsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE4LFxuICAgICAgICAxODksXG4gICAgICAgIDU3LFxuICAgICAgICAyNDEsXG4gICAgICAgIDU0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMzksXG4gICAgICAgIDIzNSxcbiAgICAgICAgOTcsXG4gICAgICAgIDEwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDg4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDQwLFxuICAgICAgICAxMixcbiAgICAgICAgOTUsXG4gICAgICAgIDE3MixcbiAgICAgICAgNTcsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTAsXG4gICAgICAgIDYwLFxuICAgICAgICAxMjUsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE5NixcbiAgICAgICAgMzcsXG4gICAgICAgIDk1LFxuICAgICAgICAxNTksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTEyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDYxLFxuICAgICAgICA3MixcbiAgICAgICAgNjcsXG4gICAgICAgIDk4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDMwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTcsXG4gICAgICAgIDEsXG4gICAgICAgIDE5LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDE1MixcbiAgICAgICAgNTQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTk5LFxuICAgICAgICA0MyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjIwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMzEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTAzLFxuICAgICAgICA0MSxcbiAgICAgICAgMjA0LFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTcsXG4gICAgICAgIDExLFxuICAgICAgICAxOTAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTI1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDczLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTc5LFxuICAgICAgICA4NSxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgODEsXG4gICAgICAgIDg2LFxuICAgICAgICAzOSxcbiAgICAgICAgNTYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNTEsXG4gICAgICAgIDc2LFxuICAgICAgICAyMzEsXG4gICAgICAgIDUwLFxuICAgICAgICA4LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQwLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDk2LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMjdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDEwLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNjZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMzQsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDI3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjIyLFxuICAgICAgICA4LFxuICAgICAgICA2NixcbiAgICAgICAgMjIyLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNCxcbiAgICAgICAgMTUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMzMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTk2LFxuICAgICAgICA3MCxcbiAgICAgICAgMTc4LFxuICAgICAgICAzMSxcbiAgICAgICAgMjAzLFxuICAgICAgICA1LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNDgsXG4gICAgICAgIDYwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDExLFxuICAgICAgICAxMDksXG4gICAgICAgIDE0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgOTQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTc4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIwNixcbiAgICAgICAgOTIsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjE5LFxuICAgICAgICA5MyxcbiAgICAgICAgNTEsXG4gICAgICAgIDc1LFxuICAgICAgICA1NCxcbiAgICAgICAgNDQsXG4gICAgICAgIDkyLFxuICAgICAgICAxOCxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEzMSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJDWi93cGtaUHU3SlpBNkxSUStZbkQyZVduSkZDZ0pjRldLZWpvdDZQT3d3PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NTc1NzkxNzM2NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMkRDRkY4QTA4OTM0REUzNzY1MkNBMkYxQThCREFBQTVcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIyMDU5NTA2XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIk5XSTV2aExMU1hLa244cFc4TGNaZGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNDlmZWFlOWQtYmRiYy00NTgzLTlmYTItZjI4YzZjZTYwMTNjXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDU3LFxuICAgICAgNDQsXG4gICAgICAzMixcbiAgICAgIDEyOCxcbiAgICAgIDEzOCxcbiAgICAgIDIwNCxcbiAgICAgIDIzMyxcbiAgICAgIDEzOCxcbiAgICAgIDI1NSxcbiAgICAgIDk2LFxuICAgICAgMzEsXG4gICAgICA3LFxuICAgICAgMTExLFxuICAgICAgMzksXG4gICAgICAxMTYsXG4gICAgICAxOTgsXG4gICAgICAyMDksXG4gICAgICAxMjIsXG4gICAgICAyMzcsXG4gICAgICAyMDNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjAyLFxuICAgICAgMjUsXG4gICAgICA5OSxcbiAgICAgIDExNixcbiAgICAgIDgyLFxuICAgICAgMTM5LFxuICAgICAgMjQ1LFxuICAgICAgMjM5LFxuICAgICAgMzUsXG4gICAgICAzOCxcbiAgICAgIDEyNSxcbiAgICAgIDYsXG4gICAgICAxODUsXG4gICAgICAxMDAsXG4gICAgICAyNyxcbiAgICAgIDk2LFxuICAgICAgNzEsXG4gICAgICAyMSxcbiAgICAgIDIzOCxcbiAgICAgIDE2M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJXWTdaV1JMOFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU1NzU3OTE3MzY2OjM0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNzgwNzQwOTIwODUzNzE6MzRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUGpxa2JBRUVPZVZrclVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJmS1NtRHNta0Faa0VjY0ZJYkI3M0ZSckU1UlZHcExhRW9zVzBXenRGTmw4PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjdZM3Z3RWp1VjhBQy9JZEZQOVFwVjRMSkJaVFNiWS96MTVnVG1Vc2xzanU4NU9hZVBDVUtkUHRudFZqZEdnWkduamhVT092ZGhUSkxjQkx5NldMUkRBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlg1ZThCQkZmN05pYmVFYnUxb2VWNDhxVVlDb0IwNTNVaTBEcDRoSjhkYlJWOElJWWhJaXRnL1VvSUtEc29TcFF0VTZnTmtxdmVHQ0pYYnNNZk5URWpnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NTc1NzkxNzM2NjozNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA2OSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA5NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyMDU5NDk5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBS0ZKXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLRkouanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJiOThVSUdQWXk1WUNDTlBFdXIrY2E0TStTK3phZDVnRVErbjVzL0hiekFVPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjExNzQ2OTczMzUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "m" , // `````", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "m",
  ownername:process.env.OWNER_NAME|| "m",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















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
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
