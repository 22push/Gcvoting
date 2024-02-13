import express from "express";
import admin from "firebase-admin";
import { firestoreDB } from "../config/config"; 

export const router = express.Router();

router.get("/:email", async (req, res) => {
  const { email } = req.params;

  if (!email) {
    return res.status(400).json({ message: "Email parameter is missing." });
  }

  const docRef = firestoreDB.collection('students').doc('student-details');

  try {
    const doc = await docRef.get();
    if (doc.exists) {
      const outerDetails = doc.data() as { [key: string]: { [key: string]: { dept: string, name: string } } };
      const details = outerDetails.details;

      const studentDetails = details[email] || {name: "not found", dept: "not found"};

      console.log("Student Details: ", studentDetails);
      console.log(studentDetails.dept);

      if (studentDetails) {
        // return res.status(200).json({ dept: studentDetails.dept });
        return res.status(200).json({ studentDetails });
      } else {
        return res.status(404).json({ message: "Student not found" });
      }
    } else {
      return res.status(404).json({ message: "No student details found" });
    }
  } catch (error) {
    console.error('Error accessing document:', error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

export default router;
