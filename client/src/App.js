import './App.css';
import { useState
 } from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import Heropage from './pages/heropage';
import LoginPage from './pages/loginpage';
import Votingpage from './pages/votingpage';
import Finalpage from './pages/finalpage'
import { CandidateProvider } from './UI/createcontext';
const router = createBrowserRouter([
      { path:'/', element: <Heropage/> },
      {path: 'login', element:<LoginPage />},
      {path: 'vote', element:<Votingpage/>},
])
function App() {
  return (
    <RouterProvider router={router}>
      <CandidateProvider>
      {router}
      </CandidateProvider>
    </RouterProvider>
  );
  
}

export default App;
