const proc = require('child_process').spawn;
const fs = require('fs');
//const build = require('./build.js');
const config = require('./config.json');
const writable = require('stream').writable;




module.exports.button = require('./button.js');
module.exports.label = require('./label.js');
//exports.progressbar = require('./progress.js');
module.exports.textbox = require('./textbox.js');
module.exports.picturebox = require('./picture.js');
module.exports = class{
    constructor(text){
        //fs.unlink('test.cs',function(err){if (err) throw err;});
        //proc('cmd',['/c del test.cs']);
        this.text = text;
        this.subproc = "adsfasdf";
        this.logger = fs.createWriteStream('test.cs', {
            flags: 'a+'
        });
        //this.logger = writable;
        //this.logger.open();
        /*this.logger.write = function(f){
            proc('cmd',['/c echo ' + f + ' >> test.cs']);
        }*/
        this.controls = new Array();
        this.pictures = new Array();
        this.logger.write('using System;\r\n');
        this.logger.write('using System.Collections.Generic;\r\n');
        this.logger.write('using System.Linq;\r\n');
        this.logger.write('using System.Threading.Tasks;\r\n');
        this.logger.write('using System.Windows.Forms;\r\n');
        this.logger.write('using System.Drawing;\r\n');
        this.logger.write('namespace winformsjs{\r\n');
        this.logger.write('    public class Form1:Form\r\n');
        this.logger.write('    {\r\n');
        
    }
    add = function(c,type,id){
        funi = new c();
        if (type == "button"){
            this.logger.write('      Button ' + id + ' = new Button();\r\n');
            this.logger.write('      String ' + id + 'Text = "' + funi.text + '";\r\n');
            this.logger.write('      Point ' + id + 'Location = new Point(' + funi.x.ToString() + ',' + funi.y.ToString() + ');\r\n');
            this.logger.write('      Size ' + id + 'Size = new Size(' + funi.width.ToString() + ',' + funi.height.ToString() + ');\r\n');
            this.logger.write('      System.EventHandler ' + id + 'Click = new System.EventHandler((object sender, EventArgs e)=>{Console.WriteLine("' + id + ' clicked")});\r\n');
            this.controls.push(id);
        }
        if (type == "label"){
            this.logger.write('      Label ' + id + ' = new Label();\r\n');
            this.logger.write('      String ' + id + 'Text = "' + funi.text + '";\r\n');
            this.logger.write('      Point ' + id + 'Location = new Point(' + funi.x.ToString() + ',' + funi.y.ToString() + ');\r\n');
            this.logger.write('      Size ' + id + 'Size = new Size(' + funi.width.ToString() + ',' + funi.height.ToString() + ');\r\n');
            this.logger.write('      System.EventHandler ' + id + 'Click = new System.EventHandler((object sender, EventArgs e)=>{Console.WriteLine("' + id + ' clicked")});\r\n');
            this.controls.push(id);
        }
        if (type == "picture"){
            this.logger.write('      PictureBox ' + id + ' = new PictureBox();\r\n');
            this.logger.write('      String ' + id + 'Image = "' + funi.image + '";\r\n');
            this.logger.write('      Point ' + id + 'Location = new Point(' + funi.x.ToString() + ',' + funi.y.ToString() + ');\r\n');
            this.logger.write('      Size ' + id + 'Size = new Size(' + funi.width.ToString() + ',' + funi.height.ToString() + ');\r\n');
            this.logger.write('      System.EventHandler ' + id + 'Click = new System.EventHandler((object sender, EventArgs e)=>{Console.WriteLine("' + id + ' clicked")});\r\n');
            this.controls.push(id);
            this.pictures.push(id);
        }
        if (type == "textbox"){
            this.logger.write('      TextBox ' + id + ' = new TextBox();\r\n');
            this.logger.write('      String ' + id + 'Text = "' + funi.text + '";\r\n');
            this.logger.write('      Point ' + id + 'Location = new Point(' + funi.x.ToString() + ',' + funi.y.ToString() + ');\r\n');
            this.logger.write('      Size ' + id + 'Size = new Size(' + funi.width.ToString() + ',' + funi.height.ToString() + ');\r\n');
            this.logger.write('      System.EventHandler ' + id + 'Click = new System.EventHandler((object sender, EventArgs e)=>{Console.WriteLine("' + id + ' clicked")});\r\n');
            this.controls.push(id);
        }
    }
    finish = function(){
        console.log(this.logger.write('      public Form1(){\r\n'));
        this.logger.write('          this.SuspendLayout();\r\n');
        this.logger.write('          this.Text = "' + this.text + '";\r\n');
        for (let i = 0; i > this.controls.length; i++){
            if (this.controls[i] == this.pictures[i]){
                this.logger.write('          ' + this.controls[i] + '.ImageLocation = ' + this.controls[i] + 'Image');
                this.logger.write('          ' + this.controls[i] + '.Point = ' + this.controls[i] + 'Location;\r\n');
                this.logger.write('          ' + this.controls[i] + '.Size = ' + this.controls[i] + 'Size;\r\n');
                this.logger.write('          ' + this.controls[i] + '.Click += ' + this.controls[i] + 'Click;\r\n');
            }else{
                this.logger.write('          ' + this.controls[i] + '.Text = ' + this.controls[i] + 'Text;\r\n');
                this.logger.write('          ' + this.controls[i] + '.Point = ' + this.controls[i] + 'Location;\r\n');
                this.logger.write('          ' + this.controls[i] + '.Size = ' + this.controls[i] + 'Size;\r\n');
                this.logger.write('          ' + this.controls[i] + '.Click += ' + this.controls[i] + 'Click;\r\n');
            }
        }
        this.logger.write('      }\r\n');
        this.logger.write('      static void Main(){\r\n');
        this.logger.write('          Form1 f = new Form1();\r\n');
        this.logger.write('          Task.Run(()=>{Application.Run(f);});\r\n');
        this.logger.write('          haha(f);\r\n');
        this.logger.write('      }\r\n');
        this.logger.write('      static void haha(Form1 f){\r\n');
        this.logger.write('          String wut = Console.ReadLine();\r\n');
        for (let i = 0; i > this.controls.length; i++){
            if (this.controls[i] != this.pictures[i]){
                this.logger.write('          if (wut.StartsWith("' + this.controls[i] + ' ")){\r\n');
                this.logger.write('              f.' + this.controls[i] + ' = wut.Replace("' + this.controls[i] + ' ");\r\n');
                this.logger.write('          }\r\n');
            }
        }
        this.logger.write('      }\r\n');
        this.logger.write('  }\r\n');
        this.logger.write('}\r\n');
        this.logger.close(function(){
            console.log("Finished");
            proc(config.folder + '/' + config.version + '/csc.exe',['test.cs']);
            setTimeout(function(){this.subproc = proc('test.exe')},1000);
        });
        //console.log("Finished");
        
    }
    modify = function(id,changeTo){
        this.subproc.stdin.write(id + ' ' + changeTo);
    }
    onclick = function(id,callback){
        this.subproc.stdout.on(id + ' clicked',callback());
    }
}