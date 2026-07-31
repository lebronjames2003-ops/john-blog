const menuButton = document.getElementById("menuButton");
const navigation = document.getElementById("navigation");

if (menuButton && navigation) {

    menuButton.addEventListener("click", function () {
        navigation.classList.toggle("active");
    });

    const navigationLinks = navigation.querySelectorAll("a");

    navigationLinks.forEach(function (link) {

        link.addEventListener("click", function () {
            navigation.classList.remove("active");
        });

    });

}

document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(
        'a[href]:not([href^="#"]):not([target="_blank"])'
    );

    links.forEach(function (link) {
        link.addEventListener("click", function (event) {
            const destination = link.getAttribute("href");

            if (
                !destination ||
                destination.startsWith("http") ||
                destination.startsWith("mailto:") ||
                destination.startsWith("tel:")
            ) {
                return;
            }

            event.preventDefault();

            // Start the fade-out transition
            document.body.classList.add("page-exit");

            // Open the page after the transition
            setTimeout(function () {
                window.location.href = destination;
            }, 350);
        });
    });
});

window.addEventListener("pageshow", function () {
    document.body.classList.remove("page-exit");
});
