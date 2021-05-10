import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';


import MembersCorner from "./component/MembersCorner";
import Login from './component/Login'


function App() {
  return (
    <div className="App">
 <Router>
        <Switch>
          <Route path="/membersCorner" component={MembersCorner} />
          <Route path="/login" component={Login} />
          <Route path="/" component={MembersCorner} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
