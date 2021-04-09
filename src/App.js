import React,{useReducer,useEffect,useState} from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import {Header} from "./Component/Header/index"
import {IndexHeader} from "./Component/Header/header"
import { AuthContext } from "./appContext";
import request from "./utils/request";
import storage from "./utils/storage";
import { fetchUser } from "./api/user";

import {Home} from './Pages/Home/index'
import {About} from './Pages/About/index'
import {Footer} from './Component/Footer/index'
import {Register} from './Pages/Register/index'
import {News} from './Pages/News/index'
import {Contact} from './Pages/Contact/index'
import {Rule} from './Pages/Info/rule'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { Login } from "./Pages/Login";


function App() {
  // Auth
  const [authState, authDispatch] = useReducer(
    (prevState, action) => {
      switch (action.type) {
        case "RESTORE":
          request.defaults.headers.common.Authorization = `Bearer ${action.accessToken}`;
          storage.setAccessToken(action.accessToken);
          return {
            ...prevState,
            user: action.user,
            accessToken: action.accessToken,
          };
        case "LOGIN":
          request.defaults.headers.common.Authorization = `Bearer ${action.accessToken}`;
          storage.setAccessToken(action.accessToken);
          return {
            ...prevState,
            user: action.user,
            accessToken: action.accessToken,
          };
        case "LOGOUT":
          request.defaults.headers.common.Authorization = ``;
          storage.clear();
          return {
            ...prevState,
            user: null,
            accessToken: null,
          };
        default:
          return {
            ...prevState,
          };
      }
    },
    {
      user: null,
      accessToken: null,
    }
  );
  // Setup
  useEffect(() => {
    const bootstrapAsync = async () => {
      // Auth
      const accessToken = storage.getAccessToken();
      if (accessToken) {
        // Set the token globally
        request.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
        // Validate token
        try {
          const user = await fetchUser();
          authDispatch({
            type: "RESTORE",
            user: user,
            accessToken: accessToken,
          });
        } catch (error) {
          console.error("Invalid token");
        }
      }
      
    };
    bootstrapAsync();
    // console.log((authState.user));
  }, []);

  return (
    <AuthContext.Provider
    value={{
      authState,
      authDispatch,
    }}
  >
    <Router path="/">
      <Switch>
        <Route exact path="/">
          <IndexHeader/>
          <Home/>
        </Route>
        <Route exact path="/login">
          {authState.user ? <Redirect to="/" /> : <Login />}
        </Route>
        <Route path="/info">
          <Route exact path="/info/rule">
          <Header/>
            <Rule/>
          </Route>
        </Route>
        <Route exact path="/news">
          <Header/>
          <News/>
        </Route>
        <Route exact path="/register">
        <Header/>
          <Register/>
        </Route>
        <Route exact path="/contact">
          <Header/>
          <Contact/>
        </Route>
      </Switch>
      <Footer/>
    </Router>
  </AuthContext.Provider>
  );
}

export default App;
