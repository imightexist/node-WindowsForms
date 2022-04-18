# How to use
Create a winForms class like this:
<br>
```javascript
  const windowsforms = require('windowsforms');
  const form = new windowsforms();
```
## Sample program
```javascript
  const windowsforms = require('windowsforms');
  const form = new windowsforms({
    text:"Hello world",
    width:100,
    height:100
  });
  form.finish();
```
## Adding components
```javascript
  form.add(class,type,id);
```
## Labels
```javascript
  const windowsforms = require('windowsforms');
  const form = new windowsforms({
    text:"Hello world",
    width:100,
    height:100
  });
  const label = new windowsforms.label({
    text:"Hello world",
    x:78,
    y:78
  }); //you can also add width and height for labels
  form.add(label,'label','label1')
  form.finish();
```
## Buttons
```javascript
  //lmao i am not copying and pasting this help me
  const windowsforms = require('windowsforms')
  const form = new windowsforms({
    text:"Hello world",
    width:100,
    height:100
  });
  const button = new windowsforms.button({
   text:"Hello world",
    x:78,
    y:78
  }); //again, you can also add width and height for buttons and any component
```
## Textbox
```javascript
  //oh wait ctrl c ctrl v is a thing? god damn it
  const windowsforms = require('windowsforms')
  const form = new windowsforms({
    text:"Hello world",
    width:100,
    height:100
  });
  const textbox = new windowsforms.textbox({
   text:"Hello world",
    x:78,
    y:78
  });
```
## Picture
```javascript
  const windowsforms = require('windowsforms')
  const form = new windowsforms({
    text:"Hello world",
    width:100,
    height:100
  });
  const button = new windowsforms.picturebox({
   ImageLocation:"C:/Windows/Web/Wallpaper/0.jpg",
    x:78,
    y:78
  });
```
## Finishing the project
```javascript
  form.add(label,'label','label1')
  form.finish();
```
form.finish() will finish the csharp file and runs it.
## Modifying components after finish()
```javascript
  form.finish();
  form.modify('label1','Goodbye world');
```
This will change the label's text to Goodbye world
## Click events (must be done after using the finish function)
```javascript
  form.onclick('button1',function(){
    form.modify('button1','You clicked me!');
  });
```
First argument is the id of the component, and the second is the function that runs when it is clicked
## For linux...
Install mono and if necessary the mcs compiler. Instead of using require('windowsforms') use require('windowsforms').linux
