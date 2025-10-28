const admin = require("firebase-admin");

// Download your service account key JSON from Firebase Console
// (Project Settings → Service Accounts → Generate new private key)
const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

// Function to set admin claim
async function makeAdmin(uid) {
  await admin.auth().setCustomUserClaims(uid, { admin: true });
  console.log(`✅ User ${uid} is now an admin`);
}

// Replace with the UID of the user you want to promote
makeAdmin("RjTflp342OSvFahVmTEz4Us7mhx1");
