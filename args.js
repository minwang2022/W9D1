// sum

// arguments keyword
function sum() {
    let total = 0;

    for (let i = 0; i < arguments.length; i++) {
        total += arguments[i];
    }

    return total;
}

// rest operator
// function sum(...nums) {
//     let total = 0;

//     for (let i = 0; i < nums.length; i++) {
//         total += nums[i];
//     }

//     return total;
// }

// examples
// console.log(sum(1, 2, 3, 4));//=== 10;
// console.log(sum(1, 2, 3, 4, 5));// === 15;

// bind with args


// arguments keyword
Function.prototype.myBind = function() {
    debugger
};

// examples
class Cat {
    constructor(name) {
        this.name = name;
    }

    says(sound, person) {
        console.log(`${this.name} says ${sound} to ${person}!`);
        return true;
    }
}

class Dog {
    constructor(name) {
        this.name = name;
    }
}

const markov = new Cat("Markov");
const pavlov = new Dog("Pavlov");

markov.says("meow", "Ned");

markov.says.myBind(pavlov, "meow", "Kush")();