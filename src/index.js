import * as bootstrap from "bootstrap";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import WOW from "wow.js";
import "@fortawesome/fontawesome-free/js/all.js";

import "./assets/sass/style.scss";

const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    spaceBetween: 200,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

new WOW().init();

document
    .getElementById("video-thumbnail-container")
    .addEventListener("click", function () {
        document.getElementById("video-thumbnail").style.display = "none";
        document.getElementById("play-button").style.display = "none";
        document.getElementById("video-container").style.display = "block";
        document.getElementById("video-player").play();
    });
