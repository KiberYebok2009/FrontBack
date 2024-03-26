const express = require("express");
const mongoose = require("mongoose");
const app = express();

const aboutRouter = require("./routes/AboutRouter.js");
const homeRouter = require("./routes/HomeRouter.js");

app.set("view engine", "hbs");
app.set("views", "html");
app.use(express.static('./css'));
app.use('/JS', express.static("./JS"));
app.use('/images', express.static('./images'));
app.use(express.urlencoded({ extended: false}));

const PORT = 3000
const DBname = "person"

app.use("/about", aboutRouter);
app.use("/", homeRouter);

async function main(){
    try{
        await mongoose.connect("mongodb://127.0.0.1:27017/" + DBname);
        app.listen(PORT);
        console.log("Сервер подключен...");
    }

    catch(err){
        return console.log(err);
    }
}
main();

process.on("SIGINT", async() =>{
    await mongoose.disconnect();
    console.log("Приложение завершило работу");
    process.exit();
});