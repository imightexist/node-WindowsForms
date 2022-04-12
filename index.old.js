const os = require('os');
const fs = require('fs');
const proc = require('child_process');
const config = require('./config.json');
const transform = require('stream').transform;
//require('dotenv').config();

exports.button = require('./button.js');
exports.label = require('./label.js');
exports.progressbar = require('./progress.js');
exports.textbox = require('./textbox.js');
exports.picturebox = require('./picture.js');
exports = class {
    //nice
    constructor() {
        this.process;

        //writing data
        this.logger = fs.createWriteStream('test.cs', {
            flags: 'a'
        });
        this.logger.write('using System;');
        this.logger.write('using System.Collections.Generic;');
        this.logger.write('using System.Linq;');
        this.logger.write('using System.Threading.Tasks;');
        this.logger.write('using System.Windows.Forms;');
        this.logger.write('namespace winformsjs{');
        this.logger.write('    partial class Form1');
        this.logger.write('    {');
        
        //this.logger.write('    ');
    }
    removeEnds = function () {
        //fs.writeFile('test.cs')
    }
    run = function () {
        //compile and run, windows comes with .net preinstalled no matter what i think
        logger.write('    }');
        logger.write('}');
        proc.spawn(config.folder + '/' + config.version + '/' + 'csc temp.cs');
        process = proc.spawn('test.exe');
    }
    add = function (a) {
        //add components

    }
    stop = function () {
        //exit process
        process.kill();
    }
    refresh = function () {
        //refreshes
        process.kill();
        proc.spawn(config.folder + '/' + config.version + '/' + 'csc temp.cs');
        process = proc.spawn('test.exe');
    }
}