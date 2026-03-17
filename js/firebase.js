// Import Firebase (module CDN)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// 🔥 PASTE YOUR CONFIG HERE
const firebaseConfig = {
  apiKey: "AIzaSyBAjHLVRs8RlFso5WS57HNQt5sckScsVRU",
  authDomain: "softnexus-c6057.firebaseapp.com",
  projectId: "softnexus-c6057"
};

// Initialize
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// Signup
window.signUp = async function(){
  let email = prompt("Email");
  let pass = prompt("Password");
  await createUserWithEmailAndPassword(auth,email,pass);
  alert("Account created");
}

// Login
window.signIn = async function(){
  let email = prompt("Email");
  let pass = prompt("Password");
  await signInWithEmailAndPassword(auth,email,pass);
  alert("Logged in");
}

// Add app
window.addApp = async function(){
  let name = prompt("App name");
  let img = prompt("Icon URL");
  let cat = prompt("Category");

  await addDoc(collection(db,"apps"),{
    name, img, cat, downloads:0
  });
}

// Load apps
window.loadFromDB = function(){
  onSnapshot(collection(db,"apps"), snapshot=>{
    apps = [];
    snapshot.forEach(doc=>apps.push(doc.data()));
    loadApps();
  });
}

// Start
loadFromDB();