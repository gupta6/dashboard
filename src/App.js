import {BrowserRouter, Switch, Route} from 'react-router-dom';

import classes from './App.module.css';
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import Main from './components/Main/Main';

function App() {
  return (
    <div className={classes.App}>
      <Header/>      
      <div className={classes.content}>
        <SideBar/>
        <BrowserRouter>
          <Switch>
            <Route path="/">
              <Main />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
