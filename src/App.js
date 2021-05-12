import React,{useReducer,useEffect,useState} from "react"
import "bootstrap/dist/css/bootstrap.min.css";
import {Header} from "./Component/Header/index"
// import {IndexHeader} from "./Component/Header/header"
import { AuthContext, AdminAuthContext } from "./appContext";
import request from "./utils/request";
import storage from "./utils/storage";
import { fetchUser } from "./api/user";
import {fetchAdmin } from './api/admin'
import {Home} from './Pages/Home/index'
import {Footer} from './Component/Footer/index'
import {Register} from './Pages/Register/index'
import {News} from './Pages/News/index'
import {Contact} from './Pages/Contact/index'
import {Rule} from './Pages/Info/rule'
import {Upload} from './Pages/Member/upload'
import {Sponser} from './Pages/Info/sponser'
import {Files} from './Pages/Admin/files'
import {FAQ} from './Pages/FAQ'
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
            car_num: action.car_num,
            accessToken: action.accessToken,
          };
        case "LOGIN":
          request.defaults.headers.common.Authorization = `Bearer ${action.accessToken}`;
          storage.setAccessToken(action.accessToken);
          return {
            ...prevState,
            user: action.user,
            car_num: action.car_num,
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
  // Admin Auth
  const [adminAuth,AdminDispatch]=useReducer(
    (prevState, action) => {
      switch (action.type) {
        case "RESTORE":
          request.defaults.headers.common.Authorization = `Bearer ${action.AdminToken}`;
          storage.setAdminToken(action.AdminToken);
          return {
            ...prevState,
            user: action.user,
            AdminToken: action.admin_token,
          };
        case "LOGIN":
          request.defaults.headers.common.Authorization = `Bearer ${action.AdminToken}`;
          storage.setAdminToken(action.AdminToken);
          return {
            ...prevState,
            user: action.user,
            AdminToken: action.admin_token,
          };
        case "LOGOUT":
          request.defaults.headers.common.Authorization = ``;
          storage.clear();
          return {
            ...prevState,
            user: null,
            AdminToken: null,
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
      const admin_token = storage.getAdminToken();
      if (accessToken) {
        // Set the token globally
        console.log("with accessToken")
        request.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
        // Validate token
        try {
          const user = await fetchUser();
          console.log("user----",user)
          authDispatch({
            type: "RESTORE",
            user: user.team_name,
            car_num: user.car_num,
            accessToken: accessToken,
          });
        } catch (error) {
          console.error("Invalid token");
        }
      }else if(admin_token){
        request.defaults.headers.common.Authorization = `Bearer ${admin_token}`;
        try{
          const admin = await fetchAdmin();
          console.log("admin---",admin)
          AdminDispatch({
            type: "RESTORE",
            user: admin.name,
            AdminToken: admin_token,
          })
        }catch (error){
          console.error("Invalid token")
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
    <AdminAuthContext.Provider
      value={{
        adminAuth,
        AdminDispatch,
      }}
    >
    <Router path="/">
      <Switch>
        <Route exact path="/">
          <Header type="index"/>
          <Home/>
          <Footer/>

        </Route>
        <Route exact path="/login">
          {authState.user || adminAuth.user? <Redirect to="/" /> : <Login />}
          {/* {adminAuth.user ? <Redirect to="/" /> : <Login />} */}
          <Footer/>

        </Route>
       
        <Route path="/admin">
          <Route exact path="/admin/files">
            <Header/>
            {adminAuth.user?(<Files/>):(<Home/>)}
            {/* 怪怪的 */}
            <Footer/>

          </Route>
        </Route>
        <Route path="/info">
          <Route exact path="/info/rule">
          <Header/>
            <Rule/>
            <Footer/>

          </Route>
          <Route exact path="/info/sponser">
          <Header/>
            <Sponser/>
            <Footer/>
          </Route>
        </Route>
        <Route exact path="/news">
          <Header/>
          <News/>
          <Footer/>

        </Route>
        <Route exact path="/register">
        <Header/>
          <Register/>
          <Footer/>
        </Route>
        <Route exact path="/contact">
          <Header/>
          <Contact/>
          <Footer/>
        </Route>
        <Route path="/member">
          <Route exact path="/member/upload">
            <Header/>
            {authState.user ? (
                <Upload/>) :<Login/>
            }
            {adminAuth.user?(<Redirect to="/"/>):(null)}
            <Footer/>
            </Route>
          <Route exact path="/member/qa">
            <Header/>
            <FAQ/>
            {/* <Footer/> */}
          </Route>
        </Route>
      </Switch>
    </Router>
    </AdminAuthContext.Provider>
  </AuthContext.Provider>
  );
}

export default App;
