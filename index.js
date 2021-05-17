import Dashboard from "./views/Dashboard.js";
import Services from "./views/Services.js";
import Contact from "./views/Contact.js";


const router = async () => {
    //potential paths/routes if a match
    const routes = [
        { path: "/", view: Dashboard },
        { path: "/services", view: Services },
        { path: "/contact", view: Contact },
    ];

    const potentialMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        };
    });

    let match = potentialMatches.find(potentialMatch => potentialMatch.isMatch);

    if(!match) {//Can put a 404 for this.  Instead of going home from non matches
        match = {
            route: routes[0],
            isMatch: true
        }
    }

    //Instance of the DashBoard class and runs the method on the classes prototype which has the rendered html view
    const view = new match.route.view(); 
    document.getElementById("app").innerHTML = await view.getHtml();
}
//----

//keeps the page from refreshing when changing views/pages. url = e.target.href of an element with 'data-link' att.
function navigateTo(url) {
    history.pushState(null, null, url);
    router();
}

// keeps the page from refreshing when changing views/pages. Router is called so the javascript/view is also run.
document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", (e) => {
        if(e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    })
    router();
})

window.addEventListener("popstate", router); // to navagate through history/back button. Rerun the router function to get the view
//

const mobileNavOpen = document.getElementById("mNavOpen");
const mobileNavClose = document.getElementById("mNavClose");
const mobileLinks = document.querySelector('.mobileLinks');

mobileNavOpen.addEventListener("click", () => {
    mobileNavOpen.style.display = "none";
    mobileNavClose.style.display = "flex";
    mobileLinks.style.display = "flex";
})

mobileNavClose.addEventListener("click", closingNav);

function closingNav() {
    mobileNavOpen.style.display = "flex";
    mobileNavClose.style.display = "none";
    mobileLinks.style.display = "none";
}



window.addEventListener("resize", closingNav);
