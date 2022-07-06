import { DateTime } from './modules/luxon.js';
import Display from './modules/display.js';
import Storage from './modules/storage.js';
import Book from './modules/book.js';

const button = document.getElementById('button');
const title = document.getElementById('title');
const author = document.getElementById('author');

button.addEventListener('click', (e) => {
  e.preventDefault();
  const book = new Book(title.value, author.value);
  Display.addBook(book);
  Storage.addBookStorage(book);
  Display.clearInputFields();
});

document.getElementById('list').addEventListener('click', (e) => {
  Display.removeBook(e.target);
  Storage.removeBookStorage(e.target.parentElement.firstChild.textContent);
});

Display.displayList();

const addNew = document.querySelector('.add-new');
const form = document.querySelector('.form');
const main = document.querySelector('.main');
const showMain = document.querySelector('.show-main');
const showContact = document.querySelector('.show-contact');
const contact = document.querySelector('.contact-section');

const date = document.querySelector('.date');

addNew.addEventListener('click', () => {
  if (!form.classList.contains('active')) {
    contact.classList.remove('active');
    main.classList.add('active');
    form.classList.add('active');
  }
});

showMain.addEventListener('click', () => {
  if (main.classList.contains('active')) {
    contact.classList.remove('active');
    form.classList.remove('active');
    main.classList.remove('active');
  }
});

showContact.addEventListener('click', () => {
  if (!contact.classList.contains('active')) {
    form.classList.remove('active');
    main.classList.add('active');
    contact.classList.add('active');
  }
});

date.innerHTML = DateTime();