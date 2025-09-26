let inventory = [];

// Function to find the index of a product in the inventory array.
function findProductIndex(product) { 
  console.log(product);
  for (let i = 0; i < inventory.length; i++) {
    console.log(i);
    console.log(product);
    if (inventory[i] === product) {
        return inventory[i];
      }
  }
  return -1;
};

function addProduct(product, quantity) {
  console.log(product);
  console.log(quantity);
  const index = findProductIndex(product); //?
  if (index !== -1) { // Product exists, update quantity
      inventory[index] += quantity;
  } else {
      inventory.push({ product, quantity }); // Add new product
      console.log(inventory);
  }
  return inventory;
};

inventory = ['flour', 5];
console.log(addProduct('flour', 10));
// console.log(addProduct('sugar', 5));
// console.log(addProduct('flour', 5)); // Update existing product
// console.log(findProductIndex('flour')); // Output: 0








