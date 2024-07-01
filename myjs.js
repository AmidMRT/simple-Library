const myLibrary = [{name: "harry potter", author: "jk rowling", pages: 50},
{name: "lala", author: "mama", pages: 50}];

function Book() {
}

const cont = document.querySelector(".bkcontainer");
const openPopup = document.querySelector('.openPopup');
const dialog = document.querySelector('dialog');
const subButton = document.querySelector('#btnsubmit');
const closePopup = document.querySelector('#closePopup');
const newName = document.querySelector('#newname');
const newAuthor = document.querySelector('#newauthor');
const newPages = document.querySelector('#newpages');

function addBookToLibrary() {
  nuname = newName.value;
  let nuauthor = newAuthor.value;
  let nupages = newPages.value;
  myLibrary.push({name: nuname, author: nuauthor, pages: nupages});
}

myLibrary.forEach((item)=> {
  let name = item.name;
  let author = item.author;
  let newCard = document.createElement('div');
  cont.appendChild(newCard);
  let namep = document.createElement('p');
  newCard.appendChild(namep);
  let booktxt = document.createTextNode(`book: ${name}`);
  namep.appendChild(booktxt);
  autp = document.createElement('p');
  newCard.appendChild(autp);
  let authortxt = document.createTextNode(`author: ${author}`);
  autp.appendChild(authortxt);
});


function showBooks () {
  myLibrary.forEach((item)=> {
      let name = item.name;
      let author = item.author;
      let newCard = document.createElement('div');
      cont.appendChild(newCard);
      let namep = document.createElement('p');
      newCard.appendChild(namep);
      let booktxt = document.createTextNode(`book: ${name}`);
      namep.appendChild(booktxt);
      autp = document.createElement('p');
      newCard.appendChild(autp);
      let authortxt = document.createTextNode(`author: ${author}`);
      autp.appendChild(authortxt);
}); }

openPopup.addEventListener('click', ()=> {
    dialog.showModal();    
});


closePopup.addEventListener('click', () => {
  dialog.close();
});

subButton.addEventListener('click', ()=>{
  addBookToLibrary();
  showBooks();
  // newAuthor.value = '', newName.value = '', newPages.value = 0;
  console.log(myLibrary);
  dialog.close();
});