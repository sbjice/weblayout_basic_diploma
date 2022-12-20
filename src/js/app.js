// import { sum } from './modules/functions';
// console.log('log');

import Swiper from 'swiper/bundle';
import JustValidate from 'just-validate';

document.addEventListener('DOMContentLoaded', () => {

    const body = document.body;

    // Настройка модального окна

    // Настройка валидации формы    

    const modalValidation = new JustValidate('#modal__form', {
        errorFieldCssClass: 'input-error',
    });


    modalValidation
        .addField('#modal__form-login-input', [{
            rule: 'required',
            errorMessage: 'Введите логин',
        }])
        .addField('#modal__form-password-input', [{
            rule: 'required',
            errorMessage: 'Введите пароль',
        }]);


    // Настройка хедера

    // Открытие/закрытие модального окна
    const headerButton = document.querySelector('.header__button');
    const modalCloseButton = document.querySelector('.modal__close');
    const modal = document.querySelector('.modal');
    const overlay = document.querySelector('.overlay');

    headerButton.addEventListener('click', () => {
        overlay.classList.add('overlay_shown');
        body.classList.add('no-scroll');
    });

    modalCloseButton.addEventListener('click', () => {
        overlay.classList.remove('overlay_shown');
        body.classList.remove('no-scroll');
    });

    overlay.addEventListener('click', () => {
        overlay.classList.remove('overlay_shown');
        body.classList.remove('no-scroll');
    });

    modal.addEventListener('click', (e) => {
        e.stopPropagation();
    });


    // Показ/скрытие поля поиска
    const headerSearchButton = document.querySelector('.header__search-button');
    const headerSearchInput = document.querySelector('.header__search-input');
    headerSearchButton.addEventListener('click', function (event) {
        headerSearchInput.classList.toggle('header__search-input_visible');
        headerSearchInput.classList.toggle('header__search-input_hidden');
        headerSearchButton.classList.toggle('header__search-button_opened');

    });


    // Старт/пауза программ
    const headerPrograms = document.querySelectorAll('.header__button_bottom');
    console.log(headerPrograms);
    headerPrograms.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const playIcon = e.currentTarget.querySelector('.header__play_playing');
            const pauseIcon = e.currentTarget.querySelector('.header__play_paused');
            console.log(playIcon, pauseIcon);


            playIcon.classList.toggle('header__play_playing_hidden');
            pauseIcon.classList.toggle('header__play_paused_shown');
        });
    });


    //  Секция Подкастов

    // Настройка включения/выключения отдельного подкаста

    let podcastStartButtons = document.querySelectorAll('.podcasts__podcast-play');

    // Функция конфигурирования кнопки
    // TODO: сделать универсальной с возможностью изменения классов конфигурируемых объектов
    function configPodcastsPlayButton(e, playClass = 'podcasts__podcast-play-icon',
        pauseClass = 'podcasts__podcast-play-icon_paused',
        playHideClass = 'podcasts__podcast-play-icon_hidden',
        pauseShowClass = 'podcasts__podcast-play-icon_paused_shown') {
        e.preventDefault();
        const playIcon = e.currentTarget.querySelector(`.${playClass}`);
        const pauseIcon = e.currentTarget.querySelector(`.${pauseClass}`);

        playIcon.classList.toggle(`${playHideClass}`);
        pauseIcon.classList.toggle(`${pauseShowClass}`);
    }

    podcastStartButtons.forEach(btn => {
        btn.addEventListener('click', configPodcastsPlayButton);
    });


    function configPodcastLikeButton(e) {
        e.preventDefault();
        e.currentTarget.classList.toggle('podcasts__podcast-likes_active');
    }

    let podcastLikeButtons = document.querySelectorAll('.podcasts__podcast-likes');
    podcastLikeButtons.forEach(btn => {
        btn.addEventListener('click', configPodcastLikeButton);
    });

    function configPodcastShareButton(e) {
        e.preventDefault();
        e.currentTarget.classList.toggle('podcasts__podcast-shares_active');
    }

    let podcastShareButtons = document.querySelectorAll('.podcasts__podcast-shares');
    podcastShareButtons.forEach(btn => {
        btn.addEventListener('click', configPodcastShareButton);
    });


    function reconfigStatsButtons() {
        podcastStartButtons = document.querySelectorAll('.podcasts__podcast-play');
        podcastStartButtons.forEach(btn => {
            btn.removeEventListener('click', configPodcastsPlayButton);
            btn.addEventListener('click', configPodcastsPlayButton);
        });

        podcastLikeButtons = document.querySelectorAll('.podcasts__podcast-likes');
        podcastLikeButtons.forEach(btn => {
            btn.removeEventListener('click', configPodcastLikeButton);
            btn.addEventListener('click', configPodcastLikeButton);
        });

        podcastShareButtons = document.querySelectorAll('.podcasts__podcast-shares');
        podcastShareButtons.forEach(btn => {
            btn.removeEventListener('click', configPodcastShareButton);
            btn.addEventListener('click', configPodcastShareButton);
        });
    }


    // Настройка кнопки "подгрузки подкастов"

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

                reconfigStatsButtons();
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

                reconfigStatsButtons();
                copied = true;
                if (shown) shown = false;
                return;
            }
        }
    });




    // Настройка селекта в Программах
    const element = document.querySelector('.broadcasts__select-element');

    const choices = new Choices(element, {
        searchEnabled: false,
        itemSelectText: '',
        shouldSort: false,
    });

    $(function () {
        $('#accordion').accordion({
            collapsible: true,
            header: 'a.guests__guests-type-header',
            heightStyle: 'content',
            create: function (event, ui) {
                $('#accordionFAQ').attr('tabIndex', '0');
            }
        });
        $('#accordion').accordion('option', 'icons', null);
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
        }])
        .addField('#about__form-name-input', [{
            rule: 'required',
            errorMessage: 'Введите имя',
        }])
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
        }])





    // Показ/скрытие меню по нажатию на бургер
    const burgerButton = document.querySelector('.header__burger-button');
    const headerMenu = document.querySelector('.header__menu');
    const heaerMenuCloseButton = document.querySelector('.header__menu-close-button');


    burgerButton.addEventListener('click', (e) => {
        e.preventDefault();
        headerMenu.classList.toggle('header__menu_visible', true);
        body.classList.toggle('no-scroll', true);
    });

    heaerMenuCloseButton.addEventListener('click', (e) => {
        e.preventDefault();
        headerMenu.classList.toggle('header__menu_visible', false);
        body.classList.toggle('no-scroll', false);
    });

    addEventListener('resize', (e) => {
        if (screen.width > 1020) {
            headerMenu.classList.toggle('header__menu_visible', false);
            body.classList.toggle('no-overflow', false);

        }
    });

    const playerButton = document.querySelector('.header__links-link');
    const playerList = document.querySelector('.header__links-list');
    const headerBottom = document.querySelector('.header__nav-bottom');

    playerButton.addEventListener('click', (e) => {
        e.preventDefault();
        playerList.classList.toggle('header__links-list_visible');
        headerBottom.classList.toggle('header__nav-bottom_gray');
        playerButton.classList.toggle('header__links-link_open');
    });



});