//
// Objet destructuring
//

/* const person = {
    name: 'Fabrice',
    age: 45,
    location: {
        city: 'Waremme',
        temp: 20
    }
};

const { name: firstname = 'Anonymous', age } = person; 
//const name = person.name;
//const age = person.age;



console.log(`${firstname} is ${age}`);

const { city, temp:temperature} = person.location;

if (city && temperature) {
    console.log(`It's ${temperature} in ${city}`);
} */

/* const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const { name : publisherName = 'Self-Published'} = book.publisher;

console.log(publisherName); */

//
// Arrey destructuring
//

const address = ['1299 Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
//const address = [];

const [, city , state = 'NewYork'] = address;

//console.log(`You are in ${address[1]} ${address[2]}`);

//console.log(`You are in ${city} ${state}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

const [ itemName, , mediumPrice] = item;

console.log(`A medium ${itemName} costs ${mediumPrice}`);