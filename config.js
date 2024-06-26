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
global.caption = process.env.CAPTION || global.caption || "j" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "255757917366";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_54_06_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTA2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMzYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgODksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjE1LFxuICAgICAgICA3MyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTcsXG4gICAgICAgIDkwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDgyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgOTQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE4NixcbiAgICAgICAgNDUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA5LFxuICAgICAgICAzNSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTgyLFxuICAgICAgICAxMjksXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIsXG4gICAgICAgIDc4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDI3LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMzIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDgwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgOTcsXG4gICAgICAgIDM4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDkzLFxuICAgICAgICA2MCxcbiAgICAgICAgMTA0LFxuICAgICAgICA5OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDMyLFxuICAgICAgICAxMjksXG4gICAgICAgIDE0MixcbiAgICAgICAgMTM3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDk3LFxuICAgICAgICAxOCxcbiAgICAgICAgMTU2LFxuICAgICAgICAxODksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTQsXG4gICAgICAgIDE0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxMjksXG4gICAgICAgIDUxLFxuICAgICAgICAxOSxcbiAgICAgICAgMjMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNzksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDg5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0OSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIyLFxuICAgICAgICA3MCxcbiAgICAgICAgMTEsXG4gICAgICAgIDE1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDM0LFxuICAgICAgICAzMCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNDksXG4gICAgICAgIDIwMixcbiAgICAgICAgNTgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTk5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDI1MixcbiAgICAgICAgNzQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMjMsXG4gICAgICAgIDYwLFxuICAgICAgICA3LFxuICAgICAgICA2MSxcbiAgICAgICAgMjMyLFxuICAgICAgICA3NSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxOTMsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTA0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgNTYsXG4gICAgICAgIDIxNixcbiAgICAgICAgNTIsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTIyLFxuICAgICAgICA1NixcbiAgICAgICAgMTMxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE3MixcbiAgICAgICAgNjksXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjE3LFxuICAgICAgICA1NyxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDcwLFxuICAgICAgICAyMjksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMzksXG4gICAgICAgIDg2LFxuICAgICAgICAyNyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNDcsXG4gICAgICAgIDUxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDUxLFxuICAgICAgICA1NixcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIwMixcbiAgICAgICAgNSxcbiAgICAgICAgNDIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNixcbiAgICAgICAgMSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNTQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgOTYsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTA3LFxuICAgICAgICA1OCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNixcbiAgICAgICAgMTM0LFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDk1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgNjhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDUxLFxuICAgICAgICAwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTEzLFxuICAgICAgICA2NyxcbiAgICAgICAgNTEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjcsXG4gICAgICAgIDg4LFxuICAgICAgICA5MCxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDI5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDQyLFxuICAgICAgICAxMzcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgOTAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA5MSxcbiAgICAgICAgNTYsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjQ5LFxuICAgICAgICA3MCxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDIyLFxuICAgICAgICAxMDIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjI2LFxuICAgICAgICA4MyxcbiAgICAgICAgMTIwLFxuICAgICAgICAzOCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDM0LFxuICAgICAgICA1MixcbiAgICAgICAgMTMxLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA3OCxcbiAgICAgICAgMTcsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNTMsXG4gICAgICAgIDU2LFxuICAgICAgICAwLFxuICAgICAgICAzMSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjA1LFxuICAgICAgICA4NSxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIwNixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJlN09VUE1GQ042cmVZNUVzVFFocDVab2toemFneit1UmM0MVg5L2NQVzBrPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJaQXZ0VnZ3UVRpdV9hbFV2UE50aE9RXCIsXG4gIFwicGhvbmVJZFwiOiBcImI3OTUyNDRlLTdhZjQtNGUxYy1hZjgzLTM2MWIwY2NlNWY3MlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjksXG4gICAgICAyMDQsXG4gICAgICAxMTQsXG4gICAgICA0NCxcbiAgICAgIDIxMixcbiAgICAgIDY0LFxuICAgICAgMjQzLFxuICAgICAgNDUsXG4gICAgICAxODUsXG4gICAgICAxNzgsXG4gICAgICAxNzAsXG4gICAgICA4NCxcbiAgICAgIDE2MixcbiAgICAgIDEyOCxcbiAgICAgIDI0NixcbiAgICAgIDIxOSxcbiAgICAgIDE2NCxcbiAgICAgIDE1LFxuICAgICAgOTYsXG4gICAgICA5MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA3MCxcbiAgICAgIDc2LFxuICAgICAgODcsXG4gICAgICAyNTUsXG4gICAgICAyMixcbiAgICAgIDksXG4gICAgICA3MSxcbiAgICAgIDEzNSxcbiAgICAgIDM1LFxuICAgICAgMjM1LFxuICAgICAgMTQzLFxuICAgICAgMjUwLFxuICAgICAgMTA4LFxuICAgICAgMzYsXG4gICAgICA4OCxcbiAgICAgIDIwNixcbiAgICAgIDE4NSxcbiAgICAgIDE2MixcbiAgICAgIDgzLFxuICAgICAgMjNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNkI4UUczNEJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NTc1NzkxNzM2NjoyNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTc4MDc0MDkyMDg1MzcxOjI0QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0p1QThrTVF5OHJ2c3dZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiN1RLdEJaeDVzeWtwSzR1cU9hMG9pSFpUN0xuYjdqWC9QZGV2RFA3biszQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJWQTN0c1hzR2tvS3RmTHdpelVnU2xkUkRQVDJ0cUpqTnpOeHJnWkQzQ2xKeEpVc3RVa3ZxWHNPMlp3cTdsVk9sL0hzcCtOYlFQT1VVRFN6LzYyanhBQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJQZklPNTd5dUZPSEhXZldObWJjVUlxd2orbitLdU0zS0pWU0JRc3QwRThoM1VlQ0tNbFd4aG1lMTRMZm54SURFSmdUWmw3Ym9UVzhEdmVMRnd2UXhCZz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyNTU3NTc5MTczNjY6MjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTEyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTkzOTU2NjNcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
