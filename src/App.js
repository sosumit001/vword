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
      <Route path='/vword' element = {<Home/>}></Route>
      <Route path='/vword/build' element={<TextControl/>}/>
      <Route path='/vword/profile' element={<Profile/>}/>
      <Route path='/vword/about' element={<div>hello</div>}/>
    </Routes>
    </div>
  );
}

export default App;
