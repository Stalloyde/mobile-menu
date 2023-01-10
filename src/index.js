import _ from 'lodash';
import { createDropDownMenu } from 'stalloyde-menu';
import './style.css';
import content1 from './item1';
import content2 from './item2';
import content3 from './item3';
import content4 from './item4';
import content5 from './item5';
import content6 from './item6';

const menuItems = document.querySelectorAll('.menu-items');
const contentContainer = document.querySelector('.content-container');
const contents = { content1, content2, content3, content4, content5, content6 };

contentContainer.innerHTML = content1;

function deselectItem() {
  menuItems.forEach((item) => item.classList.remove('select'));
}

menuItems.forEach((item) => {
  item.addEventListener('click', () => {
    deselectItem();
    contentContainer.innerHTML = contents[item.id] || 'ERROR';
    item.classList.add('select');
  });
});

createDropDownMenu();
