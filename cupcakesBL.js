const cupcakes = [
  { id: 1, name: "Strawberry", price: 1 },
  { id: 2, name: "Coconut", price: 2 },
  { id: 3, name: "Vanila", price: 3 }
];

function getCupcakes() {
  return cupcakes;
}

const getcupcake = id => {
  const cupcake = cupcakes.find(x => x.id == id);
  return cupcake;
};

const postcupcake = cupcake => {
  cupcakes.push(cupcake);
};

module.exports.getCupcakes = getCupcakes;
module.exports.getcupcake = getcupcake;
module.exports.postcupcake = postcupcake;
