import React, { useEffect } from "react";
import gc_logo from "../assets/gc_logo.png";
// import bgven from "../assets/bg-venue.jpg";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Google from "./../UI/googleauth";
import { Link, useNavigate } from "react-router-dom";
import image1 from "./../assets/img1.png";
import image2 from "./../assets/img2.jpeg";
import image3 from "./../assets/1mg3.jpeg";
import { useState, useRef } from "react";

const LoginPage = ({ voter, setVoter }) => {
  // const providedEmail1 = useRef();
  const navigate = useNavigate();

  // const checkEmail = (email) => {
  //   email = email.trim();
  //   return email.split("@")[1] === "iitbbs.ac.in";
  // };
  // let providedEmail = "22PHD01018@iitbbs.ac.in";
  // const [email2, setEmail2] = useState("");
  // const [selectedCand, setSelectedCand] = useState(null);
  const handleContinue = () => {
    if (voter.name !== "not found" && voter.dept !== "not found") {
      navigate("/vote");
    } else {
      console.log("invalid");
      alert("Enter a valid email or try to login with your college id");
    }
  };
  // const handleCheckboxChange = (e) => {
  //   console.log(e);
  //   setSelectedCand(e);
  // };
  // const Checkvalid = () => {
  //   console.log("gfdsdfgfds--------------------");
  //   const getBranch = (email) => {
  //     if (checkEmail(providedEmail)) {
  //       providedEmail = providedEmail.trim();
  //       let roll = providedEmail.split("@")[0];
  //       let branch = roll.substring(2, 4).toUpperCase();

  //       const validBranches = [
  //         "EC",
  //         "EE",
  //         "ME",
  //         "CS",
  //         "CE",
  //         "MM",
  //         "PHD",
  //         "BSC",
  //         "MTECH",
  //       ];

  //       if (validBranches.includes(branch)) {
  //         return branch;
  //       } else {
  //         // They are from M.Tech, Ph.D., or BSc
  //         const selectBranch = () => {
  //           let branch = prompt(
  //             `Enter your branch (e.g.${validBranches.join(", ")} )`
  //           );
  //           const selectedBranch = branch ? branch.toUpperCase() : null;
  //           if(validBranches.includes(selectedBranch)){
  //             return selectedBranch;
  //           }
  //           else{
  //             selectBranch();
  //           }

  //         };
  //         return selectBranch();
  //       }
  //     } else {

  //     }
  //   };

  //   let arr = [
  //     {
  //       Name: "Ayush Gupta",
  //       Roll: "22EC01057",
  //       Branch: "EC",
  //       image: image1,
  //     },

  //     {
  //       Name: "Ashish Kumar Singh",
  //       Roll: "22EE01073",
  //       Branch: "EE",
  //       image: image1,
  //     },

  //     {
  //       Name: "Pushkar Gupta",
  //       Roll: "22EE01018",
  //       Branch: "EE",
  //       image: image2,
  //     },

  //     {
  //       Name: "Divya Kumar",
  //       Roll: "22ME02040",
  //       Branch: "ME",
  //       image: "https://dummyimage.com/200x200",
  //     },

  //     {
  //       Name: "Vivek Singh",
  //       Roll: "22ME02042",
  //       Branch: "ME",
  //       image: "https://dummyimage.com/200x200",
  //     },
  //   ];

  //   const branch = getBranch();

  //   let candidates = arr.filter((cand) => {
  //     if (cand.Branch === branch) {
  //       return cand;
  //     }
  //   });

  //   candidates.push({
  //     Name: "NOTA",
  //     Roll: "NOTA",
  //     Branch: null,
  //     image: image3,
  //   });
  //   console.log(candidates);
  //   props.sendDataToParent(candidates);
  //   props.sendBranchtoparent(branch)
  // };

  return (
    <div>
      <section className="bg-gradient-to-r from-orange-400  via-white to-sky-600 flex">
        <div className="flex flex-col items-center px-6 py-8 mx-auto min-h-screen md:h-screen lg:py-0 mt-0">
          {/* <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img
              className="w-20 h-20 mr-2 rounded-full"
              src={gc_logo}
              alt="logo"
            />
            <p className="text-5xl my-font">General Championship 2024</p>
          </a> */}
          <img
            className="w-64 h-64 m-20 rounded-full "
            src={gc_logo}
            alt="logo"
          />
          <h1 className="text-5xl my-font text-center font-semibold text-gray-900 dark:text-clr">
            General Championship 2024
          </h1>

          <div className="rounded-lg shadow border md:mt-6 lg:mt-8 xl:p-0 bg-blend-darken border-green-400 border-2 px-5 py-4 hover:text-green-600">
            <a
              href="#"
              className="my-font text-lg font-bold leading-tight tracking-tight md:text-2xl dark:text-green-400 hover:text-green-600 hover:border-green-600"
            >
              <GoogleOAuthProvider clientId="792139111620-baqoia3mr8328qi9ngvbhfv440jejf9v.apps.googleusercontent.com">
                <Google setVoter={setVoter} />
              </GoogleOAuthProvider>
            </a>
          </div>
          <div className="rounded-lg shadow border md:mt-6 lg:mt-8 xl:p-0 bg-blend-darken border-green-400 border-2 px-5 py-4 hover:text-green-600">
            <button
              className="my-font text-lg p-4 font-bold leading-tight tracking-tight md:text-2xl dark:text-green-400 hover:text-green-600 hover:border-green-600"
              onClick={handleContinue}
            >
              Continue
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
