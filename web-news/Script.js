window.addEventListener ("scroll", function() {
    var header = this.document.querySelector("header");
    header.classList.toggle ("sticky", window.scrollY > 50)
});

const NavBar = document.getElementById("NavBar");

function showMenu () {
    NavBar.style.left = "-15px";
};

function hideMenu () {
    NavBar.style.left = "-300px";
};

function dropBtn () {
    document.getElementById("dropDown").classList.toggle("show");
}

window.onclick = function(e) {
    if (!e.target.matches(".dropbtn")) {
        var dropDown = document.getElementById("dropDown");
        if (dropDown.classList.contains("show")) {
            dropDown.classList.remove("show");
        }
    }
}