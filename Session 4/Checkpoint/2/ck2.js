let movieArr = [
    {
        name : "Wonder Woman",
        rate : 7.9,
        year : 2010,
        genre : "Action",
        character : ["a", "b", "c"]
    },
    {
        name : "Captain Marvel",
        rate : 8.2,
        year : 2018,
        genre : "Action",
        character : ["d", "e", "f"]
    },
    {
        name : "Thor",
        rate : 8.5,
        year : 2016,
        genre : "Action",
        character : ["f", "g", "h"]
    }
];
    for (i =0 ; i <= movieArr.length -1; i++) {
        console.log (`-------------------`);
        console.log(`name : ${movieArr[i].name}`);
        console.log(`rate : ${movieArr[i].rate}`);
        console.log(`year : ${movieArr[i].year}`);
        console.log(`character : ${movieArr[i].character}`);
    }
    movieArr[0].character. push("m");
    console.log (movieArr[0]);