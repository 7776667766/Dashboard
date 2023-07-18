import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import {
    collection,
    getDocs,
    getFirestore
} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyA3laele0BESoiinTHuXXG52fdSPSKsNd0",
  authDomain: "trail-5891a.firebaseapp.com",
  projectId: "trail-5891a",
  storageBucket: "trail-5891a.appspot.com",
  messagingSenderId: "5617960055",
  appId: "1:5617960055:web:17a21f79ae0964cdb13272",
  measurementId: "G-7FDPK1TL2X"
};

const app2 = initializeApp(firebaseConfig);
const auth2 =getAuth()
export {app2,auth2}



const db = getFirestore()
const colRef=collection(db,'cardsinfo')
getDocs(colRef)
.then((snapshot)=>{
    let cardsinfo=[]
    snapshot.docs.forEach((doc)=>{
        cardsinfo.push({...doc.data(),id:doc.id})
    })
    console.log(cardsinfo)
})
.catch(err=>{
    console.log(err.message)
})
