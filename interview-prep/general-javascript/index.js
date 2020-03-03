console.log('Hello World... Starting JavaScript practice')

/*
    Question 1:
    [1, 2].print() should iterate through all values of the array
*/
console.log('/***************************************');
console.log('Question 1');
Array.prototype.print = () => {
    for(let i in this) {
        console.log('my ans', i);
    }
}

[1, 2].print();

/*
    Question 2:
    obj.getA().getB(); should print the value of 'a' and then the value of 'b'

    const obj = {
    a: 1,
    b: 2,
    getA() {
        console.log(this.a);
    },
    getB() {
        console.log(this.b);
    }
}
*/
console.log('/***************************************');
console.log('Question 2');

const obj = {
    a: 1,
    b: 2,
    getA() {
        console.log(this.a);
        return this;
    },
    getB() {
        console.log(this.b);
    }
}

obj.getA().getB();

/*
    Question 3: Implement Array.flatten
    [[1], [2, 3], [4, [5, [6,7,8]]]]
*/
console.log('/***************************************');
console.log('Question 3: Implement Array.flatten');

flattenArray = (arr) => {
    if(Array.isArray(arr) === false) return arr;
    let result = [];

    arr.forEach(element => {
        if(Array.isArray(element)) {
            result = result.concat(flattenArray(element))
        } else {
            result.push(element);
        }
    });

    return result;
}
let arr = [[1], [2, 3], [4, [5, [6,7,8]]]];
let flatArr = flattenArray(arr);
console.log('arr', arr);
console.log('flatArr', flatArr)

/*
    Question 4: Implement recursive sum
        sum(1)(2)(3)...()
*/

console.log('/***************************************');
console.log('Question 4: Implement recursive sum');

recurSumES6 = (a) => (b) => b ? recurSumES6(a+b) : a;

recurSumES5 = function(a) {
    return function(b) {
        if(b) {
            return recurSumES5(a+b);
        } else {
            return a;
        }
    }
}

let result = recurSumES6(1)(2)(3)(4)();
let resultTwo = recurSumES5(1)(2)(3)(4)();

console.log('Sum results should be 10');
console.log('Recursive Sum ES6', result);
console.log('Recursive Sum ES5', resultTwo);

/*
    Question 5: Promisfy a function
*/

console.log('/***************************************');
console.log('Question 5: Promisfy a function');


/*
    Question 6: Debounce implementation
*/

console.log('/***************************************');
console.log('Question 6: Debounce implementation');

/*
    Question 7: Throttle implementation
*/

console.log('/***************************************');
console.log('Question 7: Throttle implementation');

throttle = () => {
    console.log('throttle');
}

/*
    Question 8: Closures
*/
console.log('/***************************************');
console.log('Question 8: Closures');


/*
    Question 9: Bind, call, apply
*/
console.log('/***************************************');
console.log('Question 9: Bind, call, apply');

let objTwo = {
    name: 'Foo',
    getName: function() {
        return this.name;
    },
    getNameArrowFunct: () => {
        return this.name
    }
}

let objThree = {
    name: 'Bar'
}

let outOfContext = objTwo.getName;
console.log('Original context- This will be Foo: ', objTwo.getName());
console.log('Out of context- This will be undeclared:', outOfContext());
console.log('Function called in a new context- This will be Bar: ', outOfContext.call(objThree));

let outOfContextTwo = objTwo.getNameArrowFunct;
console.log('Arrow function... in context: ', objTwo.getNameArrowFunct());
console.log('I dont think any of this works on arrow functions: ', outOfContextTwo(), outOfContextTwo.call(objThree));


// (() => {
//     console.log('Immediatley Invoked Anonymous Function');
// })();