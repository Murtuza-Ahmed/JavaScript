"useStrict";

const menuBars = document.getElementById("menu-bars");
const topDiv = document.getElementById("top");
const middleDiv = document.getElementById("middle");
const bottomDiv = document.getElementById("bottom");

menuBars.addEventListener("click", () => {
    topDiv.style("display: none");
});
