const express = require("express");
var { getDadjoke } = require("random-jokes");
var fs = require('fs');
const app = express();
const { randomLaughingImageGenerator } = require("random-laughing-image-generator");


// Random jokes
// app.get("/api/jokes/random", (req, res)=>{
//     (async ()=>{
//         const joke = await getDadjoke();
//         const output = {
//             success :true,
//             message : joke
//         }
//         res.json(output);
//     })();
// })




// Random images
app.get("/api/images/random", (req, res)=>{
    // (async ()=>{
    //     const imageUrl = await getDadjoke();
    //     const output = {
    //         success :true,
    //         message : imageUrl
    //     }
    //     res.json(output);
    // })();

    const resp = randomLaughingImageGenerator();
    // console.log(resp);
    const output = {
        success : true,
        message : resp
    }
    res.json(output);
})

app.listen(8082, ()=>{
    console.log("Server is called");
})