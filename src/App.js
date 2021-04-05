import "bootstrap/dist/css/bootstrap.min.css";
import {Header} from "./Component/Header/index"
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
} from "react-router-dom";

function App() {
  return (
    <Router path="/">
      <Header/>

      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        {/* <Route exact path="/about">
          <About/>
        </Route> */}
        <Route path="/info">
          <Route exact path="/info/rule">
            <Rule/>
          </Route>
        </Route>
        <Route exact path="/news">
          <News/>
        </Route>
        <Route exact path="/register">
          <Register/>
        </Route>
        <Route exact path="/contact">
          <Contact/>
        </Route>
      </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
