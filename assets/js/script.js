/*==========================================================
 VATS GLOBAL LOGISTICS
 Main JavaScript
 Version : 2.0
==========================================================*/

"use strict";

/*==========================================================
DOM READY
==========================================================*/

document.addEventListener("DOMContentLoaded", function () {

    initStickyNavbar();
    initBackToTop();
    initSmoothScroll();
    initScrollReveal();
    initCertificateFinder();
    initMobileMenu();
    initCurrentYear();
    initProgressBar();
    initWhatsappPulse();
    initCounters();

});


/*==========================================================
STICKY NAVBAR
==========================================================*/

function initStickyNavbar() {

    const navbar = document.querySelector(".custom-navbar");

    if (!navbar) return;

    window.addEventListener("scroll", function () {

        if (window.scrollY > 80) {

            navbar.classList.add("shadow");

            navbar.style.padding = "10px 0";

        } else {

            navbar.classList.remove("shadow");

            navbar.style.padding = "18px 0";

        }

    });

}


/*==========================================================
BACK TO TOP
==========================================================*/

function initBackToTop() {

    const button = document.getElementById("backToTop");

    if (!button) return;

    window.addEventListener("scroll", function () {

        if (window.scrollY > 500) {

            button.style.display = "flex";

        } else {

            button.style.display = "none";

        }

    });

    button.addEventListener("click", function () {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

}


/*==========================================================
SMOOTH SCROLL FOR ANCHOR LINKS
==========================================================*/

function initSmoothScroll() {

    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(function (link) {

        link.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth"

            });

        });

    });

}


/*==========================================================
ACTIVE NAVIGATION LINK
==========================================================*/

(function setActiveNavLink() {

    const currentPage = window.location.pathname.split("/").pop();

    document.querySelectorAll(".navbar-nav .nav-link").forEach(function (link) {

        const href = link.getAttribute("href");

        if (href === currentPage) {

            link.classList.add("active");

        }

    });

})();


/*==========================================================
SCROLL REVEAL ANIMATIONS
==========================================================*/

function initScrollReveal() {

    const elements = document.querySelectorAll(

        ".service-card, .feature-card, .country-card, .step-box, .testimonial-card, .document-list"

    );

    if (!elements.length) return;

    const observer = new IntersectionObserver(function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    }, {

        threshold: 0.20

    });

    elements.forEach(function (element) {

        observer.observe(element);

    });

}


/*==========================================================
COUNTER ANIMATION
==========================================================*/

function initCounters() {

    const counters = document.querySelectorAll(".counter");

    if (!counters.length) return;

    const observer = new IntersectionObserver(function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                const counter = entry.target;

                const target = parseInt(counter.dataset.target);

                let value = 0;

                const step = Math.ceil(target / 100);

                const timer = setInterval(function () {

                    value += step;

                    if (value >= target) {

                        value = target;

                        clearInterval(timer);

                    }

                    counter.textContent = value.toLocaleString();

                }, 20);

                observer.unobserve(counter);

            }

        });

    });

    counters.forEach(function (counter) {

        observer.observe(counter);

    });

}


/*==========================================================
CERTIFICATE FINDER
==========================================================*/

function initCertificateFinder() {

    const select = document.getElementById("countrySelect");

    const result = document.getElementById("certificateResult");

    if (!select || !result) return;

    const certificates = {

        "Angola": "CNCA",

        "Benin": "BESC",

        "Burkina Faso": "ECTN",

        "Burundi": "ECTN",

        "Cameroon": "BESC",

        "Central African Republic": "ECTN",

        "Chad": "ECTN",

        "Congo": "ECTN",

        "DR Congo": "FERI",

        "Djibouti": "ECTN",

        "Gabon": "BIETC",

        "Ghana": "CTN",

        "Guinea": "ECTN",

        "Ivory Coast": "BSC",

        "Liberia": "CTN",

        "Libya": "ECTN",

        "Madagascar": "BSC",

        "Mali": "BESC",

        "Niger": "ECTN",

        "Senegal": "BSC",

        "Sierra Leone": "CTN",

        "South Sudan": "ECTN",

        "Sudan": "ECTN",

        "Togo": "ECTN"

    };

    select.addEventListener("change", function () {

        const country = this.value;

        if (country === "" || !certificates[country]) {

            result.innerHTML = "";

            return;

        }

        result.innerHTML =

            `

        <div class="alert alert-primary mt-4">

            <h5 class="mb-3">

                Required Certificate

            </h5>

            <h3>

                ${certificates[country]}

            </h3>

            <p class="mb-4">

                Our specialists will assist you in obtaining this certificate quickly and accurately.

            </p>

            <a href="applyonline.html" class="btn btn-warning" style="color: #000000 !important; font-weight: 600;">

                Apply Now

            </a>

        </div>

        `;

    });

}


/*==========================================================
MOBILE MENU AUTO CLOSE
==========================================================*/

function initMobileMenu() {

    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

    const navCollapse = document.querySelector(".navbar-collapse");

    if (!navCollapse) return;

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            if (navCollapse.classList.contains("show")) {

                const bsCollapse = bootstrap.Collapse.getInstance(navCollapse);

                if (bsCollapse) {

                    bsCollapse.hide();

                }

            }

        });

    });

}


/*==========================================================
WHATSAPP PULSE ANIMATION
==========================================================*/

function initWhatsappPulse() {

    const whatsapp = document.querySelector(".whatsapp-float");

    if (!whatsapp) return;

    setInterval(function () {

        whatsapp.classList.add("pulse");

        setTimeout(function () {

            whatsapp.classList.remove("pulse");

        }, 1000);

    }, 5000);

}


/*==========================================================
SCROLL PROGRESS BAR
==========================================================*/

function initProgressBar() {

    const progress = document.getElementById("scrollProgress");

    if (!progress) return;

    window.addEventListener("scroll", function () {

        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;

        const progressHeight = (window.pageYOffset / totalHeight) * 100;

        progress.style.width = progressHeight + "%";

    });

}


/*==========================================================
CURRENT YEAR
==========================================================*/

function initCurrentYear() {

    const year = document.getElementById("currentYear");

    if (year) {

        year.textContent = new Date().getFullYear();

    }

}


/*==========================================================
LAZY IMAGE LOADING
==========================================================*/

(function initLazyImages() {

    const lazyImages = document.querySelectorAll("img[data-src]");

    if (!lazyImages.length) return;

    const imageObserver = new IntersectionObserver(function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                const img = entry.target;

                img.src = img.dataset.src;

                img.removeAttribute("data-src");

                imageObserver.unobserve(img);

            }

        });

    });

    lazyImages.forEach(function (image) {

        imageObserver.observe(image);

    });

})();


/*==========================================================
FORM VALIDATION
==========================================================*/

(function initFormValidation() {

    document.querySelectorAll("form").forEach(function (form) {

        form.addEventListener("submit", function (e) {

            const required = form.querySelectorAll("[required]");

            let valid = true;

            required.forEach(function (input) {

                if (input.value.trim() === "") {

                    valid = false;

                    input.classList.add("is-invalid");

                } else {

                    input.classList.remove("is-invalid");

                }

            });

            if (!valid) {

                e.preventDefault();

            }

        });

    });

})();


/*==========================================================
UTILITY FUNCTIONS
==========================================================*/

function scrollTopSmooth() {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}


/*==========================================================
END OF FILE
==========================================================*/