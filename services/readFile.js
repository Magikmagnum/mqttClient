const fs = require('fs');

/**
 * La fonction de lecture de fichier
 * @param { String } path Le chemin du fichier a lire
 * @param { String } encoding L'encodage du fichier a lire
 * @return { File } File
*/
function readFile(path, encoding = 'utf8') {

    let file = false;
    try {
        file = fs.readFileSync(path, encoding);
    } catch (err) {
        console.error(err);
    }
    return file
}

module.exports = { readFile };