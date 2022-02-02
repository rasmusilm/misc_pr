const currentPath = location.pathname;
console.log(currentPath);

const content = 'content';

load_home();

function load_home() {
    document.getElementById("content").innerHTML='<object type="text/html" data="../content/home.html" ></object>';
}

function load_content(page) {
    document.getElementById(content).innerHTML='<object type="text/html" data="../' + page + '"></object>'
}