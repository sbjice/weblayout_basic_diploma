// import { sum } from "./modules/functions";
// console.log('log');

import Swiper from 'swiper/bundle';
import JustValidate from 'just-validate';

document.addEventListener('DOMContentLoaded', () => {

    const headerSearchButton = document.querySelector(".header__search-button");
    const headerSearchInput = document.querySelector(".header__search-input");
    headerSearchButton.addEventListener('click', function (event) {
        headerSearchInput.classList.toggle("header__search-input_visible");
        headerSearchInput.classList.toggle("header__search-input_hidden");

    });

    const element = document.querySelector('.broadcasts__select-element');

    const choices = new Choices(element, {
        searchEnabled: false,
        itemSelectText: '',
        shouldSort: false,
    });

    $(function () {
        $("#accordion").accordion({
            collapsible: true,
            header: "a.guests__guests-type-header",
            heightStyle: "content",
            create: function (event, ui) {
                $("#accordionFAQ").attr("tabIndex", "0");
            }
        });
        $("#accordion").accordion("option", "icons", null);
    });

    //  Секция Подкастов

    const podcastsLink = document.querySelector('.podcasts__link');
    const podcastsList = document.querySelector('.podcasts__list');
    let podcastsItems = document.querySelectorAll('.podcasts__item');
    let podcastsItemsHidden = document.querySelectorAll('.podcasts__item_phone-hidden');
    let copied = false;
    let shown = false;

    podcastsLink.addEventListener('click', event => {
        event.preventDefault();
        if (window.screen.width < 767) {
            if (!shown) {
                podcastsItemsHidden = document.querySelectorAll('.podcasts__item_phone-hidden')
                podcastsItemsHidden.forEach(item => {
                    item.classList.remove('podcasts__item_phone-hidden');
                });
                shown = true;
                return;
            }
            if (!copied) {
                podcastsItems = document.querySelectorAll('.podcasts__item');
                podcastsItems.forEach(item => {
                    const elem = item.cloneNode(true);
                    podcastsList.append(elem);
                });
                copied = true;
            }
        } else {
            if (!copied) {
                podcastsItems = document.querySelectorAll('.podcasts__item');
                podcastsItems.forEach(item => {
                    const elem = item.cloneNode(true);
                    podcastsList.append(elem);
                });
                podcastsItems = document.querySelectorAll('.podcasts__item');
                if (podcastsItems.length > 8) {
                    for (let i = 0; i < podcastsItems.length; i += 1) {
                        podcastsItems[i].classList.toggle('podcasts__item_phone-hidden', i > 3);
                    }
                }
                copied = true;
                if (shown) shown = false;
                return;
            }
        }
    });






    //  Секция Гостей

    const guestLinks = document.querySelectorAll('.guests__guest-link');
    const guestNames = document.querySelectorAll('.guests__guest-name');
    const guestSocials = document.querySelectorAll('.guests__socials-list');
    const guestDescriptions = document.querySelectorAll('.guests__guest-description');
    const guestAirLinks = document.querySelectorAll('.guests__guest-air-link');

    function hideElements() {
        guestNames.forEach(item => item.classList.add('hidden'));
        guestSocials.forEach(item => item.classList.add('hidden'));
        guestAirLinks.forEach(item => item.classList.add('hidden'));
        guestDescriptions.forEach(item => item.classList.add('hidden'));
    }

    guestLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            guestLinks.forEach(item => {
                item.classList.remove('guests__guest-link_active');
            });
            hideElements();
            event.preventDefault();
            event.currentTarget.classList.add('guests__guest-link_active');
            const path = event.currentTarget.dataset.path;
            // console.log(path);

            const guestImage = document.querySelector('.guests__guest-image');
            guestImage.classList = ['guests__guest-image'];
            guestImage.classList.add('guests__guest-image_' + path);

            guestNames.forEach(item => {
                if (item.dataset.target === path) item.classList.remove('hidden')
            });

            guestSocials.forEach(item => {
                if (item.dataset.target === path) item.classList.remove('hidden')
            });

            guestDescriptions.forEach(item => {
                if (item.dataset.target === path) item.classList.remove('hidden')
            });

            guestAirLinks.forEach(item => {
                if (item.dataset.target === path) item.classList.remove('hidden')
            });
        });
    });

    guestLinks[5].click();



    // Секция О нас

    const swiper = new Swiper('.swiper', {
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            // when window width is >= 1349px
            1349: {
                slidesPerView: 'auto',
                spaceBetween: 30,
            },

            // when window width is >= 300px
            765: {
                spaceBetween: 30,
            },
            // when window width is >= 300px
            300: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
        }
    });

    const validation = new JustValidate('#about__form', {
        errorFieldCssClass: 'input-error',
    });


    validation
        .addField('#about__form-textarea', [{
                rule: 'required',
                errorMessage: 'Введите текст',
            }
        ])
        .addField('#about__form-name-input', [{
                rule: 'required',
                errorMessage: 'Введите имя',
            }
        ])
        .addField('#about__form-email-input', [{
                rule: 'required',
                errorMessage: 'Введите email',
            },
            {
                rule: 'email',
                errorMessage: 'Некорректный email',
            },
        ])
        .addField('#about__form-checkbox', [{
                rule: 'required',
                errorMessage: 'Необходимо согласие на обработку данных',
            }
        ])





    // Показ/скрытие меню по нажатию на бургер
    const burgerButton = document.querySelector('.header__burger-button');
    const headerMenu = document.querySelector('.header__menu');
    const heaerMenuCloseButton = document.querySelector('.header__menu-close-button');
    const body = document.body;

    burgerButton.addEventListener('click', (e) => {
        e.preventDefault();
        headerMenu.classList.toggle('header__menu_visible', true);
        body.classList.toggle('no-overflow', true);
    });

    heaerMenuCloseButton.addEventListener('click', (e) => {
        e.preventDefault();
        headerMenu.classList.toggle('header__menu_visible', false);
        body.classList.toggle('no-overflow', false);
    });

    addEventListener("resize", (e) => {
        if (screen.width > 1020) {
            headerMenu.classList.toggle('header__menu_visible', false);
            body.classList.toggle('no-overflow', false);

        }
    });

    const playerButton = document.querySelector('.header__links-link');
    const playerList = document.querySelector('.header__links-list');
    const headerBottom = document.querySelector('.header__nav-bottom');

    // console.log(playerList);
    playerButton.addEventListener('click', (e) => {
        e.preventDefault();
        // console.log('player button clicked');
        playerList.classList.toggle('header__links-list_visible');
        headerBottom.classList.toggle('header__nav-bottom_gray');

        playerButton.classList.toggle('header__links-link_open');

        // burgerButton.classList.toggle('header-top__burger-button_active');
    });



});