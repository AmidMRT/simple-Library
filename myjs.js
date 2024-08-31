const myLibrary = [];

function Book(name, author, pages) {
  this.name = name;
  this.author = author;
  this.pages = pages;
  this.isread = true;
}

const cont = document.querySelector(".bkcontainer");
const openPopup = document.querySelector('.openPopup');
const dialog = document.querySelector('dialog');
const subButton = document.querySelector('#btnsubmit');
const closePopup = document.querySelector('#closePopup');
const newName = document.querySelector('#newname');
const newAuthor = document.querySelector('#newauthor');
const newPages = document.querySelector('#newpages');
const bookForm = document.querySelector('.newbook');
const readStatus = document.querySelector('#readStatus');

function addBookToLibrary() {
  let newBook = new Book (newName.value, newAuthor.value, newPages.value);
  newBook.isread = readStatus.checked;
  myLibrary.push(newBook);
}


function showBooks () {
  cont.textContent = '';
  myLibrary.forEach((item)=> {
      let newCard = document.createElement('div');
      cont.appendChild(newCard);
      newCard.innerHTML = `
      <h2>${item.name}</h2>
      <p>${item.author}</p>
      <p>${item.pages} pages</p>
      <div>
      <button class="status">${item.isread ? "read" : "not read"}</button>
      <button class="delete">remove</button>
      </div>
      `
  }) 

  document.querySelectorAll(".delete").forEach((button, index) => {button.addEventListener("click", (e)=>{
    myLibrary.splice(index, 1);
    showBooks();
  })})

  document.querySelectorAll(".status").forEach((button, index) => {button.addEventListener("click", ()=>{
    readToggle(myLibrary[index]);
    button.innerText = myLibrary[index].isread ? "read" : "not read";
  })})
};

function readToggle (Book) {
  Book.isread = !(Book.isread);
}

openPopup.addEventListener('click', ()=> {
  dialog.showModal();    
});

closePopup.addEventListener('click', () => {
  dialog.close();
});

subButton.addEventListener('click', (e)=>{
  // e.preventDefault();

  addBookToLibrary();
  showBooks();
  bookForm.reset();
  dialog.close();
});
