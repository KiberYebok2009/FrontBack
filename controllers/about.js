const Item = require("../models/item.js");

exports.getItems = async function(request, response){
    response.render("about.hbs");
};

exports.addItems = async function(request, response){
    response.render("add.hbs");
};

exports.getItems = async function(request, response){
    const allItems = await Item.find({});
    response.render("about.hbs", {items: allItems});
}

exports.postItem = async function(request, response){
    if(!request.body) return response.sendStatus(400);

    const itemName = request.body.name;
    const itemCost = request.body.cost;

    const item = new Item({name: itemName, cost: itemCost});

    await item.save();
    response.redirect("/about");
};