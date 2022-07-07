// import { sum } from "./modules/functions";
// console.log('log');

const element = document.querySelector('.broadcasts__select-element');

const choices = new Choices(element, {
//   placeholderValue: "Материал",
  searchEnabled: false,
  itemSelectText: '',
  shouldSort: false,
});