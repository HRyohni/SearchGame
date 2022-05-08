const { readlink } = require("fs");

function readTextFile() {
    exists = false;
    edittext = document.getElementById("edittext");
    rj = document.getElementById("rj");
    file = "words.txt";
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function() {
        if (rawFile.readyState === 4) {
            if (rawFile.status === 200 || rawFile.status == 0) {
                var allText = rawFile.responseText;
                //alert(allText);
                words = allText.split('\n');
                console.log(words);

                words.forEach(e => {

                    if (e.toLowerCase() == edittext.value.toLowerCase() && e != "") {
                        console.log("rijec postoji");
                        rj.innerHTML = "word exsists";
                        rj.style.color = "green";

                        exists = true;
                    }

                });
                if (exists == false) {
                    rj.innerHTML = "word doesn't exist";
                    rj.style.color = "red";
                    element.style.WebkitAnimation = "shake .5s";
                    element.style.animation = "shake .5s";
                }
            }
        }
    }
    rawFile.send(null);
}