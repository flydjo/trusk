const express = require('express');
const app = express();

exports.getHome = (req, res, next) => {
    console.log("Someone call the API");
    res.status(200).json({message: 'Welcome to my API'});
}

exports.postAverage = (req, res, next) => {
    var newArray = [];
    if (req.body.idx === 0) {
        //var newArray = []; //On vide le tableau à chaque fois qu'on passe par ici
        newArray.push.apply(newArray, req.body.value);
        
        var total = 0;
        for (var i = 0; i < req.body.value.length; i++) {
            total += req.body.value[i];
        }
        var average = Math.round(total / req.body.value.length);
    } else {
        newArray.push.apply(newArray, req.body.value);

        var total = 0;
        for (var i = 0; i < newArray.length; i++) {
            total += newArray[i];
        }
        var average = Math.round(total / newArray.length);
    }

    console.log(newArray);
    console.log(average);
    // app.post('https://trusk-ctf.herokuapp.com/87ec07e0-c91b-476f-a519-5118478ce0c0/webhook/avg') = (req, res) => {
    //     return {response: average};
    // }
    res.status(200).json({response: average});
}

exports.postUnique = (req, res , next) => {
    if(req.body.idx === 0) {
        var newArray = [];
        newArray.push.apply(newArray, req.body.value);
        var unique = [...new Set(newArray)];
    } else {
        newArray.push.apply(newArray, req.body.value);
        var unique = [...new Set(newArray)];
    }
    console.log(newArray);
    console.log(unique.length);
    res.status(200).json({response: unique.length});
}

exports.postSlots = (req, res, next) => {
    res.status(200).json({message: 'Post Slots'});
}