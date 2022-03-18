let button = document.getElementById("requester");

button.addEventListener("click", getInfo);

let info = {};

function getInfo() {
    let data = fetch("/data/inf.json")
        .then(resp => resp.json())
        .then(inf => info = inf).then(d => writeInfo(info));
}

function writeInfo(data) {
    console.log(data)
    let target = document.querySelector(".target")
    target.innerHTML = data.data;
}