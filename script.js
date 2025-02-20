const {writeDb} = require('./dataBaseFunc')

function onButtonClick() {
    var value = document.getElementById(input).value;
    var data = {color: value};
    writeDb(data);
}