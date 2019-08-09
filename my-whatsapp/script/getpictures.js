var fs = require('fs'),
    request = require('request'),
    sharp = require('sharp');

var downreq = async function(uri, filename, filesmall) {
    new Promise((resolve, reject) => {
        let file = fs.createWriteStream(filename);
        request({
            uri: uri
        })
        .pipe(file)
        .on('finish', () => {
            console.log(`File: '${filename}' downloaded`);
            sharp(filename).resize(40).toFile(filesmall,function(){});
            console.log(`File: '${filesmall}' created`);
            resolve();
        })
        .on('error', (error) => {
            reject(error);
        })
    });
}

var timeout = async function (ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

var batch = async function() {
    let dir = './public/img';
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }
    for(let i=0; i < 50; i++) {
        let file = `./public/img/person${i+1}.jpg`
        let filesmall = `./public/img/person_small${i+1}.jpg`;
        await downreq(`https://thispersondoesnotexist.com/image?id=${i+1}`, file, filesmall);
        await timeout(3000);
    }
}

batch();