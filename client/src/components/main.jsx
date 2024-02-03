import React from 'react';
import styles from './main.module.css';
import img from './../assets/kuch.jpg';
// import { GoogleOAuthProvider } from '@react-oauth/google';
// import Google from './../../UI/google.tsx'
const Main = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
      <img src={img} alt="" />
      </div>
      <div id="content" className={styles.signupContainer}>
        <h1 className={styles.contentHeading}>General Championship</h1>
        <p className={styles.contentPara}>General Championship is the annual inter-departmental tournament where students strive to uphold their department’s pride. This serves as the right platform for students of various years to have a healthy interaction with each other. Points are allotted to winners and runners in each event accordingly and the department with the highest aggregate of points across all events is named the General Champion. Tournaments are held under 3 different councils, namely: Technical, Cultural and Sports. Each event sees a winner and points are awarded according to the standings, thus making an overall points tally.</p>
      </div>
    </div>
  );
};

export default Main;