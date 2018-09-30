import * as firebase from 'firebase';

const  config = {
  apiKey: process.env.FIREBASE_API_KEY ,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN ,
  databaseURL: process.env.FIREBASE_DATABASE_URL ,
  projectId: process.env.FIREBASE_PROJECT_ID ,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET ,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER 
};

firebase.initializeApp(config);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

/* // child_removed
database.ref('expenses').on('child_removed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

// child_changed
database.ref('expenses').on('child_changed', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
});

// child_added
database.ref('expenses').on('child_added', (snapshot) => {
  console.log(snapshot.key, snapshot.val());
}); */


/*   const onValueChange = database.ref('expenses').on('value', (snapshot) => {
    const expenses = [];

    snapshot.forEach((childSnapshot) => {
      expenses.push({
        id: childSnapshot.key,
        ...childSnapshot.val()
      });
    });
    console.log(expenses);
  }) */




/* database.ref('expenses').push({
  description: 'third expense',
  note: 'dfdfdfdf',
  amount: 12565,
  createdAt: 58458
}); */



/* database.ref('notes').push({
  title: 'Course Topics',
  body: 'React Native, angular, Python'
}); */



/* database.ref('notes/-LN-Vip6XPbLL6ZITcta').update({
  body: 'Buy food'
}); */ 

//database.ref('notes/-LN-Vip6XPbLL6ZITcta').remove(); 

/* const onValueChange = database.ref().on('value',  (snapshot) => {
  const val = snapshot.val();
  console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
}, (e) => {
  console.log('Error with data fetching', e);
}); */



/* setTimeout(() => {
  database.ref('age').set(30);
}, 3500);

setTimeout(() => {
  database.ref().off(onValueChange);
 }, 7000);

setTimeout(() => {
  database.ref('age').set(32);
}, 10500); */

/* database.ref('location/ville')
.once('value')
.then((snapshot) => {
  const val = snapshot.val();
  console.log(val);
}).catch((e) => {
  console.log('Error fetching data', e);
}); */

/*  database.ref().set({
  name: 'Fabrice Martinello',
  age: 46,
  stressLevel: 6,
  job: {
    title: 'Software developer',
    company: 'Google'
  },
  location: {
    ville: 'Liège',
    country: 'Belgium'
  }
}).then(() => {
  console.log('Data is saved 1');
}).catch((e) => {
  console.log('This failed', e);
});

database.ref().update({
  stressLevel: 9,
  'job/company': 'Amazon',
  'location/ville': 'Seattle',
  'location/country': 'United States '
}); */


/* database.ref()
  .remove()
  .then(() => {
  console.log('Data is remove');
}).catch((e) => {
  console.log('remove failed', e);
}); */
