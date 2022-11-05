import './App.css';
import { Route,Routes } from 'react-router-dom';
// import TextControl from './components/textControl';
import Header from './components/Header/Header';
import {TextControl} from './components/textControl';
import Profile from './components/profile/Profile';
import Home from './components/Home';

function App() {



  
 
  return (
   

   <div className='App'>
  <Header/>
    <Routes>
      <Route path='/' element = {<Home/>}></Route>
      <Route path='/build' element={<TextControl/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/about' element={<div>hello</div>}/>
    </Routes>
    </div>
  );
}

export default App;
