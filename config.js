import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';

const app1 = initializeApp({
    databaseURL: "https://mallsss-default-rtdb.asia-southeast1.firebasedatabase.app"
});

const db = getDatabase(app1);
export { db };