import * as firebase from 'firebase';
import moment from 'moment';

// Initialize Firebase
const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};
firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default }

// // child_removed
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// // child_added
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('value', (snapshot) => {
//   const expenses = [];

//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });

//   console.log(expenses);
// });

// database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses);
//   });

// database.ref('expenses').push({
//   description: 'Rent',
//   note: 'note for rent',
//   amount: 13500,
//   createAt: -1000
// });

// database.ref('notes/-L3u6waCVOjdzns428pn').remove()

// database.ref('notes').push({
//   title: 'Third thing',
//   body: 'to do list'
// })

// database.ref().set({
//   notes: [
//     {
//       title: 'First thing',
//       body: 'wake up'
//     }, {
//       title: 'Second thing',
//       body: 'learn something new'
//     }
//   ]
// })

// database.ref().on('value', (snapshot) => {
//   const { name, job } = snapshot.val();
//   console.log(`${name} is a ${job.title} at ${job.company}`);
// });

// database.ref('location/city')
//   // .once('value')
//   .once('value')
//   .then((snapshot) => {
//     const val = snapshot.val();
//     console.log(val);
//   }).catch((e) => {
//     console.log('Error fetching data', e)
//   });


// database.ref().set({
//   name: 'Pattison Ho',
//   age: 32,
//   stressLevel: 6,
//   job: {
//     title: 'frontend developer',
//     company: '18Design'
//   },
//   location: {
//     city: 'New Taipei City',
//     country: 'Taiwan'
//   }
// }).then(() => {
//   console.log('Data is saved.');
// }).catch((error) => {
//   console.log('This failed.', error);
// });

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'Seattle'
// });

// database.ref()
//   .remove()
//   .then(() => {
//     console.log('Remove succeeded');
//   }).catch((error) => {
//     console.log('Remove failed', error)
//   })
