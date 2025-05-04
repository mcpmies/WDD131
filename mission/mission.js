const themeSelector = document.querySelector("select");

function changeTheme() {

if (themeSelector.value === "dark") {
    const body = document.querySelector("body");
    body.classList.add("dark");
    document.getElementById("logo").src = "byui-logo_white.png";
} else {
    const body = document.querySelector("body");
    body.classList.remove("dark");
    document.getElementById("logo").src = "byui-logo_blue.webp";
}
}

themeSelector.addEventListener("change", changeTheme);