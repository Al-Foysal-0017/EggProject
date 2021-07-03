import React, {useState} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import {Switch, Route} from 'react-router-dom'
import Home from './pages';
import About from './pages/About';
import Contact from './pages/Contact';
import Menu from './pages/Menu';
import Dropdown from './components/Dropdown';
import imageOne from "./images/smileEgg.jpeg"

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Navbar toggle={toggle} />
      <Dropdown isOpen={isOpen} toggle={toggle}/>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/menu" exact component={Menu} />
      </Switch>

    
      <div class="grid grid-flow-row grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-3 gap-4">
  <div className="bg-red-200 p-12 m-5 rounded-full text-white font-bold text-5xl flex justify-center">1</div>
  <div className="bg-red-200 p-12 m-5 rounded-full text-white font-bold text-5xl flex justify-center">2</div>
  <div className="bg-red-200 p-12 m-5 rounded-full text-white font-bold text-5xl flex justify-center">3</div>
  <div className="bg-red-200 p-12 m-5 rounded-full text-white font-bold text-5xl flex justify-center">4</div>
  <div className="bg-red-200 p-12 m-5 rounded-full text-white font-bold text-5xl flex justify-center">5</div>
  <div className="bg-red-200 p-12 m-5 rounded-full text-white font-bold text-5xl flex justify-center">6</div>
  <div className="bg-red-200 p-12 m-5 rounded-full text-white font-bold text-5xl flex justify-center">7</div>
  <div className="bg-red-200 p-12 m-5 rounded-full text-white font-bold text-5xl flex justify-center">8</div>
  <div className="bg-red-200 p-12 m-5 rounded-full text-white font-bold text-5xl flex justify-center">9</div>
</div>


<div className="flex justify justify-center items-center ">
<div className="box-content max-w-xl w-80 inline-block border bg-yellow-400 text-white p-12 rounded-3xl cursor-pointer flex flex-col justify justify-center items-center">
  <img src={imageOne} alt="" className="w-20 h-20 rounded-full border border-white-500"/>
  <div className="font-medium text-xl pt-5">Naiem Al Foysal</div>
  <div className="font-extralight">Web Designer and Developer</div>
</div>
</div>


      <Footer/>
    </>
  );
}

export default App;
