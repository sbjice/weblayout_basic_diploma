// import { sum } from "./modules/functions";
// console.log('log');

document.addEventListener('DOMContentLoaded', () => {

    const element = document.querySelector('.broadcasts__select-element');

    const choices = new Choices(element, {
        //   placeholderValue: "Материал",
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
    const podcastsItems = document.querySelectorAll('.podcasts__item');

    podcastsLink.addEventListener('click', event => {
        event.preventDefault();
        podcastsItems.forEach((item, idx, array) => {
            item.classList.remove('hidden');
            if (idx <= array.length - 3) item.classList.add('podcasts__item-mb');
        });
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

});