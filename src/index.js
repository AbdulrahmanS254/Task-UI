import * as bootstrap from "bootstrap";
import Swiper from "swiper/bundle";
import "swiper/css/bundle";
import WOW from 'wow.js';
import "@fortawesome/fontawesome-free/js/all.js";

import "./assets/sass/style.scss";

const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    spaceBetween: 200,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },

});

new WOW().init();