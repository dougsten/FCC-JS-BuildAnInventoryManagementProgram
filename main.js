// Inventory Management System
// In this project, you will create a simple inventory management system for a small store. The system will allow adding products to the inventory, removing products from the inventory, and checking the current stock of a product.
// Each product will be represented as an object with the following properties:
// name (string): The name of the product. 
// quantity (number): The quantity of the product in stock.

// User Stories
// As a store manager, I want to be able to add new products to the inventory so that I can keep track of what items are available for sale.
// As a store manager, I want to be able to remove products from the inventory when they are sold so that the inventory reflects the current stock.
// As a store manager, I want to be able to check the current stock of a product so that I can make informed decisions about restocking.
// Acceptance Criteria
// 1. The inventory should be represented as an array of product objects.
// 2. Each product object should have the properties name (string) and quantity (number).
// 3. The system should have the following functions:
//    - addProduct(product): Adds a new product to the inventory. If the product already exists, it should update the quantity.
//    - removeProduct(productName, quantity): Removes a specified quantity of the product from the inventory. If the quantity to remove is greater than the available stock, it should not allow the removal and return an error message.
//    - checkStock(productName): Returns the current stock of the specified product. If the product does not exist, it should return an error message.
// 4. The system should handle edge cases, such as adding a product with a negative quantity or removing more items than are in stock.
// Notes
// You can use JavaScript to implement this inventory management system. You may also use any libraries or frameworks you are comfortable with, but it is not required.
// Focus on writing clean, maintainable code and consider how you might extend the system in the future (e.g., adding categories for products, tracking sales, etc.).
// Implementation
// 1. Initialize an empty array named inventory to store product objects.
// 2. Create the addProduct function to add or update products in the inventory.
// 3. Create the removeProduct function to remove products from the inventory.
// 4. Create the checkStock function to check the current stock of a product.
// 5. Test the functions with various scenarios to ensure they work as expected.

// Requirements
/* You should declare an empty array named inventory that will store product objects having a key name with the value of a lowercase string, and a key quantity with the value of an integer.

You should create a function named findProductIndex that takes the product name as its argument and returns the index of the corresponding product object inside the inventory array. The function should always use the lowercase form of the product name to perform the search. If the product is not found, the function should return -1.

You should create a function named addProduct that takes a product object as its argument.

If the product is already present in the inventory, the addProduct function should update its quantity value and log to the console the product name followed by a space and quantity updated.

If the product is not present in the inventory, the addProduct function should push the product to the inventory array and log the product name to the console, followed by a space and added to inventory.

You should create a function named removeProduct that takes the product name and quantity as its arguments.

The removeProduct function should subtract the passed quantity from the corresponding product object inside the inventory and log the string Remaining <product-name> pieces: <product-quantity> to the console, where <product-name> should be replaced by the product name, and <product-quantity> should be replaced by the product quantity.

If the quantity after the subtraction is zero, removeProduct should remove the product object from the inventory. If the quantity in the inventory is not enough to perform the subtraction, the removeProduct function should log the string Not enough <product-name> available, remaining pieces: <product-quantity> to the console.

If the product to remove is not present in the inventory, the removeProduct function should log <product-name> not found to the console.
Note: To prevent conflicts, keep only the logging mentioned in the user stories when running tests. */

// declare an empty array named <inventory> that will store product objects having a key <name> with the value of a <lowercase> string, and a key <quantity> with the value of an <integer>.

let inventory = [];

// function named <findProductIndex> that takes the product <name> as its argument and returns the <index> of the corresponding product object inside the inventory array. If the product is not found, the function should <return -1>.

function findProductIndex(product) {
  console.log(product); // 'flour'
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i] === product) { // 'flour' === 'flour'
      return inventory[i];
    }
  }
  return -1;
};

// function named <addProduct> that takes the product <name> and <quantity> as its arguments. If the product already <exists> in the inventory, the function should <increase> the <quantity> of that product by the given quantity. If the product <does not exist>, the function should <add> a new product object to the inventory array with the given name and quantity. The function should <return> the <updated> inventory array.

function addProduct(product, quantity) {
  const index = findProductIndex(product);
  if (index === -1) {
    inventory.push(product);
    inventory.push(quantity);
  } else {
    inventory[index + 1] += quantity;
  }
  return inventory;
};

// function named <removeProduct> that takes the product <name> and <quantity> as its arguments. If the product exists in the inventory, the function should <decrease> the quantity of that product by the given quantity. If the resulting quantity is <less than or equal to zero>, the function should <remove> the product object from the inventory array. If the product <does not exist>, the function should return a message indicating that the product was <not found>. The function should <return> the updated <inventory array>.

// inventory = ['flour', 5];

console.log(findProductIndex('flour')); // 0
console.log(addProduct('flour', 10));
console.log(addProduct('sugar', 5));
console.log(addProduct('flour', 5)); 
// console.log(findProductIndex('flour')); 









