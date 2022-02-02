const currentPath = location.pathname;
console.log(currentPath);

const content = 'content';

let page = currentPath.split("/")[-1];

console.log(page);

function load_content(page) {
    document.getElementById(content).innerHTML='<object type="text/html" data="../' + page + '"></object>'
}