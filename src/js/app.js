// import { sum } from "./modules/functions";
// console.log('log');

document.addEventListener('DOMContentLoaded', () => {

    const headerSearchButton = document.querySelector(".header-top__search-button");
    const headerSearchInput = document.querySelector(".header-top__search-input");
    headerSearchButton.addEventListener('click', function (event) {
        headerSearchInput.classList.toggle("header-top__search-input_visible");
        headerSearchInput.classList.toggle("header-top__search-input_hidden");

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
    const podcastsItems = document.querySelectorAll('.podcasts__item');
    let copied = false;

    podcastsLink.addEventListener('click', event => {
        if (!copied) {
            event.preventDefault();
            podcastsItems.forEach(item=> {
                const elem = item.cloneNode(true);
                podcastsList.append(elem);
            });
        }
        copied = true;

    })






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
            console.log(path);

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


    // Показ/скрытие меню по нажатию на бургер
    const burgerButton = document.querySelector('.header-top__burger-button');
    const headerTopNavList = document.querySelector('.header-top__nav-list');
    burgerButton.addEventListener('click', (e) => {
        e.preventDefault();
        headerTopNavList.classList.toggle('header-top__nav-list_visible');
        burgerButton.classList.toggle('header-top__burger-button_active')
    });

    const playerButton = document.querySelector('.header-bottom__links-mock');
    const playerList = document.querySelector('.header-bottom__links-list');
    playerButton.addEventListener('click', (e) => {
        e.preventDefault();
        playerList.classList.toggle('header-bottom__links-list_visible');
        // burgerButton.classList.toggle('header-top__burger-button_active')
    });

});