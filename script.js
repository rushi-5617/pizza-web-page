let share = document.querySelector("#share-icon");
let navSocial = document.querySelector(".social");

share.onclick = () => {
    navSocial.classList.toggle("active");
};

let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navlist");

menu.onclick = () => {
    navbar.classList.toggle("active");
};

document.addEventListener("click", (event) => {
    const isMenuClicked = navbar.contains(event.target) || menu.contains(event.target);
    const isSocialClicked = navSocial.contains(event.target) || share.contains(event.target);

    if (!isMenuClicked) {
        navbar.classList.remove("active");
    }

    if (!isSocialClicked) {
        navSocial.classList.remove("active");
    }
});

window.onscroll = () => {
    navSocial.classList.remove("active");
    navbar.classList.remove("active");
};

const sr = ScrollReveal({
    origin: "left",
    distance: "40px",
    duration: 1000,
    reset: true
});

sr.reveal(`.home, .menu, .services, footer`, {
    interval: 200
});

const navlinks = document.querySelectorAll(".navlist a");
const sections = document.querySelectorAll("section");

function getThreshold() {
    return window.innerWidth <= 768 ? 0.5 : 0.75;
}

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        const sectionId = entry.target.getAttribute("id");
        const navlink = document.querySelector(`.navlist a[href="#${sectionId}"]`);

        if (entry.isIntersecting) {
            navlinks.forEach(links => links.classList.remove("active"));
            navlink && navlink.classList.add("active");
        }
    });
}, { threshold: getThreshold()});

sections.forEach(section => observer.observe(section));