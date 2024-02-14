import "./App.css";
import { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Heropage from "./pages/heropage";
import LoginPage from "./pages/loginpage";
import Votingpage from "./pages/votingpage";
import Finalpage from "./pages/finalpage";
import { CandidateProvider } from "./UI/createcontext";
import Voted from "./components/ThanksForVote.jsx";

function App() {
  const [dataFromChildB, setDataFromChildB] = useState(null);
  const [branch, setbranch] = useState(null);
  const handleDataFromChildB = (data) => {
    console.log(data);
    setDataFromChildB(data);
  };
  const handlebranchFromChildB = (data) => {
    setbranch(data);
  };
  const [voter, setVoter] = useState({
    name: "",
    email: "",
    dept: "",
  });
  const router = createBrowserRouter([
    { path: "login", element: <Heropage /> },
    { path: "/", element: <LoginPage voter={voter} setVoter={setVoter} /> },
    { path: "vote", element: <Votingpage voter={voter} setVoter={setVoter} /> },
  ]);
  return (
    <RouterProvider router={router}>
      <CandidateProvider>{router}</CandidateProvider>
    </RouterProvider>
  );
}

export default App;
