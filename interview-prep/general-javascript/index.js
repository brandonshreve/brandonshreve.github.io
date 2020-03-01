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
