// array destructuring
var aname = ["yunus", "emre", "adaş"];

//ES5
// let firstName = aname[0];
// let lastName = aname[1];

//ES6
// let [firstName,lastName] = aname;
let [firstName, lastName] = "Yunus Adaş".split(" ");

//console.log(firstName,lastName)

// object destructuring
let pc = {
  marka: "Apple",
  price: 20000,
  model: "Macbook Pro",
  işlemci: "Intel",
};

// let {urunAdı, price, model} = pc;

let { marka, price, model, satisDurumu = false } = pc;
//console.log(marka, price, model,satisDurumu);

// function urunGoster(marka, price, model,satisDurumu){
//     console.log(marka, price, model);
// }
// urunGoster(pc.marka,pc.price,pc.model,satisDurumu=false);

function urunGoster(obj) {
  let { marka, price, model, satisDurumu = false } = obj;
  console.log(marka, price, model, satisDurumu);
}

urunGoster(pc);