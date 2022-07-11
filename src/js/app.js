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
            header: "a",
            heightStyle: "content",
            create: function (event, ui) {
                $("#accordionFAQ").attr("tabIndex", "0");
            }
        });
        $("#accordion").accordion("option", "icons", null);
    });
})