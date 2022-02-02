
import addContact from "./views/addContact.js";

const router = () => {
    const routes = [
        {path: '/', renderView: addContact},
        {path: '/book-add', renderView: addContact},
        {path: '/author-list', renderView: addContact},
        {path: '/author-add', renderView: addContact}
    ]

    const currentPath = location.pathname;
    console.log(currentPath);
    const defaultRoute = routes[0];

    const route = routes.find(route => route.path === currentPath);

    if (route) {
        const view = route.renderView();
        document.getElementById("app").appendChild(view);
    } else {
        const view = defaultRoute.renderView;
        document.getElementById("app").appendChild(view);
    }

}

export const navigateTo = (path) => {
    history.pushState(null, null, path);
    router();
}

const removeAllChildNodes = (element) => {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}

window.addEventListener('popstate', listener => {
    router();
});

window.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener('click', e => {
        e.preventDefault();
        if (e.target.matches('a')) {
            console.log(e.target.href);
            navigateTo(e.target.href);
        }
    });
    router();
})