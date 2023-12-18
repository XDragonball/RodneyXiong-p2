// Utility function to get elements by ID
function get(element) {
    return document.getElementById(element);
}

// Get references to existing elements
var addItemBtn = get('addItemBtn');
var modal = get('modal');
var addToListBtn = get('addToListBtn');
var itemList = get('itemList');
var closeModalBtn = document.getElementsByClassName('close')[0];


// Function to display modal
function displayModal() {
    modal.style.display = 'block';
}

// Function to close modal
function closeModal() {
    modal.style.display = 'none';
}

// Function to add/remove item from the list
function addItemToList() {
    var itemNameInput = document.getElementById('itemName');
    var itemName = itemNameInput.value;

    if (itemName.trim() !== '') {
      var li = document.createElement('li');
      li.textContent = itemName;

      var removeBtn = document.createElement('button');
      removeBtn.textContent = 'Remove';

      // Event listener for removing item from the list
      removeBtn.addEventListener('click', function () {
        itemList.removeChild(li);
      });

      li.appendChild(removeBtn);
      itemList.appendChild(li);

      itemNameInput.value = '';
      closeModal();
    } else {
      alert('Please enter an item name.');
    }
  }

// Event listener for adding item to the list
addToListBtn.addEventListener('click', addItemToList);

// Event listener for opening modal
addItemBtn.addEventListener('click', displayModal);

// Event listener for closing modal
closeModalBtn.addEventListener('click', closeModal);
