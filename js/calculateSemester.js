const toChange = document.getElementById("finished");

let month = new Date().getMonth();
let year = new Date().getFullYear();
if (month >= 5 && year === 2022) {
    toChange.innerText = "4";
    document.getElementById("js-image").innerHTML = '<a title="Ramaksoud2000 via Chris Williams, Public domain, via Wikimedia Commons" href="https://commons.wikimedia.org/wiki/File:JavaScript-logo.png"><img class="lang-logo" alt="JavaScript-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/512px-JavaScript-logo.png"></a>';
    if (month >= 5 && month < 9) {
        document.getElementById("half-way").innerHTML = "";
    } else if (month >= 9) {
        document.getElementById('current-semester').innerText = "5";
    }
}

console.log(month);