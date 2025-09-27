
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

inventory = ['flour', 5];

// console.log(addProduct('flour', 10));
// console.log(addProduct('sugar', 5));
// console.log(addProduct('flour', 5)); 
// console.log(findProductIndex('flour')); 









