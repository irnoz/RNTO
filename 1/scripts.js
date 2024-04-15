console.log("this is my first javascript project");

// String
// Boolean
// Number
// BigInt
// Symbol
// null
// undefined

// object

// const let var

// let b = 54;

// b = "hello"

// a = 50;
// var a;

// console.log(b)


// const a = 10;
// let b = a;
// b = 50;

// console.log(a);

// const user = {
//     name: 'james bond',
//     age: 20
// }
// let user2 = user

// user2.name = '007'

// console.log(user.name)

// const user = {
//     name: 'james bond',
//     age: 20,
//     address: {
//         city: 'Tbilisi'
//     }
// }
// let user2 = {
//     ...user,
//     address: {
//         ...address
//     }
// }

// user2.address.city = "Batumi"

// console.log(user.address.city)

// not hoistable
// const func = (a, b = 19) => {
//     return a + b;
// }

// const func = (a, b) => a + b;
// const func = name => name.toLowerCase()


// this is hoistable
// can be called before definition
// console.log(func(2,5))
// function func(a, b) {
//     return a + b;
// }

// const func = function() {

// }

// const user = {
//     username: "hanes bond",
//     sayHello: () => {
//         console.log(this);
//         return 'Hello ' + this.username
//     }
// }

// const user2 = {
//     name: "hanes bond",
//     sayHello: function() {
//         console.log(this);
//         return 'Hello ' + this.name
//     }
// }

// console.log(user.sayHello())
// console.log(user2.sayHello())

// var b
// const main = () => {
//     if (true) {
//         var a = 50
//         b = a
//     }
//     console.log(b)
// }

// console.log(b)

// main();

const user = {
    name: 'james bond',
    age: 30,
    address: {
        city: 'TB'
    }
}

// const name = user.name
// const city = user.address.city

// above same as below

// const {name, age, address} = user;

// console.log(name, age, address)

// const city = "batumi"

// const {age, name, address: {city: cityName}} = user
// console.log(name, age, cityName)

// const arr = [1,2,3,user,[1,2,['hello']]]
// const [a,, c, {address: {city}}, [,,[myHello]]] = arr;

// console.log(a,c, city, myHello)


const func = (a,...args) => {
    console.log(args)
    // array.forEach(element => {
    //     a += element
    // });
    // return a
    // a better way below
    return args.reduce((sum, value) => sum + value, 0)
}

func(1,2,3,4,5)

// const getName = (usr) => usr.name
const getName = ({name}) => name
console.log(getName(user));

console.error("blaaa")
console.log('20' == 20)
console.log('20' === 20)

const a = [].find((value) => typeof value === 'object')

// const deepCopy = (obj) => {
//     const keys = obj.keys
//     console.log(keys)
//     for(const key in user) {
//         if (typeof key === 'object') {
            
//         } else {
//             obj[key]
//         }
//     }
// }


var object = {
    name: 'james bond',
    age: 30,
    address: {
        city: 'TB'
    },
    object: object,
    this: 'hello'
}

const deepCopyObject = (obj) => {
    var clone = {};
    for(var i in obj) {
        if(typeof(obj[i]) == "object")
        // Array.isArray(obj[i])
            clone[i] = deepCopyObject(obj[i]);
        else
            clone[i] = obj[i];
    }

    return clone;
}

const copyObject = deepCopyObject(object)

// They're different objects:
console.error(object !== copyObject);
console.assert(object.address !== copyObject.address);

var temoName = 'bla'

// They're cyclical:
console.assert(object.this !== object);
console.log(this, window, this === window)
console.assert(copyObject.this !== copyObject);

// They contain equivalent values:
console.assert(object.age === copyObject.age);
console.assert(Number(user.age) === Number(copyObject.age));

console.log("Assertions complete.");