import React from "react";
import "./App.css";
import Header from "./components/layouts/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Contacts from "./components/contacts/Contacts";
import { Provider } from "./context";
import AddContact from "./components/contacts/AddContact";
import EditContact from "./components/contacts/EditContact";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/pages/About";

function App() {
  return (
    <Provider>
      <Router>
        <div className="App">
          <Header branding="Contact Manager" />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Contacts} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contact/add" component={AddContact} />
              <Route exact path="/contact/update/:id" component={EditContact} />
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
