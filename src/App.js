import './categories.styles.scss'
import Home from './routes/Home/Home';
import { Routes, Route } from 'react-router-dom';
import Navigation from './routes/Navigation/Navigation';
import SignIn from './routes/sign-in/SignIn';



export default function App() {


  return (
    

  <Routes>
    <Route path= '/' element ={<Navigation/>}>
      <Route index element ={<Home/>}/>
      <Route path='sign-in' element ={<SignIn/>}/>
    </Route>
  </Routes>
  
  );
}


