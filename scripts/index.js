let home = document.getElementById("Home");
let areas = document.getElementById("Areas");
let culture = document.getElementById("Culture");
let news = document.getElementById("News");
let joinUs = document.getElementById("JoinUs");
let all = [home, areas, culture, news, joinUs];

const currentUrl = window.location.href;
console.log(currentUrl);
all.forEach(item => {
    if (!!item) {
        if (item.href === currentUrl) {
            
            console.log(home.href);
            item.classList.add('SelectedNavItem');
        }
        else {
            item.classList.remove("SelectedNavItem");
        }
    }
});

