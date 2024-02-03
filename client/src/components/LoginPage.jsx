import React from "react";
import gc_logo from "../assets/gc_logo.png";
// import bgven from "../assets/bg-venue.jpg";
import { GoogleOAuthProvider } from '@react-oauth/google';
import Google from './../UI/googleauth'
import { Link } from 'react-router-dom';
import LoginPageStyle from './LoginPageStyle.module.css'
const LoginPage = () => {
  return (
    <div className={LoginPageStyle.container}>
  <section  className="bg-clr flex containerLogin">
    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto min-h-screen md:h-screen lg:py-0">
      <a
        href="#"
        className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
      >
        <img
          className="w-20 h-20 mr-2 rounded-full"
          src={gc_logo}
          alt="logo"
        />
        <p className="text-5px">General Championship 2024</p>
      </a>

      <div className="rounded-lg   md:mt-6 lg:mt-8 xl:p-0 bg-blend-darken   px-5 py-4 hover:text-green-600">
        <a
          href="#"
          className="my-font text-lg font-bold leading-tight tracking-tight md:text-2xl dark:text-green-400 hover:text-green-600 hover:border-green-600"
        >
         <GoogleOAuthProvider clientId="792139111620-baqoia3mr8328qi9ngvbhfv440jejf9v.apps.googleusercontent.com">
         <Google />
        </GoogleOAuthProvider>
        </a>
      </div>
      <div className="rounded-lg shadow border md:mt-6 lg:mt-8 xl:p-0 bg-blend-darken border-green-400 border-2 px-5 py-4 hover:text-green-600">
        <Link
          to = 'vote'
          href="#"
          className="my-font text-lg font-bold leading-tight tracking-tight md:text-2xl dark:text-green-400 hover:text-green-600 hover:border-green-600"
        >
          Continue
        </Link>
      </div>
    </div>
  </section>
</div>

  );
};

export default LoginPage;
