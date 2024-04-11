import logo from './logo.svg';
import './App.css';

import Footer from './Netflix Component/Home Com/Footer';
import Netsign from './Netflix Component/Home Com/Netsign';
import { Route,Routes } from 'react-router-dom';
import Main from './Netflix Component/Home Com/Main';
import Login from './Netflix Component/Home Com/Login';
import Movies from './Netflix Component/Home Com/Movies';
import Togglecom from './Toggle Com/Togglecom';
import Blogs from './Blogs Component/Blogs';
import Getmore from './Blogs Component/Getmore';

function App() {
  return (
    <>
      {/* <Main /> */}
      
      <Routes>
        <Route exact path='/' element={<Blogs/>} />
        <Route exact path='/movie/:id' element={<Getmore/>}/>
      </Routes>
      {/* <Login/> */}
      <Blogs/>
      {/* <Togglecom/> */}
    </>
  );
}

export default App;
