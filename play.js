//let,var,const
let name = "Madhukesh";
var age = 22;
const hasHobbies = true;

name = "madhu"

//Function
function summerizeUser(userName, userAge, userHasHobby) {
    return (
        'Name is ' + userName + ', age is ' + userAge + ', and has hobbies: ' + userHasHobby
    );
};

//Arrow Function
const add = (a, b) => {
    return a + b;
};
//Simple Arrow function
const mul = (a, b) => a * b;

//Print
console.log(mul(10, 3));
console.log(add(1, 2));
console.log(summerizeUser(name, age, hasHobbies));

//Objects,Properties and Methods
const person = {
    name: 'Madhukesh',
    age: 22,
    greet() {
        console.log('Hi,Im ' + this.name);
    }
};

person.greet();

//Array and Array Methods
const hobbies = ['Sports', 'Swimming'];
for (let hobby of hobbies) {
    console.log(hobby);
}
console.log(hobbies.map(hobby => 'Hobby:' + hobby));

//Spread and Rest Operators
const copiedArray = [...hobbies];
console.log(copiedArray);
const toArray = (...args) => {
    return args;
}
console.log(toArray(1, 2, 3, 4))

//Async Function
setTimeout(() => {
    console.log("Aync Done");
}, 2000);

//Sync Function
console.log("Hello");
console.log("World");

//Callback Function
const fetchData = callback => {
    setTimeout(() => {
        callback('Done!')
    }, 1500);
};
setTimeout(() => {
    console.log("Timer is done");
    fetchData(text => {
        console.log(text);
    });
}, 2000);

//Promises
const fetchData1 = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Done!')
        }, 1500);
    });
    return promise;
};
setTimeout(() => {
    console.log("Timer is done");
    fetchData1()
        .then(text => {
            console.log(text);
            return fetchData1();
        })
        .then(text2 => {
            console.log(text2);
        });
}, 2000);