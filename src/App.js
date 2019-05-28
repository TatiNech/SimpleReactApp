import './App.css';
import React from 'react';
import Home from './Home';
import About from './About';
import Registration from './Registration';
import Profile from './Profile';
import Contact from './Contact';
import Shop from './Shop';
import Search from './Search';
import logo from './img/logo.png';



import {BrowserRouter, Route, Link} from 'react-router-dom';
import  createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();



class Navigation extends React.Component{
  

  render(){
    return(
      <BrowserRouter history = {history}>  
         <div className="menu">
         <img className ="logo" src = {logo}></img>
           <ul type = "square">
             <li><Link to="/">О нас</Link></li>
             <li><Link to="/about">Турниры</Link></li>
             <li><Link to="/registration">Регистрация</Link></li>
             <li><Link to="/profile">Мой профиль</Link></li>
             <li><Link to="/contact">Контакты</Link></li>
             <li><Link to="/shop">Магазин</Link></li>
             <li><form>
                  <input type="text" placeholder="поиск"/>
                </form></li>
           </ul>
           
         </div>

         <hr/> 
         {/* горизонтальная линия */}

      <Route exact path = "/" component= {Home} />
      <Route path = "/about" component= {About} />
      <Route path = "/registration" component= {Registration} />
      <Route path = "/profile" component= {Profile} />
      <Route path = "/contact" component= {Contact} />  
      <Route path = "/shop" component= {Shop} />
      <Route path = "/search" component= {Search} />
      </BrowserRouter>
    )
  }
}

export default Navigation;




