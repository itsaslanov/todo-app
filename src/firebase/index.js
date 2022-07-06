import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
    apiKey: 'AIzaSyAfCTG8wN8mAOVryhFGR-JvDpbXT4HusDY',
    authDomain: 'todo-app-866a9.firebaseapp.com',
    projectId: 'todo-app-866a9',
    storageBucket: 'todo-app-866a9.appspot.com',
    messagingSenderId: '607346772928',
    appId: '1:607346772928:web:804b6ae9d06436d6259625'
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
    db
}
