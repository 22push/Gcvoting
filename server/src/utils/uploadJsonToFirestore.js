const admin = require('firebase-admin');
const fs = require('fs');

const serviceAccount = require('../../gc-app-2024-4e2f9-firebase-adminsdk-p1c81-546514a432.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

async function uploadJsonToFirestore(filePath, collectionPath) {
  // Read JSON file
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const jsonData = JSON.parse(fileContent);

  // Transform data structure
  const transformedData = jsonData.reduce((acc, { email, ...rest }) => {
    acc[email] = rest;
    return acc;
  }, {});

  // console.log(transformedData);

  await db.collection('students').doc('student-details').set({
    details: transformedData
  })
  console.log('All documents uploaded successfully.');
}

uploadJsonToFirestore('../../data/student-details.json', 'students/student-details').catch(console.error);
