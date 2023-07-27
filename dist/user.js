var ItemManager = /** @class */ (function () {
    function ItemManager() {
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
    ItemManager.prototype.getItems = function () {
        return this.items;
    };
    ItemManager.prototype.addItem = function (item) {
        this.items.push(item);
    };
    ItemManager.prototype.removeItem = function (item) {
        var index = this.items.indexOf(item);
        if (index !== -1) {
            this.items.splice(index, 1);
        }
    };
    ItemManager.prototype.removeAllItems = function () {
        this.items = [];
    };
    return ItemManager;
}());
// Create an instance of the ItemManager class
var itemManager = new ItemManager();
// Step 4: Create the function to add items to the HTML div
function addItem() {
    var input = document.getElementById('itemInput');
    var itemName = input.value.trim();
    // Check if the input is not empty and matches an item name in the list
    var selectedItem = itemManager.getItems().find(function (item) { return item.name.toLowerCase() === itemName.toLowerCase(); });
    if (selectedItem) {
        var itemListDiv = document.getElementById('itemList');
        var newItemDiv_1 = document.createElement('div');
        var itemNameSpan = document.createElement('span');
        itemNameSpan.textContent = "".concat(selectedItem.name, " - $").concat(selectedItem.price);
        var quantityInput_1 = document.createElement('input');
        quantityInput_1.type = 'number';
        quantityInput_1.value = '1'; // Default quantity is 1
        quantityInput_1.addEventListener('input', function () { return updateTotalPrice(newItemDiv_1, selectedItem.price, quantityInput_1); });
        var removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.addEventListener('click', function () { return removeItem(newItemDiv_1); });
        newItemDiv_1.appendChild(itemNameSpan);
        newItemDiv_1.appendChild(quantityInput_1);
        newItemDiv_1.appendChild(removeButton);
        itemListDiv.appendChild(newItemDiv_1);
        // Calculate and display the initial total price
        updateTotalPrice(newItemDiv_1, selectedItem.price, quantityInput_1);
    }
    // Clear the input after adding the item
    input.value = '';
}
// Step 5: Create the function to remove items from the HTML div
function removeItem(itemDiv) {
    var itemListDiv = document.getElementById('itemList');
    itemListDiv.removeChild(itemDiv);
}
function removeAllItems() {
    var itemListDiv = document.getElementById('itemList');
    while (itemListDiv.firstChild) {
        itemListDiv.removeChild(itemListDiv.firstChild);
    }
}
// Step 6: Create the function to update the total price when quantity changes
function updateTotalPrice(itemDiv, itemPrice, quantityInput) {
    var itemListDiv = document.getElementById('itemList');
    var allItems = itemListDiv.querySelectorAll('div');
    var totalPrice = 0;
    allItems.forEach(function (item) {
        var _a, _b, _c;
        var itemPriceStr = (_b = (_a = item.querySelector('span')) === null || _a === void 0 ? void 0 : _a.textContent) === null || _b === void 0 ? void 0 : _b.split(' - ')[1];
        var itemPriceNum = parseFloat((itemPriceStr === null || itemPriceStr === void 0 ? void 0 : itemPriceStr.substring(1)) || '0'); // Removing the "$" sign
        var itemQuantity = parseInt(((_c = item.querySelector('input')) === null || _c === void 0 ? void 0 : _c.value) || '0');
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
    }
}
