const myLibrary = [];

function Book(name, author, pages) {
  this.name = name;
  this.author = author;
  this.pages = pages;
}

// const book1 = new Book('harry', 'jk', 100);
// myLibrary.push(book1);

const cont = document.querySelector(".bkcontainer");
const openPopup = document.querySelector('.openPopup');
const dialog = document.querySelector('dialog');
const subButton = document.querySelector('#btnsubmit');
const closePopup = document.querySelector('#closePopup');
const newName = document.querySelector('#newname');
const newAuthor = document.querySelector('#newauthor');
const newPages = document.querySelector('#newpages');

function addBookToLibrary() {
  let newBook = new Book (newName.value, newAuthor.value, newPages.value);
  myLibrary.push(newBook);
}

myLibrary.forEach((item)=> {
  let newCard = document.createElement('div');
  cont.appendChild(newCard);
  let namep = document.createElement('p');
  newCard.appendChild(namep);
  let booktxt = document.createTextNode(`book: ${item.name}`);
  namep.appendChild(booktxt);
  autp = document.createElement('p');
  newCard.appendChild(autp);
  let authortxt = document.createTextNode(`author: ${item.author}`);
  autp.appendChild(authortxt);
  let rmbtn = document.createElement('button');
  newCard.appendChild(rmbtn);
  let btntxt = document.createTextNode('remove');
  rmbtn.appendChild(btntxt);

});


function showBooks () {
  cont.textContent = '';
  myLibrary.forEach((item)=> {
      let newCard = document.createElement('div');
      cont.appendChild(newCard);
      let namep = document.createElement('p');
      newCard.appendChild(namep);
      let booktxt = document.createTextNode(`book: ${item.name}`);
      namep.appendChild(booktxt);
      autp = document.createElement('p');
      newCard.appendChild(autp);
      let authortxt = document.createTextNode(`author: ${item.author}`);
      autp.appendChild(authortxt);
      let rmbtn = document.createElement('button');
      newCard.appendChild(rmbtn);
      let btntxt = document.createTextNode('remove');
      rmbtn.appendChild(btntxt);
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
  console.log(myLibrary);
  dialog.close();
  let removebtnNodes = cont.querySelectorAll('button');
  let rmbtns = Array.from(removebtnNodes);
  rmbtns.forEach((btn)=> {
    btn.addEventListener('click', ()=>{
      let rmIndex = rmbtns.indexOf(btn);
      console.log(rmIndex);
      myLibrary.splice(rmIndex, 1);
      console.log(myLibrary);
      showBooks();
    })
  })
});
