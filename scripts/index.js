let home = document.getElementById("Home");
let areas = document.getElementById("Areas");
let culture = document.getElementById("Culture");
let news = document.getElementById("News");
let joinUs = document.getElementById("JoinUs");
let all = [home, areas, culture, news, joinUs];

const currentUrl = window.location.href;

all.forEach(item => {
    if (!!item) {
        if (item.href === currentUrl) {
            item.classList.add('SelectedNavItem');
        }
        else {
            item.classList.remove("SelectedNavItem");
        }
    }
});

