let loader = document.querySelector(".preloader-body")
    let app = document.getElementById("content");
    app.style.display = "none";
    document.body.onload = function() {
    setTimeout(function() {
        app.style.display = "block";
        if (!loader.classList.contains('none')) {
            loader.classList.add("none");
        }
    }, 1000);
}