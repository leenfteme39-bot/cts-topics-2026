
import { initializeApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAFi4J5D3AclYfaTCtkU-KEvh8uPyfxQE8",
  authDomain: "final-project-client-426c7.firebaseapp.com",
  projectId: "final-project-client-426c7",
  storageBucket: "final-project-client-426c7.firebasestorage.app",
  messagingSenderId: "832654083111",
  appId: "1:832654083111:web:0d808674a22b1e79bc3a02"
};
const app = initializeApp(firebaseConfig);
export let db =  getFirestore(app)
