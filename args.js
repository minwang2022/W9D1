// sum

// arguments keyword
function summed() {
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
// Function.prototype.myBind = function() {
//     const context = arguments[0];
//     const args = Array.from(arguments).slice(1);
//     let that = this;  //#bidning to the context
//     return function() {
//         return that.apply(context, args)
//     }
// };

// ... rest operator
Function.prototype.myBind = function(context, ...bindTimeArgs) {
    let that = this;  //#bidning to the context
    return function(...callTimeArgs) {
        return that.call(context, ...bindTimeArgs, ...callTimeArgs);
    }
};
// examples 
// class Cat {
//     constructor(name) {
//         this.name = name;
//     }

//     says(sound, person) {
//         console.log(`${this.name} says ${sound} to ${person}!`);
//         return true;
//     }
// }

// class Dog {
//     constructor(name) {
//         this.name = name;
//     }
// }

// const markov = new Cat("Markov");
// const pavlov = new Dog("Pavlov");

// markov.says("meow", "Ned");

// markov.says.myBind(pavlov, "meow", "Kush")();

// curriedSum

// function curriedSum (numArgs) {
//     const nums = [];
    
//     function _curriedSum(el) {
//         nums.push(el);
//         // debugger 
//         if (nums.length === numArgs) {
            
//             let total = 0;

//             for (let i = 0; i < nums.length; i++) {
//                 total += nums[i];
//             }

//             return total;
//             // return summed(...nums);
            
//         } else {
//             return _curriedSum;
//         }
//     }
//    return _curriedSum;
// };


// example

// const sum = curriedSum(4);
// console.log(sum(5)(30)(20)(1)); // => 56

// Function.prototype.curry

Function.prototype.curry = function(numArgs) {
    const nums = [];
    const func = this;

    function _curriedSum(el) {
        nums.push(el);

        if (nums.length === numArgs) {
            // return func(...nums);
            return this.apply(this, nums);
        } else {
            return _curriedSum;
        }
    }

    return _curriedSum;
};

console.log(summed.curry(4)(5)(30)(20)(1)); // 56

// Collect up arguments until there are numArgs of them,

// If there are too few arguments still, it should return itself.

// When there are numArgs arguments, it should call the original function.

// Write a version that uses Function.prototype.apply and another one that uses ... (the spread operator).