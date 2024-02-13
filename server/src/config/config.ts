export const PORT = process.env.PORT || 5000;

import { cert, initializeApp } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// const firebaseConfig = {
//   apiKey: process.env.FIREBASE_API_KEY,
//   authDomain: process.env.FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.FIREBASE_PROJECT_ID,
//   appId: process.env.FIREBASE_APP_ID,
//   measurementId: process.env.FIREBASE_MEASUREMENT_ID,
//   messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
//   storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
// };

const firebaseConfig = {
  type: "service_account",
  project_id: "gc-app-2024-4e2f9",
  private_key_id: "8898f431229b56119a1bb72c0519e131c8ec487a",
  private_key:
    "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCvq6w4X5iUGRag\nwCoWuYjSs4zddZo0bW6r4oSjeSC+JoXayT7jARuGhy2MgN0B/UA9CUIPGwhVDFqK\n4d94DAhTh9L/4FOl2KOoBWbKkHg8XeCaxf5y0zI3RRB1qIttvOxpoYN5CoD7vJRk\nZXr+cPSEVzXBxI/2RqN2uN9snQ1wzQ63sldNxBwQfUFBRt4rs9NSo/p6VtZd6B4p\n0+VAko4MEil3ePB0QhqUj2ZVSOF9PaHK6Dz4YhQpNZWSWzSW1y2oGnBr1np2eSIn\naYZBW/D6XTgCF604vdgj5/C3hkSbmiRsZ3FDBDXCF7Ot55FzyE8uVez3pXaL6O5J\n89vXGRmZAgMBAAECggEABb60QuKzc3JvmEG4jqYyKIvZKTvpl1nV0va1NkBllvpd\nCcbnkNZuL0PX9D6Zm7FLysM0/xf3+YoOIvkYjQ09r3ejaZ1NNwEC9yF4F1tKp1S9\nneooNFqeS4rtax+gMa5KP/kZetmiVrk31CGyeEQ65uIQPr4+JARy35TTr7JiKGRq\ndJlkXPhtOV1QD8QxU7bmrB/bw7FSvoMoZMC4DIKiy+wjBzHbPAfGV007tyFkToAT\nW2UsFgj1nG3HoNjrnKqjRgZSMx8DeDNpMUl38z/DCC/u29gQi4jYiVSWsFOsEubK\np17LTQ5yWNB3kKvDVk9El2DUvWlGCj37avlS7DpXNQKBgQDkPm4Nu+gJnNkaQAo0\n/mTtr6AUrHWPMeVY7pRuy+Op4JB+v4fBn90GQTk+o0Mm2JDKVJtS1Ku0+Cihk3r+\nFZ1jkaybsqYZBM2VRdoO3XzLnsITw4jt5QrKliU822CCeKgov9Oi2HdrthFkGYcc\nj2zXB5Sqc/Z4CWN5w2WQtCRpdQKBgQDFCI8YGy+/8Lmw7Jo0bknseNFTem/2W3jS\nrf2zw2eyBqpu7Tpw3cUogKguhSDSGOEOWbhEkHYfey3acvhnw++IIntNKRVQySXY\nOiOrQ0wx/sWRn2gXIwnpIcR98NP6+8DqIFNYbDFOXFBSQCisyJLnTqD+4TUMAVbS\nn5xAQslHFQKBgQCK+BQMGrASQkTRvdI5J/eN3NQMImFFuayZ9FG+EDhi848nDTj8\nRHjP2SCgqck2OsAV4WPdEA4oFryufFxznfeBa238Ms79Brahv7EgQe09EUG7xN93\ncXCbnsW3gx8E8a/5d6rFSSWVGHsIRp7EXfN4DW6QRiD4P0cpGTaa34QYDQKBgFAR\nUlTxd04AfPUwsNltmAzIbAgIUUdDlK3IlrheR91IaCn7rSwAcwYqgi2lW9kE0zAJ\ntZ/nNJlGbTPAVMGWFdi0anbIoyjZFM/xkF0gU+5dIdwzcxEz4+shFcA4BWyQsaxy\nxmvAS6kUSm+iMuVD/K6SfUoWKoBeavHcepqCiVihAoGAPhwY8suI3R12ygCLqCYp\ngf/QAtZ5zlPfJZAR/MqDX+UCVMjo4CHONO+NWKExniSqq8eIarS9LgrSGiiu/2a0\n0Uz/YOFmlRW9/fLfBkRCa/jM8+e8d3Uz9k8Riv58Prx9wJfskO5AsAR8EnrmNszH\nJzKx4NCLli+F+MP4EE0zI1s=\n-----END PRIVATE KEY-----\n",
  client_email:
    "firebase-adminsdk-p1c81@gc-app-2024-4e2f9.iam.gserviceaccount.com",
  client_id: "117851484655433317514",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-p1c81%40gc-app-2024-4e2f9.iam.gserviceaccount.com",
  universe_domain: "googleapis.com",
};

initializeApp({
  credential: cert({
    projectId: firebaseConfig.project_id,
    privateKey: firebaseConfig.private_key,
    clientEmail: firebaseConfig.client_email,
  }),
});

export const firestoreDB = getFirestore();
