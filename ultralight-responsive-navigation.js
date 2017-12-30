/**
 * Shows Menu
 */
function ulnShowMenu(el) {
    el.style.display = "block";
}

/**
 * Hide Menu
 */
function ulnHideMenu(el) {
    el.querySelectorAll("ul:not(.menu)").forEach(ulnHideMenu);
    el.style.display = "none";
}
/**
 * Animate Element display in
 */
function ulnElementToggle(el) {
    if (isHidden(el)) {
        ulnShowMenu(el);
    } else {
        ulnHideMenu(el);
    }
}
/**
 * Animate Element using animate.css
 */
function ulnAnim(el, efn, efo) {
    el.classList.remove(efo);
    el.classList.add(efn);
}

//Where el is the DOM element you'd like to test for visibility
function isHidden(el) {
    var style = window.getComputedStyle(el);
    return (style.display === 'none');
}


var lis = document.querySelectorAll(".menu:not(.hover) li");
lis.forEach(ulnMenu);
/**
 * Add click Event listener to Menus
 */
function ulnMenu(li, i) {
    var ul = li.querySelector("ul");
    if (ul != null) {
        var anc = li.querySelector("a");
        anc.addEventListener("click", function (e) {
            e.preventDefault();
            ulnElementToggle(ul);
        });
    }
}

var tgls = document.querySelectorAll("[data-toggle]");
tgls.forEach(ulnToggle);

/**
 * Element Toggle
 */
function ulnToggle(el, i) {
    var tglId = el.getAttribute("data-toggle");
    el.addEventListener("click", function (e) {
        e.preventDefault();
        var tglEl = document.getElementById(tglId);
        ulnElementToggle(tglEl);
    });
}
