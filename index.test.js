const proc = require('child_process').spawn;
const fs = require('fs');
const config = require('./config.json');
fs.unlink('test.cs',function(){console.log("Deleted previous file")});
logger = fs.createWriteStream('test.cs', {
    flags: 'a'
});
logger.write('using System;\r\n');
logger.write('using System.Collections.Generic;\r\n');
logger.write('using System.Linq;\r\n');
logger.write('using System.Threading.Tasks;\r\n');
logger.write('using System.Windows.Forms;\r\n');
logger.write('using System.Drawing;\r\n');
logger.write('namespace winformsjs{\r\n');
logger.write('    public class Form1:Form\r\n');
logger.write('    {\r\n');
controls = new Array();
subproc = "adsfasdf";
pictures = new Array();

module.exports.button = require('./button.js');
module.exports.label = require('./label.js');
//exports.progressbar = require('./progress.js');
module.exports.textbox = require('./textbox.js');
module.exports.picturebox = require('./picture.js');
module.exports = class{
    constructor(text){
        
        this.text = text;
        
        
    }
    add = function(c,type,id){
        funi = new c();
        if (type == "button"){
            logger.write('      Button ' + id + ' = new Button();\r\n');
            logger.write('      String ' + id + 'Text = "' + funi.text + '";\r\n');
            logger.write('      Point ' + id + 'Location = new Point(' + funi.x.ToString() + ',' + funi.y.ToString() + ');\r\n');
            logger.write('      Size ' + id + 'Size = new Size(' + funi.width.ToString() + ',' + funi.height.ToString() + ');\r\n');
            logger.write('      System.EventHandler ' + id + 'Click = new System.EventHandler((object sender, EventArgs e)=>{Console.WriteLine("' + id + ' clicked")});\r\n');
            controls.push(id);
        }
        if (type == "label"){
            logger.write('      Label ' + id + ' = new Label();\r\n');
            logger.write('      String ' + id + 'Text = "' + funi.text + '";\r\n');
            logger.write('      Point ' + id + 'Location = new Point(' + funi.x.ToString() + ',' + funi.y.ToString() + ');\r\n');
            logger.write('      Size ' + id + 'Size = new Size(' + funi.width.ToString() + ',' + funi.height.ToString() + ');\r\n');
            logger.write('      System.EventHandler ' + id + 'Click = new System.EventHandler((object sender, EventArgs e)=>{Console.WriteLine("' + id + ' clicked")});\r\n');
            controls.push(id);
        }
        if (type == "picture"){
            logger.write('      PictureBox ' + id + ' = new PictureBox();\r\n');
            logger.write('      String ' + id + 'Image = "' + funi.image + '";\r\n');
            logger.write('      Point ' + id + 'Location = new Point(' + funi.x.ToString() + ',' + funi.y.ToString() + ');\r\n');
            logger.write('      Size ' + id + 'Size = new Size(' + funi.width.ToString() + ',' + funi.height.ToString() + ');\r\n');
            logger.write('      System.EventHandler ' + id + 'Click = new System.EventHandler((object sender, EventArgs e)=>{Console.WriteLine("' + id + ' clicked")});\r\n');
            controls.push(id);
            pictures.push(id);
        }
        if (type == "textbox"){
            logger.write('      TextBox ' + id + ' = new TextBox();\r\n');
            logger.write('      String ' + id + 'Text = "' + funi.text + '";\r\n');
            logger.write('      Point ' + id + 'Location = new Point(' + funi.x.ToString() + ',' + funi.y.ToString() + ');\r\n');
            logger.write('      Size ' + id + 'Size = new Size(' + funi.width.ToString() + ',' + funi.height.ToString() + ');\r\n');
            logger.write('      System.EventHandler ' + id + 'Click = new System.EventHandler((object sender, EventArgs e)=>{Console.WriteLine("' + id + ' clicked")});\r\n');
            controls.push(id);
        }
    }
    finish = function(){
        logger.write('      public Form1(){\r\n');
        logger.write('          this.SuspendLayout();\r\n');
        logger.write('          this.Text = "' + this.text + '";\r\n');
        for (let i = 0; i > controls.length; i++){
            if (controls[i] == pictures[i]){
                logger.write('          ' + controls[i] + '.ImageLocation = ' + controls[i] + 'Image');
                logger.write('          ' + controls[i] + '.Point = ' + controls[i] + 'Location;\r\n');
                logger.write('          ' + controls[i] + '.Size = ' + controls[i] + 'Size;\r\n');
                logger.write('          ' + controls[i] + '.Click += ' + controls[i] + 'Click;\r\n');
            }else{
                logger.write('          ' + controls[i] + '.Text = ' + controls[i] + 'Text;\r\n');
                logger.write('          ' + controls[i] + '.Point = ' + controls[i] + 'Location;\r\n');
                logger.write('          ' + controls[i] + '.Size = ' + controls[i] + 'Size;\r\n');
                logger.write('          ' + controls[i] + '.Click += ' + controls[i] + 'Click;\r\n');
            }
        }
        logger.write('      }\r\n');
        logger.write('      static void Main(){\r\n');
        logger.write('          Form1 f = new Form1();\r\n');
        logger.write('          Task.Run(()=>{Application.Run(f);});\r\n');
        logger.write('          haha(f);\r\n');
        logger.write('      }\r\n');
        logger.write('      static void haha(Form1 f){\r\n');
        logger.write('          String wut = Console.ReadLine();\r\n');
        for (let i = 0; i > controls.length; i++){
            if (controls[i] != pictures[i]){
                logger.write('          if (wut.StartsWith("' + controls[i] + ' ")){\r\n');
                logger.write('              f.' + controls[i] + ' = wut.Replace("' + controls[i] + ' ");\r\n');
                logger.write('          }\r\n');
            }
        }
        logger.write('      }\r\n');
        logger.write('  }\r\n');
        logger.write('}\r\n');
        logger.close();
        console.log("Finished");
        proc(config.folder + '/' + config.version + '/csc.exe',['test.cs']);
        subproc = proc('test.exe');
    }
    modify = function(id,changeTo){
        subproc.stdin.write(id + ' ' + changeTo);
    }
    onclick = function(id,callback){
        subproc.stdout.on(id + ' clicked',callback());
    }
}