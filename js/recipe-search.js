(function () {
"use strict";

const search = document.getElementById("recipe-search");
if (!search) return;

const normalize = text => text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
const recipes = Array.from(document.querySelectorAll(".recipe-item"), element => ({
element,
text: normalize(Array.from(element.querySelectorAll("h2, li"), node => node.textContent).join(" "))
}));
const count = document.getElementById("recipe-count");
const empty = document.getElementById("recipe-empty");

function filterRecipes() {
const words = normalize(search.value).trim().split(/\s+/).filter(Boolean);
let visible = 0;
recipes.forEach(recipe => {
const matches = words.every(word => recipe.text.includes(word));
recipe.element.hidden = !matches;
if (matches) visible += 1;
});
count.textContent = words.length
? `${visible} of ${recipes.length} recipes`
: `${recipes.length} recipes`;
empty.hidden = visible !== 0;
}

search.addEventListener("input", filterRecipes);
document.getElementById("recipe-clear").addEventListener("click", () => {
search.value = "";
filterRecipes();
search.focus();
});
document.querySelector(".recipe-search").hidden = false;
filterRecipes();
}());
