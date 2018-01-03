const express = require('express');
const router = express.Router();
const DbSchemas = require("../models/schemas");

router.get("/players", function(req, res){
    DbSchemas.PlayerSchema.find({}).then(function(players){

        var ObjectToSend = {};
        ObjectToSend["code"] = 200;
        ObjectToSend["status"] = "OK";
        ObjectToSend["data"] = players;

        res.send(JSON.stringify(ObjectToSend));
    });
});

router.get("/parties", function(req, res){
    DbSchemas.PartySchema.find({}).then(function(parties){
        res.send(parties);
    });
});

router.post("/players", function(req, res, next){
    DbSchemas.PlayerSchema.create(req.body).then(function(player){
        res.send(player);
    }).catch(next);
});

router.post("/parties", function(req, res, next){
    DbSchemas.PartySchema.create(req.body).then(function(party){
        res.send(party);
    }).catch(next);
});

router.put("/players/:id", function(req, res, next){
    DbSchemas.PlayerSchema.findByIdAndUpdate({_id:req.params.id}, req.body).then(function(){
        DbSchemas.PlayerSchema.findOne({_id:req.params.id}).then(function(player){
          res.send(player);
       });
    }).catch(next);
});

router.put("/parties/:id", function(req, res, next){
    DbSchemas.PartySchema.findByIdAndUpdate({_id:req.params.id}, req.body).then(function(){
        DbSchemas.PartySchema.findOne({_id:req.params.id}).then(function(party){
            res.send(party);
        });
    }).catch(next);
});

router.delete("/parties/:id", function(req, res, next){
    DbSchemas.PartySchema.findByIdAndRemove({_id:req.params.id}).then(function(party){
        res.send(party);
    }).catch(next);
});

router.delete("/players/:id", function(req, res, next){
    DbSchemas.PlayerSchema.findByIdAndRemove({_id:req.params.id}).then(function(player){
        res.send(player);
    }).catch(next);
});

module.exports = router;