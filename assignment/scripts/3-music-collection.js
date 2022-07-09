console.log('***** Music Collection *****')

let collection = [];

function addToCollection(title, artist, yearPublished, ...array) {
    let album = {};
    album.title = title;
    album.artist = artist;
    album.yearPublished = yearPublished;
    album.tracks = array;
    collection.push(album);
    return console.log(album);
}

addToCollection('Self Inflicted', 'Chelsea Grin', 2016, ["Scratching and Screaming", 3.23], ["Never, Forever", 4.00]);
addToCollection('THE GOAT', 'Polo G', 2020, ["Beautiful Pain", 2.51], ["21", 2.43], ["Martin & Gina", 2.12]);
addToCollection('By Your Side', 'Breakbot', 2012, ["Baby Im Yours", 3.36]);
addToCollection('American IV: The Man Comes Around', 'Johnny Cash', 2002, ["Hurt", 3.36], ["I Hung My Head", 3.53]);
addToCollection('In Return', 'ODESZA', 2014, ["Always This Late", 2.40], ["Say My Name", 4.22], ["Sundara", 2.16], ["Sun Models", 2.40]);
addToCollection('The Eminem Show', 'Eminem', 2002, ["Without Me", 4.50], ["Superman", 5.50], ["Till I Collapse", 4.57]);

console.log(collection);

function showCollection(array) {
    console.log(array.length);
    for (let i = 0; i < array.length; i++) {
        console.log(array[i].title, "by", array[i].artist, "published in", array[i].yearPublished)
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
        if (trackName === collection[i].tracks) {
            return console.log(trackName)
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