// PHASE I: Callbacks

function titleize(array, callback) {
    let titleized = array.map(name => `Mx. ${name} Jingleheimer Schmidt`);
    callback(titleized);
}

// titleize(["Mary", "Brian", "Leo"], (names) => {
//     names.forEach(name => console.log(name));
// });

// PHASE II: Constructors, Prototypes, and 'this'

function Elephant(name, height, tricks) {
    this.name = name;
    this.height = height;
    this.tricks = tricks;
}

Elephant.prototype.trumpet = function() { 
    console.log(`${this.name} the elephant goes 'phrRRRRRRRRRRR!!!!!!!'`);
};

Elephant.prototype.grow = function() {
    this.height += 12;
};

Elephant.prototype.addTrick = function(trick) {
    this.tricks.push(trick);
};

Elephant.prototype.play = function() {
    let trickIndex = Math.floor(Math.random() * this.tricks.length);
    console.log(`${this.name} is ${this.tricks[trickIndex]}`);
};

const dumbo = new Elephant('Dumbo', 100, ['painting a picture']);

// dumbo.trumpet();

// console.log(dumbo.height);
// dumbo.grow();
// console.log(dumbo.height);

// console.log(dumbo.tricks);
// dumbo.addTrick('blowing his nose');
// console.log(dumbo.tricks);

// dumbo.play();

// PHASE III: Function Invocation

let ellie = new Elephant("Ellie", 185, ["giving human friends a ride", "playing hide and seek"]);
let charlie = new Elephant("Charlie", 200, ["painting pictures", "spraying water for a slip and slide"]);
let kate = new Elephant("Kate", 234, ["writing letters", "stealing peanuts"]);
let micah = new Elephant("Micah", 143, ["trotting", "playing tic tac toe", "doing elephant ballet"]);

let herd = [ellie, charlie, kate, micah];

Elephant.paradeHelper = function(elephant) {
    console.log(`${elephant.name} is trotting by!`)
};

// Elephant.paradeHelper(micah);

// herd.forEach(Elephant.paradeHelper);

// PHASE IV: Closures

function dinerBreakfast() {
    let order = "I'd like cheesy scrambled eggs please.";
    console.log(order);

    return function(food) {
        order = order.slice(0, -7) + ' and ' + food + ' please.';
        console.log(order);
    }
}

let bfastOrder = dinerBreakfast();
bfastOrder("chocolate chip pancakes");
bfastOrder("grits");