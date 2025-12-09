// TODO: REPLACE THE VALUES BELOW WITH YOUR FIREBASE PROJECT CONFIGURATION
// 1. Go to console.firebase.google.com
// 2. Create a new project
// 3. Go to Project Settings -> General -> "Your apps" section
// 4. Click the "</>" Web icon to create a web app
// 5. Copy the config object and paste it here

const firebaseConfig = {
    apiKey: "YOUR_API_KEY_HERE",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

console.log("Firebase Initialized");
