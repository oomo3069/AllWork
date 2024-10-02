const fs = require("fs");

// fs.writefile("message.txt","hello from nodeJS!", (err) => {
//     if(err) throw err;
//     console.log("the file has been saved!");
// });
fs.readFile("./message.txt","utf-8", (err, data) => {
    console.log(data);
});