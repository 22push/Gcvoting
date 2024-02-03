import './App.css';
import { useState ,useEffect} from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Heropage from './pages/heropage';
import LoginPage from './pages/loginpage';
import Votingpage from './pages/votingpage';
import Finalpage from './pages/finalpage';
import { CandidateProvider } from './UI/createcontext';



function App() {
  const [dataFromChildB, setDataFromChildB] = useState(null);
  const [branch ,setbranch ] = useState(null);
  const handleDataFromChildB = (data) => {
    console.log(data);
    setDataFromChildB(data);
  };
  const handlebranchFromChildB = (data) => {
    setbranch(data);
  };
  const router = createBrowserRouter([
    { path: '/', element: <Heropage /> },
    { path: 'login', element: <LoginPage sendDataToParent={handleDataFromChildB} sendbranchtoparent = {handlebranchFromChildB} /> },
    { path: 'vote', element: <Votingpage senddatatochildA= {dataFromChildB} sendbranchtochildA= {branch} /> },
  ]);
  return (
    <RouterProvider router={router}>
      <CandidateProvider>
        {router}
      </CandidateProvider>
    </RouterProvider>
  );
}

export default App;
