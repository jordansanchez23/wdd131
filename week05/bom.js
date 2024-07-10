const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Function to get chapters array from localStorage or return empty array
function getChapterList() {
  return JSON.parse(localStorage.getItem('myFavBOMList')) || [];
}

// Function to set chapters array in localStorage
function setChapterList() {
  localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

// Function to display a chapter in the list
function displayList(item) {
  const li = document.createElement('li');
  li.textContent = item;

  const deleteButton = document.createElement('button');
  deleteButton.textContent = '❌';
  deleteButton.classList.add('delete');

  li.append(deleteButton);
  list.append(li);

  // Event listener for delete button
  deleteButton.addEventListener('click', function() {
    list.removeChild(li);
    deleteChapter(item);
    input.focus();
  });
}

// Function to delete a chapter from the list and localStorage
function deleteChapter(chapter) {
  chaptersArray = chaptersArray.filter(item => item !== chapter);
  setChapterList();
}

// Load chapters from localStorage on page load
let chaptersArray = getChapterList();
chaptersArray.forEach(chapter => {
  displayList(chapter);
});

// Event listener for add button
button.addEventListener('click', function() {
  const chapter = input.value.trim();
  if (chapter !== '') {
    displayList(chapter);
    chaptersArray.push(chapter);
    setChapterList();
    input.value = '';
    input.focus();
  } else {
    input.focus();
  }
});