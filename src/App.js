import './App.css';
import SignIn from './auth/sign_in';
import {Route, Switch} from 'react-router-dom';
import Home from './include/home';
import ResponsiveAppBar from './include/appbar';
import {UserAuthContextProvider} from './context/UserAuthContext'
import SignUp from './auth/sign_up';

function App() {
  return (
    <>
    <div className="main">
      <UserAuthContextProvider>
    <Switch>
      <Route exact path= "/">
      <ResponsiveAppBar>

      </ResponsiveAppBar>
        <Home />
      </Route>
    <Route path = '/login'>
      <SignIn/>
    </Route>
    <Route path = '/SignUp'>
      <SignUp/>
    </Route>
    </Switch>
    </UserAuthContextProvider>
    </div>
    </>
  );
}

export default App;
