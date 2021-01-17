const axios = require('axios');

exports.getHome = (req, res, next) => {
    console.log("Someone call the API");
    res.status(200).json({message: 'Welcome to my API'});
}

exports.postAverage = (req, res, next) => {
    var newArray = [];
    if (req.body.idx === 0) {
        newArray = [];
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

    axios.post('https://trusk-ctf.herokuapp.com/87ec07e0-c91b-476f-a519-5118478ce0c0/webhook/avg', {
        response: average
    })
    .then(res => res.status(200).json({response: average}))
    .catch(error => res.status(400).json({error: error}));
}

exports.postUnique = (req, res , next) => {
    var newArray = [];
    if(req.body.idx === 0) {
        newArray = [];
        newArray.push.apply(newArray, req.body.value);
        var unique = [...new Set(newArray)];
    } else {
        newArray.push.apply(newArray, req.body.value);
        var unique = [...new Set(newArray)];
    }
    
    axios.post('https://trusk-ctf.herokuapp.com/87ec07e0-c91b-476f-a519-5118478ce0c0/webhook/unique', {
        response: unique.length
    })
    .then(res => res.status(200).json({response: unique.length}))
    .catch(error => res.status(400).json({error: error}))
}

exports.postSlots = (req, res, next) => {
    res.status(200).json({message: 'Post Slots'});
}