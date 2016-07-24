#!/usr/bin/env node
/**
 * Created by Gaurav MphRx on 7/22/2016.
 */


var fs = require("fs");
var path = require('path')
Object.assign = require("object-assign")
var objectFromJSON = function (filePath) {
    var _returnObject = null
    try {
        if (path.extname(filePath) == '.json' && fs.lstatSync(filePath).isFile()) {
            _returnObject = JSON.parse(fs.readFileSync(filePath, 'utf8'));
        } else {
            console.error("COULD NOT LOAD FILE" + filePath)
        }

    } catch (e) {
        console.error("COULD NOT LOAD FILE" + filePath)
    }
    return _returnObject
}
var createFileFromJson = function (filePath, jsonContent) {
    fs.writeFileSync(filePath, JSON.stringify(jsonContent, null, 4));
}

if (process.argv.length <= 3) {
    console.error("NOT ENOUGH PARAMETERS TO MERGE FILS")

} else {
    var first_obj, second_object
    first_obj = objectFromJSON(process.argv[2])

    if (first_obj) {
        second_object = objectFromJSON(process.argv[3])
    }


    if (first_obj && second_object) {
        if (process.argv.indexOf("--create-backup") > -1) {
            var backup_file = process.argv[2] + "_backup_" + new Date().getTime()
            fs.rename(process.argv[2], backup_file, function (err) {
                if (err) throw err;
                console.log('Backup file created for ' + process.argv[2] + " at" + backup_file);
            });


        }
        console.log("File " + process.argv[3] + " merged into " + process.argv[2])
        createFileFromJson(process.argv[2], Object.assign(second_object, first_obj))


    }
}