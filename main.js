// declare an empty array named <inventory> that will store product objects having a key <name> with the value of a <lowercase> string, and a key <quantity> with the value of an <integer>.

let inventory = [];

// Function to find the index of a product in the inventory array.
// function named <findProductIndex> that takes the product <name> as its argument, <lower case string>, and returns the <index> of the corresponding product object inside the inventory array. If the product is not found, the function should <return -1>.

function strLowerCase(str) {
  return str.toLowerCase();
};

function findProductIndex(product) {
  const prodLc = strLowerCase(product); // 'flour'
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].name === prodLc) {
        return i;//?
      }
    if (inventory[i].name === prodLc) { // 'flour' === 'flour'
      return inventory[i];
    }
  }
  return -1;
};

// function named <addProduct> that takes the product <name> and <quantity> as its arguments. If the product already <exists> in the inventory, the function should <increase> the <quantity> of that product by the given quantity. If the product <does not exist>, the function should <add> a new product object to the inventory array with the given name and quantity. The function should <return> the <updated> inventory array.

function addProduct(product, quantity) {
  const addQuantity = quantity; //?
  if (typeof quantity !== 'number' || quantity <= 0 || !Number.isInteger(quantity)) {
    return 'Quantity must be a positive integer.';
  }
  const prodLc = strLowerCase(product); //?
  let index = findProductIndex(prodLc); //?
  if (index !== -1) { // prodLc exists, update quantity
    inventory[index].quantity += addQuantity;//?
    index = findProductIndex(prodLc);
  }
  if (index === -1) {
    const newProduct = { name: prodLc, quantity }; //?
    inventory.push(newProduct); // Add new prodLc
    inventory[index + 1].name = product; // Add new prodLc
  } else {
    inventory.push({ prodLc, quantity }); // Add new prodLc
    inventory[index + 1] += quantity;
  }
  return inventory;
};

// function named <removeProduct> that takes the product <name> and <quantity> as its arguments. If the product exists in the inventory, the function should <decrease> the quantity of that product by the given quantity. If the resulting quantity is <less than or equal to zero>, the function should <remove> the product object from the inventory array. If the product <does not exist>, the function should return a message indicating that the product was <not found>. The function should <return> the updated <inventory array>.

// inventory = [{name: 'flour', quantity: 1}];
findProductIndex("flour");
addProduct('flour', 5);
findProductIndex("sugar");
addProduct('sugar', 5);
addProduct('sugar', 2);
findProductIndex("sugar");
addProduct('flour', 4);

console.log(inventory);








