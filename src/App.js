import './categories.styles.scss'
import Home from './routes/Home/Home';
import { Routes, Route } from 'react-router-dom';


export default function App() {


  return (
    

  <Routes>
    <Route path='/home' element ={<Home/>}/>
  </Routes>
  
  );
}


