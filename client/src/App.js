import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';

import Heropage from './pages/heropage';
import LoginPage from './pages/loginpage';
import Votingpage from './pages/votingpage';
import Finalpage from './pages/finalpage'
const router = createBrowserRouter([
      { path:'/', element: <Heropage/> },
      {path: 'login', element:<LoginPage/>},
      {path: 'login/vote', element:<Votingpage/>},
])
function App() {
  return <RouterProvider router={router} />;
}

export default App;
