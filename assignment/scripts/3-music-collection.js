console.log('***** Music Collection *****')

let collection = [];

function addToCollection(title, artist, yearPublished) {
    let album = {};
    album.title = title;
    album.artist = artist;
    album.yearPublished = yearPublished;
    collection.push(album);
    return console.log(album);
}

addToCollection('Self Inflicted', 'Chelsea Grin', 2016);
addToCollection('THE GOAT', 'Polo G', 2020);
addToCollection('By Your Side', 'Breakbot', 2012);
addToCollection('American IV: The Man Comes Around', 'Johnny Cash', 2002);
addToCollection('In Return', 'ODESZA', 2014);
addToCollection('The Eminem Show', 'Eminem', 2002);

console.log(collection);

function showCollection(array) {
    console.log(array.length)
    for (let i = 0; i < array.length; i++) {
        console.log(array[i].title, "by", array[i].artist, "published in", array[i].yearPublished)
    }
}

showCollection(collection)

function findByArtist(artist) {
    let artists = []
    for (let i = 0; i < collection.length; i++) {
        if (artist === collection[i].artist) {
            artists.push(artist)
            return console.log(artists)
        } 
    } 
    return console.log(artists)
}

findByArtist('Eminem')
findByArtist('Polo G')
findByArtist("Eric Prouty")