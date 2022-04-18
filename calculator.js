/*
const haha = require('./index.js');
const labela = require('./label.js');
const winForm = new haha("aadfasdf");
const label = new labela("dafds",10,10,40,40);
winForm.add(label,'button','label1')
winForm.finish();
//winForm.onclick('label1',function(){console.log("hi")});

//setTimeout(function(){winForm.modify('label1','haha')},1000);
*/
const winForms = require('./index.js');
const button = require('./button.js');
const textbox = require('./textbox.js');

form = new winForms("Calculator",275,231);
one = new button("1",3,27,62,45);
textbox1 = new textbox("",3,1,268,20);
two = new button("2",71,27,62,45);
three = new button("3",139,27,62,45);
divide = new button("÷",207,27,62,45);
four = new button("4",3,78,62,45);
five = new button("5",71,78,62,45);
six = new button("6",139,78,62,45);
multiply = new button("x",207,78,62,45);
seven = new button("7",3,129,62,45);
eight = new button("8",71,129,62,45);
nine = new button("9",139,129,62,45);
minus = new button("-",207,129,62,45);
plus = new button("+",207,180,62,45);
equal = new button("=",71,180,130,45);
zero = new button("0",3,180,62,45);

form.add(minus,'button','minus');
form.add(plus,'button','plus');
form.add(divide,'button','divide');
form.add(multiply,'button','multiply');
form.add(equal,'button','equal');

form.add(one,'button','one');
form.add(textbox1,'textbox','textbox1');
form.add(two,'button','two');
form.add(three,'button','three');
form.add(four,'button','four');
form.add(five,'button','five');
form.add(six,'button','six');
form.add(seven,'button','seven');
form.add(eight,'button','eight');
form.add(nine,'button','nine');
form.add(zero,'button','zero');

form.finish();
//form.modify('textbox1','1')
//setTimeout(function(){console.log(this.subproc)},1000);