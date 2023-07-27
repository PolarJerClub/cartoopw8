interface Item {
  name: string;
  price: number;
  description: string;
}

class ItemManager {
  private items: Item[];

  constructor() {
    this.items = [
      { name: 'Hacky Sack', price: 10, description: 'A fun sack that conveniently may be hackied' },
      { name: 'Walking Stick', price: 20, description: 'Gandalf would be jealous' },
      { name: 'Skateboard', price: 30, description: 'A wicked skidder' },
      { name: 'Basketball', price: 30, description: 'A basketball' },
      { name: 'Pogo Stick', price: 30, description: 'Bouncey bouncey' },
      { name: 'Hat', price: 30, description: 'A hat' },
      { name: 'Megadeath Shirt', price: 30, description: 'You know' },
      { name: 'Mystery Box', price: 30, description: 'Who knows' },
      { name: 'Wand', price: 30, description: 'Expecto Patronum' },
      { name: 'Map to Atlantis', price: 30, description: 'Icelandic diary' },
    ];
  }

  getItems(): Item[] {
    return this.items;
  }

  addItem(item: Item): void {
    this.items.push(item);
  }

  removeItem(item: Item): void {
    const index = this.items.indexOf(item);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }

  removeAllItems(): void {
    this.items = [];
  }
}

// Create an instance of the ItemManager class
const itemManager = new ItemManager();

// Step 4: Create the function to add items to the HTML div
function addItem() {
  const input = document.getElementById('itemInput') as HTMLInputElement;
  const itemName = input.value.trim();

  // Check if the input is not empty and matches an item name in the list
  const selectedItem = itemManager.getItems().find(item => item.name.toLowerCase() === itemName.toLowerCase());

  if (selectedItem) {
    const itemListDiv = document.getElementById('itemList') as HTMLDivElement;
    const newItemDiv = document.createElement('div');

    const itemNameSpan = document.createElement('span');
    itemNameSpan.textContent = `${selectedItem.name} - $${selectedItem.price}`;

    const quantityInput = document.createElement('input');
    quantityInput.type = 'number';
    quantityInput.value = '1'; // Default quantity is 1
    quantityInput.addEventListener('input', () => updateTotalPrice(newItemDiv, selectedItem.price, quantityInput));

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';
    removeButton.addEventListener('click', () => removeItem(newItemDiv));

    newItemDiv.appendChild(itemNameSpan);
    newItemDiv.appendChild(quantityInput);
    newItemDiv.appendChild(removeButton);
    itemListDiv.appendChild(newItemDiv);

    // Calculate and display the initial total price
    updateTotalPrice(newItemDiv, selectedItem.price, quantityInput);
  }

  // Clear the input after adding the item
  input.value = '';
}

// Step 5: Create the function to remove items from the HTML div
function removeItem(itemDiv: HTMLDivElement) {
  const itemListDiv = document.getElementById('itemList') as HTMLDivElement;
  itemListDiv.removeChild(itemDiv);
}

function removeAllItems() {
  const itemListDiv = document.getElementById('itemList') as HTMLDivElement;
  while (itemListDiv.firstChild) {
    itemListDiv.removeChild(itemListDiv.firstChild);
  }
}

// Step 6: Create the function to update the total price when quantity changes
function updateTotalPrice(itemDiv: HTMLDivElement, itemPrice: number, quantityInput: HTMLInputElement) {
  const itemListDiv = document.getElementById('itemList') as HTMLDivElement;
  const allItems = itemListDiv.querySelectorAll('div');

  let totalPrice = 0;

  allItems.forEach(item => {
    const itemPriceStr = item.querySelector('span')?.textContent?.split(' - ')[1];
    const itemPriceNum = parseFloat(itemPriceStr?.substring(1) || '0'); // Removing the "$" sign
    const itemQuantity = parseInt(item.querySelector('input')?.value || '0');
    totalPrice += itemPriceNum * itemQuantity;
  });

//   const totalPriceDiv = document.getElementById('totalPrice');
//   if (totalPriceDiv.textContent === null){
//      `Total Price: $${totalPrice.toFixed(2)}`;
// }

// Step 7: Create the function to check out and clear the cart
function checkout() {
  removeAllItems();
  updateTotalPrice(document.createElement('div'), 0, document.createElement('input'));
}}