import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';

const app1 = initializeApp({
    databaseURL: "https://mallsss-default-rtdb.asia-southeast1.firebasedatabase.app"
});

const app2 = initializeApp({
    databaseURL: "https://mallsss-history.asia-southeast1.firebasedatabase.app"
});

const db = getDatabase(app1);
const db_history = getDatabase(app2)
export { db, db_history };