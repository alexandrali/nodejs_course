import csv from "csvtojson";
import fs from "fs";

const csvFilePath='./csv/nodejs-hw1-ex1.csv';
const readStream=require('fs').createReadStream(csvFilePath);

readStream.on('error', ()=>{
    console.log('File does not exist!')
});

const result = [];

readStream.pipe(
    csv()
    .on('data',(data)=>{
        result.push(Buffer.from(data))
    })
    .on('done', ()=>{
        fs.writeFile("result.txt", result.join(''), function(err) {
            if (err) {
                console.log(err);
            }
        });
    })
);