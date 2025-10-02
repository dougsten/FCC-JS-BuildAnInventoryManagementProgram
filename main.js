// declare an empty array named <inventory> that will store product objects having a key <name> with the value of a <lowercase> string, and a key <quantity> with the value of an <integer>.
let inventory = [];


// The function should always use the lowercase form of the product name to perform the search.
function strToLowerCase(str) {
  return str.toLowerCase();
};

// Function to find the index of a product in the inventory array.
// function named <findProductIndex> that takes the product <name> as its argument, (<lower case string>), 
function findProductIndex(product) {
  const prodName = strToLowerCase(product); // 'flour'
  product.name = prodName;
  // and returns the <index> of the corresponding product object inside the inventory array. 
  if (inventory.length != 0) {
    for (let i = 0; i < inventory.length; i++) {
      if (inventory[i].name === prodName) { //?
        return i;
      }
    }
  }
  // If the product is not found, the function should <return -1>.
  return -1;
};

// function named <addProduct> that takes the product <name> and <quantity> as its arguments. If the product already <exists> in the inventory, the function should <increase> the <quantity> of that product by the given quantity. If the product <does not exist>, the function should <add> a new product object to the inventory array with the given name and quantity. The function should <return> the <updated> inventory array.
function addProduct(product) {
  if (typeof product.quantity !== 'number' || product.quantity <= 0 || !Number.isInteger(product.quantity)) {
    return 'Quantity must be a positive integer.';
  }
  product.name = strToLowerCase(product.name);
  let index = findProductIndex(product.name);
  if (index !== -1) { 
    inventory[index].quantity += product.quantity;
  }
  if (index === -1) {
    const newProduct = { name: product.name, quantity: product.quantity };
    inventory.push(newProduct);
  } 
  return inventory;
};

// function named <removeProduct> that takes the product <name> and <quantity> as its arguments. 
function removeProduct(name, quantity) {
  name = strToLowerCase(name);

  // If the product to remove is not present in the inventory, the removeProduct function should log "<product-name> not found" to the console.
  const index = findProductIndex(name);
  if (index === -1) {
    console.log(`${name} "not found"`);
    return inventory;
  }
  
  // If the quantity after the subtraction is zero, removeProduct should remove the product object from the inventory.
  if (inventory[index].quantity - quantity === 0 && inventory.length === 1) {
    inventory = [];
    return inventory;
  } else if (inventory[index].quantity - quantity === 0) {
    inventory = inventory.splice(inventory[index], 1);
    return inventory;
  }
  
  // If the quantity in the inventory is not enough to perform the subtraction, the removeProduct function should log the string "Not enough <product-name> available, remaining pieces: <product-quantity>" to the console. 
  if (inventory[index].quantity - quantity <= 0) {
    console.log(`Not enough ${name} available, remaining pieces: ${quantity}`)
    return inventory;
  }
  
  // The removeProduct function should subtract the passed quantity from the corresponding product object inside the inventory and log the string "Remaining ${name} pieces: ${quantity}" to the console.
  console.log(`Remaining ${name} pieces: ${quantity}`);
  return inventory;
};


console.log(inventory.length);
console.log(inventory);
addProduct({name: "FLOUR", quantity: 5});
removeProduct("flour", 5);
console.log(inventory)





