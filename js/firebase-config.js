// TODO: REPLACE THE VALUES BELOW WITH YOUR FIREBASE PROJECT CONFIGURATION
// 1. Go to console.firebase.google.com
// 2. Create a new project
// 3. Go to Project Settings -> General -> "Your apps" section
// 4. Click the "</>" Web icon to create a web app
// 5. Copy the config object and paste it here

const firebaseConfig = {
    apiKey: "AIzaSyD6ZwKRYEOFM4qZKtOvp2pEJtY9dZ4J6GA",
    authDomain: "edutracker-2007.firebaseapp.com",
    projectId: "edutracker-2007",
    storageBucket: "edutracker-2007.firebasestorage.app",
    messagingSenderId: "269857525202",
    appId: "1:269857525202:web:4c7ae8b61a1dd2d331cc0b"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

console.log("Firebase Initialized");
