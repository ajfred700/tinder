import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./templates/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import TutorialsList from "./components/tutorials-list.component";
import AddTutorial from "./components/add-tutorial.component";
import FacebookLoginWithButton from "react-facebook-login";

const componentClicked = () => {
  console.log("Clicked!");
};

const LoginButton = ({ facebookResponse }) => (
  <FacebookLoginWithButton 
    appId="807505486520816"
    // autoLoad
    fields="name,email,picture"
    onClick={componentClicked}
    callback={facebookResponse}
    icon="fa-facebook"
  />
);

const UserScreen = ({ user }) => (
  <>
    <div className="app">
      <Router>
        <Switch>
          <Route path="/add-person">
            <Header />
            <AddTutorial />
          </Route>
          <Route exact path="/">
            <Header />
            <TutorialsList />
          </Route>
        </Switch>
      </Router>
    </div>
  </>
);

class App extends React.Component {
  state = { user: false };
  facebookResponse = (response) => {
    console.log(response);
    this.setState({ ...this.state, user: response });
  };

  render() {
    return (
      <div>
        {this.state.user ? (
          <UserScreen user={this.state.user} />
        ) : (
          <LoginButton facebookResponse={this.facebookResponse} />
        )}
      </div>
    );
  }
}

export default App;
