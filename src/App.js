import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

import Login from './component/Login'
import MembersCorner from "./component/MembersCorner";



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
