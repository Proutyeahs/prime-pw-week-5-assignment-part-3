console.log('***** Music Collection *****')

let collection = [];

function addToCollection(title, artist, yearPublished) {
    let album = {
        title: title,
        artist: artist,
        yearPublished: yearPublished
    }
    collection.push(album);
    return console.log(album);
}

addToCollection('Samurai Champloo', 'tsutchie', 2004)
addToCollection('THE GOAT', 'Polo G', 2020)
addToCollection('By Your Side', 'Breakbot', 2012)
addToCollection('American IV: The Man Comes Around', 'Johnny Cash', 2002)
addToCollection('In Return', 'ODESZA', 2014)
addToCollection('The Eminem Show', 'Eminem', 2002)
console.log(collection)