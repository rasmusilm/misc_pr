import loadHTML from '../utilities/loadHTML.js'
const template = await loadHTML('/content/templates/navbar.html', import.meta.url);
document.getElementById('name').innerHTML = template;