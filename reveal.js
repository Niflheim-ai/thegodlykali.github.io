function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = window.innerHeight - 150; // Adjust this value

        if (elementTop < elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

function throttleScroll() {
    if (!throttleScroll.timer) {
        throttleScroll.timer = setTimeout(function () {
            throttleScroll.timer = null;
            reveal();
        }, 200);
    }
}

window.addEventListener("scroll", throttleScroll);

// To check the scroll position on page load
reveal();