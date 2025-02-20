const {writeDb, readDb} = require('./dataBaseFunc')

function onButtonClick() {
    var value = document.getElementById(input).value;
    var data = {text: value};
    writeDb(data);
    document.getElementById("text").innerHTML = readDb()
}