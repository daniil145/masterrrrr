document.getElementById("messi").addEventListener("click", () => {
    document.body.style.overflow = "hidden";
    document.getElementById("ronaldo").classList.add("cover-block");
    document.getElementById("police").classList.add("window-position");
});

document.getElementById("ronaldo").addEventListener("click", () => {
    document.body.style.overflow = "visible";
    document.getElementById("ronaldo").classList.remove("cover-block");
    document.getElementById("police").classList.remove("window-position");
});





