import React, { createContext, useReducer } from 'react'
import { Route, Routes, BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import Logout from './components/Logout';
import SignUp from './components/SignUp';
import Main from './components/Main';
import Footer from './components/Footer';
import Error from './components/Error404';
//import ReducerModel from './Reducer/Reducer';
//const { initialState, reducer } = ReducerModel;

// context api
export const UserContext = createContext();
// create reducer
const reducer = (state, action) =>{
  if (action.type === "USER") {
      return action.payload;
  }
  return state;
}
const initialState = null;

const Routing = () =>{
  return (
    <>
    <Routes>
  <Route exact path="/" element= {<Main />} />

  <Route path="/about" element= {<About />} />

  <Route path="/contact" element= {<Contact />} />

  <Route path="/login" element= {<Login />} />

  <Route path="/signup" element= {<SignUp />} />

  <Route path="/logout" element= {<Logout />} />

  <Route path="/*" element= {<Error />} />

  </Routes>
    </>
  )
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
    <UserContext.Provider value={{state, dispatch}}>
      <BrowserRouter>
        <Navbar />
        <Routing />
        <Footer />
      </BrowserRouter>
    </UserContext.Provider>  
    </>
    
  )
}

export default App