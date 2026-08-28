/*==========================================================
 VATS GLOBAL LOGISTICS
 Main JavaScript (Fallback)
 Version : 2.0
==========================================================*/

"use strict";

/*==========================================================
DOM READY
==========================================================*/

document.addEventListener("DOMContentLoaded", function () {

    initBackToTop();
    initSmoothScroll();
    initMobileMenu();
    initCurrentYear();
    initProgressBar();
    initWhatsappPulse();

});


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
CURRENT YEAR
==========================================================*/

function initCurrentYear() {

    const year = document.getElementById("currentYear");

    if (year) {

        year.textContent = new Date().getFullYear();

    }

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
END OF FILE
==========================================================*/