import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

import Login from './component/Login'
import MembersCorner from "./component/MembersCorner";
import ContactForm from './component/ContactForm'
import ContactList from "./component/ContactList";


function App() {
  return (
    <div className="App">
 <Router>
        <Switch>
          <Route path="/membersCorner" component={MembersCorner} />
          <Route path="/login" component={Login} />
          <Route exact path="/" component={MembersCorner} />
          <Route exact path="/contactus" component={ContactForm} />
          <Route exact path="/contactlist" component={ContactList} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
