require("dotenv").config();

module.exports = {
    token: process.env.TOKEN || "",  // your bot token
    prefix: process.env.PREFIX || ".", // bot prefix
    ownerID: process.env.OWNERID ||  ["1152704483231543379"], //your discord id
    mongourl: process.env.MONGO_URI || "mongodb+srv://pee33:wnn99e@cluster0.fgivnid.mongodb.net/?retryWrites=true&w=majority", // MongoDb URL
      topggapi : "",
     embedColor: process.env.COlOR || "#303037", // embed colour
    logs: process.env.LOGS || "1198586029343518820", // channel id for guild create and delete logs
    langs:  process.env.LANGS || "en",  
    

    nodes: [
    {
      host: process.env.NODE_HOST ||"lava.link",
      identifer: process.env.NODE_ID || "Main",
      
      port: parseInt(process.env.NODE_PORT || "80"),
      password: process.env.NODE_PASSWORD || "LAVA",
      secure: parseBoolean(process.env.NODE_SECURE || "false"),


      

    }
  ],


}

function parseBoolean(value){
    if (typeof(value) === 'string'){
        value = value.trim().toLowerCase();
    }
    switch(value){
        case true:
        case "true":
            return true;
        default:
            return false;
    }
}
