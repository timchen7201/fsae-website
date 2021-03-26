import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import {Header} from "./Header/index"
import {Home} from './Home/index'
import {About} from './About/index'
import {Footer} from './Footer/index'
import {Registry} from './Registry/index'
import {News} from './News/index'
import {Contact} from './Contact/index'
import {Rule} from './Info/rule'
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
        <Route exact path="/about">
          <About/>
        </Route>
        <Route path="/info">
          <Route exact path="/info/rule">
            <Rule/>
          </Route>
        </Route>
        <Route exact path="/news">
          <News/>
        </Route>
        <Route exact path="/register">
          <Registry/>
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
