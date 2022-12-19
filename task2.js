import csv from "csvtojson";
import fs from "fs";

const csvFilePath='./csv/nodejs-hw1-ex1.csv';

csv()
.fromFile(csvFilePath)
.then((jsonObj)=>{
    const textToWretxtResult = jsonObj.map((item) => JSON.stringify(item)).join('\n');
    fs.writeFile("result.txt", textToWretxtResult, function(err) {
        if (err) {
            console.log(err);
        }
    }); 
});