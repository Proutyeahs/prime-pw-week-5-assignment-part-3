console.log('***** Music Collection *****')

let collection = [];

function addToCollection(title, artist, yearPublished, tracks) {
    let album = {};
    album.title = title;
    album.artist = artist;
    album.yearPublished = yearPublished;
    album.tracks = tracks;
    collection.push(album);
    return console.log(album);
}

addToCollection('Self Inflicted', 'Chelsea Grin', 2016, [{name: "Scratching and Screaming", duration: "3:23"}, {name: "Never, Forever", duration: "4:00"}]);
addToCollection('THE GOAT', 'Polo G', 2020, [{name: "Beautiful Pain", duration: "2:51"}, {name: "21", duration: "2:43"}, {name: "Martin & Gina", duration: "2:12"}]);
addToCollection('By Your Side', 'Breakbot', 2012, [{name: "Baby Im Yours", duration: "3:36"}]);
addToCollection('American IV: The Man Comes Around', 'Johnny Cash', 2002, [{name: "Hurt", duration: "3:36"}, {name: "I Hung My Head", duration: "3:53"}]);
addToCollection('In Return', 'ODESZA', 2014, [{name: "Always This Late", duration: "2:40"}, {name: "Say My Name", duration: "4:22"}, {name: "Sundara", duration: "2:16"}, {name: "Sun Models", duration: "2:40"}]);
addToCollection('The Eminem Show', 'Eminem', 2002, [{name: "Without Me", duration: "4:50"}, {name: "Superman", duration: "5:50"}, {name: "Till I Collapse", duration: "4:57"}]);

console.log(collection);

function showCollection(array) {
    console.log(array.length);
    for (let i = 0; i < array.length; i++) {
        console.log(array[i].title, "by", array[i].artist, "published in", array[i].yearPublished)
        console.log("Tracks:", array[i].tracks)
    }
}

showCollection(collection);

function findByArtist(artist) {
    let artists = []
    for (let i = 0; i < collection.length; i++) {
        if (artist === collection[i].artist) {
            artists.push(artist);
            return console.log(artists);
        }
    }
    return console.log(artists);
}

findByArtist('Eminem');
findByArtist('Polo G');
findByArtist("Eric Prouty");

function search(artist, yearPublished, trackName) {
    let collectionItems = [];
    for (let i = 0; i < collection.length; i++) {
        if (trackName && trackName === collection[i].tracks.name){
            collectionItems.push(artist, yearPublished, trackName)
            return console.log(collectionItems)
        }
        if (artist === collection[i].artist && collection[i].yearPublished === yearPublished) {
            collectionItems.push(artist, yearPublished);
            return console.log(collectionItems);
        }
    } if (artist && yearPublished) {
        return console.log(collectionItems);
    } else {
        return console.log(collection);
    }
}

search("Breakbot", 2012, "Baby Im Yours")
search("Eminem", 2002);
search("Johnny Cash", 2002);
search("ODESZA");
search();
search("Eric Prouty", 1993);